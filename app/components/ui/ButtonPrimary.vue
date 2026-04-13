<script setup lang="ts">
defineProps<{
  label: string
}>()

defineOptions({ inheritAttrs: false })
</script>

<template>
  <button
    v-bind="$attrs"
    class="bg-primary hover:bg-primary-dark text-background font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
  >
    {{ label }}
  </button>
</template>
