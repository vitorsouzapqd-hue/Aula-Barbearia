<template>
  <section class="py-24 bg-background-paper">
    <div class="w-full max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      <!-- Lado esquerdo: Texto -->
      <div class="flex flex-col gap-6">
        <span class="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-[0.2em] uppercase">
          <span class="block w-8 h-px bg-primary"></span>
          Sobre Nós
        </span>

        <h2 class="text-4xl lg:text-5xl font-bold text-typography leading-tight">
          Uma barbearia feita com
          <span class="text-primary">paixão e tradição.</span>
        </h2>

        <p class="text-typography-muted text-lg leading-relaxed">
          Nascemos da vontade de oferecer mais do que um corte de cabelo. Aqui, cada cliente é tratado com atenção, respeito e os melhores produtos do mercado.
        </p>

        <p class="text-typography-muted text-lg leading-relaxed">
          Nossa equipe é formada por profissionais apaixonados pelo ofício, prontos para transformar sua visita em uma experiência única de estilo e bem-estar masculino.
        </p>

        <div class="grid grid-cols-2 gap-6 pt-4">
          <div class="flex flex-col gap-1">
            <span class="text-4xl font-bold text-primary">+5</span>
            <span class="text-typography-muted text-sm">Anos de experiência</span>
          </div>
          <div class="flex flex-col gap-1">
            <span class="text-4xl font-bold text-primary">+2k</span>
            <span class="text-typography-muted text-sm">Clientes satisfeitos</span>
          </div>
          <div class="flex flex-col gap-1">
            <span class="text-4xl font-bold text-primary">100%</span>
            <span class="text-typography-muted text-sm">Comprometimento</span>
          </div>
          <div class="flex flex-col gap-1">
            <span class="text-4xl font-bold text-primary">Top</span>
            <span class="text-typography-muted text-sm">Produtos premium</span>
          </div>
        </div>
      </div>

      <!-- Lado direito: Imagem da fachada -->
      <div class="relative flex items-center justify-center">
        <div class="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="/Imagens/Barbearia - Frente.webp"
            alt="Fachada da barbearia"
            class="w-full h-full object-cover object-center"
          />
        </div>

        <!-- Detalhe decorativo atrás da imagem -->
        <div class="absolute -top-4 -left-4 w-full aspect-[4/3] rounded-3xl border border-primary/20 -z-10" />
      </div>

    </div>
  </section>
</template>
