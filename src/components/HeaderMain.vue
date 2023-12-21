<script setup>
import MoneyIcon from "@/components/icons/MoneyIcon.vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <header class="d-flex justify-center items-center py-4">
    <div class="flex flex-row flex-nowrap items-center my-8">
      <span
        class="flex-grow block border-t border-slate-700"
        aria-hidden="true"
        role="presentation"
      ></span>
      <h1
        class="flex flex-col justify-center items-center lg:flex-row block mx-4 px-4 py-4 text-2xl leading-none font-medium uppercase bg-slate-700 text-white rounded-xl align-middle justify-center"
      >
        <MoneyIcon class="inline-block w-10 h-10 me-2 mb-2 lg:mb-0" />
        <span class="inline-block">{{ $props.title }}</span>
      </h1>
      <span
        class="flex-grow block border-t border-slate-700"
        aria-hidden="true"
        role="presentation"
      ></span>
    </div>
  </header>
</template>

<style scoped></style>
