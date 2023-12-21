<script setup>
import VueMultiselect from "vue-multiselect";
import { ref, watch } from "vue";

const props = defineProps({
  headerContent: {
    type: Object,
    required: true,
  },
  modelValue: {
    type: Object,
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
  conversionValue: {
    type: [String, Number],
    required: true,
  },
});

const value = ref(props.modelValue);
const emit = defineEmits(["update:modelValue"]);

watch(value, (newValue) => {
  emit("update:modelValue", newValue);
});

watch(
  () => props.modelValue,
  (newValue) => {
    if (value.value) {
      value.value = newValue;
    }
  }
);
</script>

<template>
  <div class="card lg:min-w-[450px]" aria-label="card">
    <div class="mx-auto max-w-md">
      <div
        class="space-y-4 py-4 text-base leading-7 text-gray-600"
        aria-label="card-header"
      >
        <h2 class="text-2xl font-bold text-gray-900">
          {{ $props.headerContent.title }}
        </h2>
        <p>
          {{ $props.headerContent.subTitle }}
        </p>
      </div>
      <div class="py-4" aria-label="card-body">
        <VueMultiselect
          v-model="value"
          placeholder="Select one"
          label="name"
          track-by="name"
          :options="$props.options"
          :show-labels="false"
          :allow-empty="false"
          deselect-label=""
        >
          <template #singleLabel="{ option }">
            <div class="flex items-center font-bold">
              <div class="flex-grow">{{ option.name }} {{ option.code }}</div>
              <div class="flex-shrink-0">
                {{ option.symbol }}
              </div>
            </div>
          </template>
          <template #noResult>No results found.</template>
        </VueMultiselect>
      </div>

      <div
        v-if="value"
        class="pt-8 font-bold leading-7"
        aria-label="card-footer"
      >
        <span class="ms-4 text-3xl">{{ conversionValue }}</span>
        <span class="ms-4 text-2xl">{{ value.symbol }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.multiselect__option--highlight {
  @apply bg-blue-300 text-white;
}

.multiselect__option--selected.multiselect__option--highlight {
  @apply bg-blue-500;
}
</style>
