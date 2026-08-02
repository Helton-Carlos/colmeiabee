<script setup lang="ts">
import { useRouter } from 'vue-router';

import BeeButton from '@/components/BeeButton.vue';

import { useTheme } from '@/composables/useTheme';
import { useAuth } from '@/composables/useAuth';

interface Props {
  title?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: 'ColmeiaBee',
});

const router = useRouter();
const { theme, toggleTheme } = useTheme();
const { user, isAuthenticated, logout } = useAuth();

function handleLogout() {
  logout();
  router.push('/');
}
</script>

<template>
  <header
    class="w-full py-4 fixed top-0 left-0 z-50 border-b border-(--border-base) bg-(--bg-surface)/90 backdrop-blur-md"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <a
          class="flex items-center gap-3 cursor-pointer"
          @click="router.push('/')"
        >
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
            class="p-4 rounded-lg hover:bg-(--bg-base) transition-colors cursor-pointer text-(--text-muted)"
            aria-label="Alternar tema"
            @click="toggleTheme"
          >
            <span v-if="theme === 'light'">🌙</span>
            <span v-else>☀️</span>
          </button>

          <template v-if="isAuthenticated">
            <span class="text-sm font-medium text-(--text-base)">
              {{ user?.name }}
            </span>

            <BeeButton variant="ghost" size="sm" @click="handleLogout">
              Sair
            </BeeButton>
          </template>

          <BeeButton
            v-else
            variant="primary"
            size="md"
            @click="router.push('/login')"
          >
            Login
          </BeeButton>
        </div>
      </div>
    </div>
  </header>
</template>
