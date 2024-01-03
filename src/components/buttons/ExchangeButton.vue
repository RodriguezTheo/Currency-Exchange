<script setup>
import ArrowRightLeftIcon from "@/components/icons/ArrowRightLeftIcon.vue";


</script>

<template>
  <button
    class="relative z-10 w-[50px] h-[50px] rounded-full"
  >
    <span class="hidden">Exchange</span>
    <span
      class="group relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow"
    >
      <span
        class="flex flex-col justify-between transform transition-all duration-300 origin-center overflow-hidden group-hover:rotate-180"
      >
        <ArrowRightLeftIcon
          class="w-8 h-8 text-white rotate-90 lg:rotate-0 group-hover:text-cyan-200 group-active:text-cyan-400"
        />
      </span>
    </span>
  </button>
</template>

<style scoped></style>
