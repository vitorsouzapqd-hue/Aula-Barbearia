<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <button
    class="border border-typography/30 hover:border-primary text-typography hover:text-primary font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
  >
    {{ label }}
  </button>
</template>
