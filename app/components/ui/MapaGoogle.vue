<script setup lang="ts">
defineProps<{
  src: string
}>()
</script>

<template>
  <div class="rounded-2xl overflow-hidden shadow-2xl border border-secondary/30 min-h-[420px]">
    <iframe
      :src="src"
      width="100%"
      height="100%"
      class="w-full h-full min-h-[420px]"
      style="border:0; filter: invert(90%) hue-rotate(180deg);"
      allowfullscreen
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    />
  </div>
</template>
