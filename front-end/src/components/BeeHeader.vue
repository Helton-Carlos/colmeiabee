<script setup lang="ts">
import { useTheme } from '../composables/useTheme';
import BeeButton from './BeeButton.vue';

interface Props {
  title?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: 'ColmeiaBee',
});

const { theme, toggleTheme } = useTheme();
</script>

<template>
  <header
    class="w-full py-4 fixed top-0 left-0 z-50 border-b border-(--border-base) bg-(--bg-surface)/90 backdrop-blur-md"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <a href="#" class="flex items-center gap-3">
          <span class="text-2xl">🐝</span>
          <h1 class="text-xl font-bold text-(--text-base)">
            {{ props.title }}
          </h1>
        </a>

        <nav class="hidden md:flex items-center gap-6">
          <a
            href="#conteudos"
            class="text-md font-medium text-(--text-muted) hover:text-primary transition-colors"
            >Conteúdos</a
          >
          <a
            href="#podcast"
            class="text-md font-medium text-(--text-muted) hover:text-primary transition-colors"
            >Podcast</a
          >
          <a
            href="#comunidade"
            class="text-md font-medium text-(--text-muted) hover:text-primary transition-colors"
            >Comunidade</a
          >
          <a
            href="#contato"
            class="text-md font-medium text-(--text-muted) hover:text-primary transition-colors"
            >Contato</a
          >
        </nav>

        <div class="flex items-center gap-3">
          <button
            @click="toggleTheme"
            class="p-4 rounded-lg hover:bg-(--bg-base) transition-colors cursor-pointer text-(--text-muted)"
            aria-label="Alternar tema"
          >
            <span v-if="theme === 'light'">🌙</span>
            <span v-else>☀️</span>
          </button>
          <BeeButton variant="primary" size="md"> Login </BeeButton>
        </div>
      </div>
    </div>
  </header>
</template>
