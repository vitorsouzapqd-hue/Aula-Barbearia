<script setup lang="ts">
import ButtonPrimary from '~/components/ui/ButtonPrimary.vue'
import ButtonGhost from '~/components/ui/ButtonGhost.vue'
</script>

<template>
  <section class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Gradiente de fundo -->
    <div class="absolute inset-0 bg-gradient-to-br from-background via-background-paper to-secondary-dark z-0" />

    <!-- Detalhe decorativo - brilho sutil no canto -->
    <div class="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl z-0 -translate-x-1/2 -translate-y-1/2" />
    <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl z-0 translate-x-1/4 translate-y-1/4" />

    <!-- Conteúdo principal -->
    <div class="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      <!-- Lado esquerdo: Texto -->
      <div class="flex flex-col gap-6">
        <span class="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-[0.2em] uppercase">
          <span class="block w-8 h-px bg-primary"></span>
          Excelência no Corte
        </span>

        <h1 class="text-5xl lg:text-6xl font-bold text-typography leading-tight">
          O Melhor<br>
          <span class="text-primary">da Barbearia</span><br>
          está aqui.
        </h1>

        <p class="text-typography-muted text-lg leading-relaxed max-w-md">
          Técnica apurada, ambiente premium e profissionais que respeitam o seu estilo. Uma experiência completa de cuidado masculino.
        </p>

        <div class="flex items-center gap-4 pt-2">
          <ButtonPrimary label="Agendar Agora" />
          <ButtonGhost label="Ver Serviços" />
        </div>
      </div>

      <!-- Lado direito: Placeholder para a imagem -->
      <div class="relative flex items-center justify-center">
        <div class="w-full aspect-[4/5] max-w-md rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="/Imagens/Barbearia - Corte de Negrão.webp"
            alt="Barbeiro realizando corte de cabelo"
            class="w-full h-full object-cover object-center"
          />
        </div>

        <!-- Detalhe decorativo atrás da imagem -->
        <div class="absolute -bottom-4 -right-4 w-full aspect-[4/5] max-w-md rounded-3xl border border-primary/20 -z-10" />
      </div>

    </div>
  </section>
</template>
