<script setup lang="ts">
import CardServico from '~/components/ui/CardServico.vue'

const servicos = [
  {
    imagem: '/Imagens/Cabeleira Curta.webp',
    nome: 'Cabeleira Curta',
    descricao: 'Corte clássico com laterais aparadas e volume no topo. Versátil, elegante e atemporal — perfeito para o dia a dia.',
    preco: 'R$ 45,00',
  },
  {
    imagem: '/Imagens/Buzz Cut.webp',
    nome: 'Buzz Cut',
    descricao: 'Corte máquina uniforme e minimalista. Prático, moderno e de baixa manutenção. Ideal para quem valoriza simplicidade.',
    preco: 'R$ 35,00',
  },
  {
    imagem: '/Imagens/Low Fade.webp',
    nome: 'Low Fade',
    descricao: 'Degradê suave na parte inferior com contraste limpo. Acabamento impecável que destaca o estilo com sofisticação.',
    preco: 'R$ 55,00',
  },
]
</script>

<template>
  <section class="py-24 bg-background">
    <div class="w-full max-w-7xl mx-auto px-6 lg:px-16">

      <!-- Cabeçalho da seção -->
      <div class="flex flex-col items-center text-center gap-4 mb-14">
        <span class="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-[0.2em] uppercase">
          <span class="block w-8 h-px bg-primary"></span>
          Nossos Serviços
          <span class="block w-8 h-px bg-primary"></span>
        </span>
        <h2 class="text-4xl lg:text-5xl font-bold text-typography">
          Cortes que definem
          <span class="text-primary">seu estilo.</span>
        </h2>
        <p class="text-typography-muted text-lg max-w-xl">
          Escolha o corte ideal para o seu perfil. Nossa equipe está pronta para executar com precisão e cuidado.
        </p>
      </div>

      <!-- Grid de serviços -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <CardServico
          v-for="servico in servicos"
          :key="servico.nome"
          :imagem="servico.imagem"
          :nome="servico.nome"
          :descricao="servico.descricao"
          :preco="servico.preco"
        />
      </div>

    </div>
  </section>
</template>
