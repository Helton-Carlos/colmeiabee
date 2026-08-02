<script setup lang="ts">
import BeeHeader from '../components/BeeHeader.vue';
import BeeFooter from '../components/BeeFooter.vue';
import BeeButton from '../components/BeeButton.vue';
import BeeCard from '../components/BeeCard.vue';

import { conteudos, parceiros } from '../utils/home.ts';
</script>

<template>
  <div class="min-h-screen bg-(--bg-base)">
    <BeeHeader />

    <section class="pt-16">
      <div
        class="relative w-full min-h-[90vh] flex items-center bg-dark overflow-hidden"
      >
        <div class="absolute inset-0 opacity-10">
          <div class="absolute top-20 left-10 text-8xl">🐝</div>
          <div class="absolute top-40 right-20 text-6xl">🍯</div>
          <div class="absolute bottom-20 left-1/3 text-7xl">🐝</div>
          <div class="absolute bottom-40 right-10 text-5xl">✨</div>
        </div>

        <div
          class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10"
        >
          <div>
            <span
              class="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
            >
              🐝 Conteúdo para apicultores e produtores rurais
            </span>
            <h1
              class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              A colmeia do
              <span class="text-primary"> agro</span>
            </h1>
            <p class="text-lg text-gray-400 max-w-lg mb-8">
              Conteúdos, cursos e comunidade para apicultores, meliponicultores
              e produtores rurais. Conecte-se, aprenda e produza mais.
            </p>
            <div class="flex flex-wrap gap-4">
              <BeeButton variant="primary" size="lg">
                Explorar Conteúdos
              </BeeButton>
              <BeeButton variant="outline" size="lg">
                Conhecer a Comunidade
              </BeeButton>
            </div>
          </div>
          <div class="hidden lg:flex justify-center">
            <div class="relative">
              <div
                class="w-80 h-80 bg-primary/20 rounded-full blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              ></div>
              <img
                src="https://placehold.co/500x500/1a1a1a/FFF914?text=🐝+ColmeiaBee"
                alt="ColmeiaBee Hero"
                class="relative w-96 h-96 object-cover rounded-2xl shadow-2xl shadow-primary/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="podcast" class="py-20 bg-primary">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://placehold.co/500x600/1a1a1a/FFF914?text=🎙️+BeeCast"
              alt="BeeCast Podcast"
              class="rounded-2xl shadow-xl w-full max-w-md mx-auto"
            />
          </div>
          <div>
            <h2 class="text-3xl sm:text-4xl font-bold text-dark mb-4">
              BeeCast
            </h2>
            <p class="text-lg text-dark/70 mb-6">
              Papo sobre apicultura, manejo de colmeias, mercado do mel,
              polinização e o universo agro. Toda semana um episódio novo pra
              você ouvir enquanto cuida das suas abelhas.
            </p>
            <div class="flex flex-wrap gap-3 mb-8">
              <a
                href="#"
                class="inline-flex items-center gap-2 px-4 py-2 bg-dark text-white rounded-full text-sm font-medium hover:bg-dark-light transition-colors"
              >
                🎵 Spotify
              </a>
              <a
                href="#"
                class="inline-flex items-center gap-2 px-4 py-2 bg-dark text-white rounded-full text-sm font-medium hover:bg-dark-light transition-colors"
              >
                🎧 Apple Podcasts
              </a>
              <a
                href="#"
                class="inline-flex items-center gap-2 px-4 py-2 bg-dark text-white rounded-full text-sm font-medium hover:bg-dark-light transition-colors"
              >
                📻 YouTube
              </a>
            </div>
            <p
              class="text-sm font-semibold text-dark/60 uppercase tracking-wide"
            >
              Ouça nas principais plataformas de podcast
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="conteudos" class="py-20 bg-(--bg-base)">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-(--text-base) mb-3">
            Conteúdos
          </h2>
          <p class="text-lg text-(--text-muted) max-w-2xl mx-auto">
            Artigos, vídeos e tutoriais sobre apicultura, meliponicultura e
            agronegócio.
          </p>
        </div>

        <div class="flex flex-wrap justify-center gap-2 mb-10">
          <button
            class="px-4 py-2 rounded-full bg-primary text-dark text-sm font-medium cursor-pointer"
          >
            Todos
          </button>
          <button
            class="px-4 py-2 rounded-full bg-(--bg-surface) text-(--text-muted) text-sm font-medium hover:text-primary transition-colors cursor-pointer"
          >
            Apicultura
          </button>
          <button
            class="px-4 py-2 rounded-full bg-(--bg-surface) text-(--text-muted) text-sm font-medium hover:text-primary transition-colors cursor-pointer"
          >
            Manejo
          </button>
          <button
            class="px-4 py-2 rounded-full bg-(--bg-surface) text-(--text-muted) text-sm font-medium hover:text-primary transition-colors cursor-pointer"
          >
            Agro
          </button>
          <button
            class="px-4 py-2 rounded-full bg-(--bg-surface) text-(--text-muted) text-sm font-medium hover:text-primary transition-colors cursor-pointer"
          >
            Sanidade
          </button>
          <button
            class="px-4 py-2 rounded-full bg-(--bg-surface) text-(--text-muted) text-sm font-medium hover:text-primary transition-colors cursor-pointer"
          >
            Produtos
          </button>
          <button
            class="px-4 py-2 rounded-full bg-(--bg-surface) text-(--text-muted) text-sm font-medium hover:text-primary transition-colors cursor-pointer"
          >
            Tecnologia
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <BeeCard
            v-for="item in conteudos"
            :key="item.id"
            :title="item.title"
            :subtitle="item.subtitle"
            :hoverable="true"
          >
            <template #image>
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-48 object-cover"
              />
            </template>
            <template #footer>
              <span class="text-xs font-semibold text-primary uppercase">{{
                item.category
              }}</span>
            </template>
          </BeeCard>
        </div>

        <div class="text-center mt-10">
          <BeeButton variant="outline">Carregar Mais</BeeButton>
        </div>
      </div>
    </section>

    <section class="py-20 bg-dark relative overflow-hidden">
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-10 right-10 text-9xl">🍯</div>
        <div class="absolute bottom-10 left-10 text-8xl">🐝</div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
              Kit do Apicultor
            </h2>
            <p class="text-lg text-gray-400 mb-6">
              Um pacote completo com planilhas de manejo, guias de floradas,
              fichas de controle sanitário e modelos de registro. Feito por
              apicultores, para apicultores.
            </p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center gap-3 text-gray-300">
                <span class="text-primary">✓</span> Planilhas de controle de
                colmeias
              </li>
              <li class="flex items-center gap-3 text-gray-300">
                <span class="text-primary">✓</span> Calendário de floradas por
                região
              </li>
              <li class="flex items-center gap-3 text-gray-300">
                <span class="text-primary">✓</span> Fichas de manejo e sanidade
              </li>
              <li class="flex items-center gap-3 text-gray-300">
                <span class="text-primary">✓</span> Guia de legislação e
                registro
              </li>
            </ul>
            <BeeButton variant="primary" size="lg">Garantir Agora</BeeButton>
          </div>
          <div class="flex justify-center">
            <img
              src="https://placehold.co/450x450/2d2d2d/FFF914?text=🍯+Kit+Apicultor"
              alt="Kit do Apicultor"
              class="rounded-2xl shadow-2xl shadow-primary/10 w-full max-w-sm"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-(--bg-surface)">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-center text-2xl font-bold text-(--text-base) mb-10">
          Parcerias Criativas
        </h2>
        <div class="flex flex-wrap justify-center items-center gap-10">
          <img
            v-for="parceiro in parceiros"
            :key="parceiro.name"
            :src="parceiro.logo"
            :alt="parceiro.name"
            class="h-12 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
          />
        </div>
      </div>
    </section>

    <section id="comunidade" class="py-20 bg-(--bg-base)">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-(--text-base) mb-3">
            Faça parte da Colmeia
          </h2>
          <p class="text-lg text-(--text-muted) max-w-2xl mx-auto">
            Conecte-se com outros apicultores, troque experiências e cresça
            junto com a comunidade.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            class="text-center p-8 rounded-2xl bg-(--bg-surface) border border-(--border-base)"
          >
            <span class="text-4xl mb-4 block">📸</span>
            <h3 class="font-bold text-lg text-(--text-base) mb-2">Instagram</h3>
            <p class="text-sm text-(--text-muted) mb-4">
              Dicas diárias de manejo, fotos dos apiários e novidades do setor.
            </p>
            <a href="#" class="text-primary font-medium text-sm hover:underline">Seguir →</a>
          </div>
          <div
            class="text-center p-8 rounded-2xl bg-(--bg-surface) border border-(--border-base)"
          >
            <span class="text-4xl mb-4 block">💬</span>
            <h3 class="font-bold text-lg text-(--text-base) mb-2">
              Grupo WhatsApp
            </h3>
            <p class="text-sm text-(--text-muted) mb-4">
              Comunidade ativa de apicultores para tirar dúvidas e trocar
              experiências.
            </p>
            <a href="#" class="text-primary font-medium text-sm hover:underline">Entrar →</a>
          </div>
          <div
            class="text-center p-8 rounded-2xl bg-(--bg-surface) border border-(--border-base)"
          >
            <span class="text-4xl mb-4 block">🎬</span>
            <h3 class="font-bold text-lg text-(--text-base) mb-2">YouTube</h3>
            <p class="text-sm text-(--text-muted) mb-4">
              Vídeos práticos sobre manejo, extração de mel e gestão do apiário.
            </p>
            <a href="#" class="text-primary font-medium text-sm hover:underline">Inscrever →</a>
          </div>
        </div>
      </div>
    </section>

    <BeeFooter id="contato">
      <template #description>
        A colmeia do agro. Conteúdo, comunidade e ferramentas para apicultores e
        produtores rurais.
      </template>
      <template #links>
        <h4
          class="font-bold text-sm text-(--text-base) mb-3 uppercase tracking-wide"
        >
          Links
        </h4>
        <ul class="space-y-2">
          <li>
            <a
              href="#conteudos"
              class="text-sm text-(--text-muted) hover:text-primary transition-colors"
            >Conteúdos</a>
          </li>
          <li>
            <a
              href="#podcast"
              class="text-sm text-(--text-muted) hover:text-primary transition-colors"
            >Podcast</a>
          </li>
          <li>
            <a
              href="#comunidade"
              class="text-sm text-(--text-muted) hover:text-primary transition-colors"
            >Comunidade</a>
          </li>
          <li>
            <a
              href="#"
              class="text-sm text-(--text-muted) hover:text-primary transition-colors"
            >Kit Apicultor</a>
          </li>
        </ul>
      </template>
      <template #social>
        <h4
          class="font-bold text-sm text-(--text-base) mb-3 uppercase tracking-wide"
        >
          Redes Sociais
        </h4>
        <ul class="space-y-2">
          <li>
            <a
              href="#"
              class="text-sm text-(--text-muted) hover:text-primary transition-colors"
            >Instagram</a>
          </li>
          <li>
            <a
              href="#"
              class="text-sm text-(--text-muted) hover:text-primary transition-colors"
            >YouTube</a>
          </li>
          <li>
            <a
              href="#"
              class="text-sm text-(--text-muted) hover:text-primary transition-colors"
            >Discord</a>
          </li>
          <li>
            <a
              href="#"
              class="text-sm text-(--text-muted) hover:text-primary transition-colors"
            >Spotify</a>
          </li>
        </ul>
      </template>
    </BeeFooter>
  </div>
</template>
