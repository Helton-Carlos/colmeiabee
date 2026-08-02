<script setup lang="ts">
import { useRouter } from 'vue-router';

import { useAuth } from '@/composables/useAuth';
import { menuItems } from '@/utils/sidebar';

interface Props {
  open: boolean;
  activeSection: string;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  'update:activeSection': [value: string];
}>();

const router = useRouter();
const { logout } = useAuth();

function handleLogout() {
  logout();
  router.push('/');
}
</script>

<template>
  <aside
    :class="[
      'fixed top-0 left-0 h-full bg-(--bg-surface) border-r border-(--border-base) transition-all duration-300 z-40 flex flex-col items-center',
      props.open ? 'w-64' : 'w-18',
    ]"
  >
    <div
      class="flex items-center gap-3 w-full px-5 py-5 border-b border-(--border-base) justify-center"
    >
      <div
        class="w-10 h-10 rounded-full bg-dark flex items-center justify-center"
      >
        <span class="text-lg">🐝</span>
      </div>

      <h1
        v-if="props.open"
        class="text-lg font-bold text-(--text-base) whitespace-nowrap"
      >
        ColmeiaBee
      </h1>
    </div>

    <nav class="flex-1 py-6 overflow-y-auto w-full">
      <ul
        :class="[
          'flex flex-col gap-2',
          props.open ? 'px-4' : 'items-center px-2',
        ]"
      >
        <li v-for="item in menuItems" :key="item.id">
          <button
            v-if="props.open"
            :class="[
              'w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer',
              props.activeSection === item.id
                ? 'bg-dark text-white shadow-md'
                : 'text-(--text-muted) hover:bg-(--bg-base) hover:text-(--text-base)',
            ]"
            @click="emit('update:activeSection', item.id)"
          >
            <span class="text-lg shrink-0">{{ item.icon }}</span>
            <span class="whitespace-nowrap">{{ item.label }}</span>
          </button>

          <button
            v-else
            :class="[
              'w-11 h-11 rounded-xl flex items-center justify-center transition-all cursor-pointer',
              props.activeSection === item.id
                ? 'bg-dark text-white shadow-md'
                : 'text-(--text-muted) hover:bg-(--bg-base) hover:text-(--text-base)',
            ]"
            :title="item.label"
            @click="emit('update:activeSection', item.id)"
          >
            <span class="text-lg">{{ item.icon }}</span>
          </button>
        </li>
      </ul>
    </nav>

    <div
      class="w-full border-t border-(--border-base) py-4"
      :class="props.open ? 'px-4' : 'flex justify-center'"
    >
      <button
        v-if="props.open"
        class="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-all cursor-pointer"
        @click="handleLogout"
      >
        <span class="text-lg shrink-0">🚪</span>
        <span class="whitespace-nowrap">Sair</span>
      </button>

      <button
        v-else
        class="w-11 h-11 rounded-xl flex items-center justify-center text-red-500 hover:bg-red-50 transition-all cursor-pointer"
        title="Sair"
        @click="handleLogout"
      >
        <span class="text-lg">🚪</span>
      </button>
    </div>
  </aside>
</template>
