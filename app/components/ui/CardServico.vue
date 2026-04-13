<script setup lang="ts">
import ButtonPrimary from '~/components/ui/ButtonPrimary.vue'

defineProps<{
  imagem: string
  nome: string
  descricao: string
  preco: string
}>()
</script>

<template>
  <div class="group bg-background-paper border border-secondary/30 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 flex flex-col">
    <!-- Imagem quadrada -->
    <div class="aspect-square overflow-hidden">
      <img
        :src="imagem"
        :alt="nome"
        class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
      />
    </div>

    <!-- Informações -->
    <div class="p-5 flex flex-col gap-3 flex-1">
      <div class="flex items-center justify-between">
        <h3 class="text-typography font-semibold text-lg">{{ nome }}</h3>
        <span class="text-primary font-bold text-xl">{{ preco }}</span>
      </div>

      <p class="text-typography-muted text-sm leading-relaxed flex-1">{{ descricao }}</p>

      <ButtonPrimary label="Agendar" class="w-full mt-2" />
    </div>
  </div>
</template>
