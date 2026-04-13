<script setup lang="ts">
import MapaGoogle from '~/components/ui/MapaGoogle.vue'
</script>

<template>
  <section class="py-24 bg-background-paper">
    <div class="w-full max-w-7xl mx-auto px-6 lg:px-16">

      <!-- Cabeçalho da seção -->
      <div class="flex flex-col items-center text-center gap-4 mb-14">
        <span class="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-[0.2em] uppercase">
          <span class="block w-8 h-px bg-primary"></span>
          Contato
          <span class="block w-8 h-px bg-primary"></span>
        </span>
        <h2 class="text-4xl lg:text-5xl font-bold text-typography">
          Venha nos
          <span class="text-primary">visitar.</span>
        </h2>
        <p class="text-typography-muted text-lg max-w-xl">
          Estamos esperando por você. Agende pelo WhatsApp ou apareça diretamente na barbearia.
        </p>
      </div>

      <!-- Grid de duas colunas -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

        <!-- Esquerda: Informações de contato -->
        <div class="flex flex-col gap-8 justify-center">

          <!-- Nome da barbearia -->
          <div class="flex flex-col gap-1">
            <h3 class="text-2xl font-bold text-typography">Barbearia Premium</h3>
            <p class="text-typography-muted">O melhor do cuidado masculino em Minas Gerais.</p>
          </div>

          <!-- Itens de contato -->
          <div class="flex flex-col gap-6">

            <!-- Endereço -->
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <p class="text-typography font-semibold">Endereço</p>
                <p class="text-typography-muted">Rua dos Carijós, 400 — Centro</p>
                <p class="text-typography-muted">Belo Horizonte, MG — CEP 30120-060</p>
              </div>
            </div>

            <!-- Telefone / WhatsApp -->
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <div>
                <p class="text-typography font-semibold">WhatsApp</p>
                <p class="text-typography-muted">(31) 99999-0000</p>
              </div>
            </div>

            <!-- Horário de funcionamento -->
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <p class="text-typography font-semibold">Horário de Funcionamento</p>
                <p class="text-typography-muted">Segunda a Sexta: 09h às 20h</p>
                <p class="text-typography-muted">Sábado: 09h às 18h</p>
                <p class="text-typography-muted">Domingo: Fechado</p>
              </div>
            </div>

            <!-- Instagram -->
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.265.058-1.645.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163c-3.259 0-3.667.014-4.947.072-1.609.074-3.03.372-4.141 1.482C1.8 2.664 1.502 4.085 1.428 5.694 1.37 6.974 1.356 7.382 1.356 12c0 4.618.014 5.026.072 6.306.074 1.609.372 3.03 1.482 4.141 1.111 1.11 2.532 1.408 4.141 1.482 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.609-.074 3.03-.372 4.141-1.482 1.11-1.111 1.408-2.532 1.482-4.141.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.074-1.609-.372-3.03-1.482-4.141C19.03.444 17.609.146 16 .072 14.72.014 14.312 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </div>
              <div>
                <p class="text-typography font-semibold">Instagram</p>
                <p class="text-typography-muted">@barbeariapremium</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Direita: Google Maps -->
        <MapaGoogle src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.2316375015944!2d-43.93869512375072!3d-19.93825468175473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699c5c1a9da2b%3A0x800a8a95c3cc64b2!2sR.%20dos%20Carij%C3%B3s%2C%20400%20-%20Centro%2C%20Belo%20Horizonte%20-%20MG%2C%2030120-060!5e0!3m2!1spt-BR!2sbr!4v1713999999999!5m2!1spt-BR!2sbr" />

      </div>
    </div>
  </section>
</template>
