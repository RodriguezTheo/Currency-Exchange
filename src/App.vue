<script setup>
import HeaderMain from "@/components/HeaderMain.vue";
import ContainerExchange from "@/components/ContainerExchange.vue";
import { computed, onMounted, ref, watch } from "vue";
import { ExchangeRateServices } from "@/services/exchangeRateServices.js";
import { formatDataCurrencies } from "@/utils/formatDataCurrencies.js";
import ExchangeButton from "@/components/buttons/ExchangeButton.vue";

const baseCurrency = ref(null);
const baseCode = computed(() => baseCurrency.value?.code);

const targetCurrency = ref(null);
const targetCode = computed(() => targetCurrency.value?.code);

const targetValue = computed(() =>
  conversionRates.value ? conversionRates.value[targetCode.value] : null
);

const switchTargetAndBase = ref(false);

const conversionRates = ref(null);
const setConversionRates = (data) => {
  conversionRates.value = data;
};

const options = ref([]);
const setOptions = (data) => {
  options.value = data;
};

const fetchCurrencies = async () => {
  try {
    const res = await ExchangeRateServices.getSupportedCurrencies();

    const isSuccessful = res.result === "success";
    const data = res.supported_codes;
    const hasData = data?.length > 0;

    if (isSuccessful && hasData) {
      return formatDataCurrencies(data);
    }
    return [];
  } catch (error) {
    console.error(error);
  }
};

const fetchExchangeRate = async (code) => {
  try {
    const res = await ExchangeRateServices.getExchangeRate(code);

    const isSuccessful = res.result === "success";
    const data = res.conversion_rates;

    if (isSuccessful && data) {
      return data;
    }
    return null;
  } catch (error) {
    console.error(error);
  }
};

const setInitialsValues = () => {
  if (!options.value.length) return;
  const usdTarget = options.value.find((item) => item.code === "USD");
  baseCurrency.value = usdTarget;
  targetCurrency.value = usdTarget;
};

watch([baseCode, targetCode], async () => {
  const res = await fetchExchangeRate(baseCode.value);
  setConversionRates(res);
});

watch(switchTargetAndBase, () => {
  const oldBase = baseCurrency.value;
  const oldTarget = targetCurrency.value;

  baseCurrency.value = oldTarget;
  targetCurrency.value = oldBase;
});

onMounted(async () => {
  const currencies = await fetchCurrencies();
  setOptions(currencies);
  setInitialsValues();
});
</script>

<template>
  <div
    class="relative overflow-hidden flex flex-col min-h-screen bg-gray-100 bg-center"
  >
    <HeaderMain title="Currency Exchange Rate" />
    <main class="flex-grow flex flex-col items-center justify-center">
      <Transition name="fade">
        <div v-if="targetValue" class="flex flex-col gap-4 lg:flex-row">
          <ContainerExchange
            v-model="baseCurrency"
            :headerContent="{
              title: 'Base currency',
              subTitle: 'Choose base currency to get exchange rate.',
            }"
            :options="options"
            conversionValue="1"
          />
          <div class="relative flex justify-center items-center mx-2">
            <ExchangeButton v-model="switchTargetAndBase" />
            <span
              class="border-gray-200 border w-full lg:w-0 lg:h-full absolute lg:right-1/2"
            ></span>
          </div>
          <ContainerExchange
            v-model="targetCurrency"
            :headerContent="{
              title: 'Target currency',
              subTitle: 'Choose target currency to get exchange rate.',
            }"
            :options="options"
            :conversionValue="targetValue"
          />
        </div>
      </Transition>
    </main>
  </div>
</template>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
