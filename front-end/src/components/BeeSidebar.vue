<script setup lang="ts">
import { useRouter } from 'vue-router';

import { useAuth } from '@/composables/useAuth';
import { menuItems, type MenuItem } from '@/utils/sidebar';

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
      'fixed top-0 left-0 h-full bg-(--bg-surface) border-r border-(--border-base) transition-all duration-300 z-40 flex flex-col',
      props.open ? 'w-64' : 'w-20',
    ]"
  >
    <div
      class="flex items-center gap-3 px-5 py-6 border-b border-(--border-base)"
    >
      <span class="text-2xl">🐝</span>

      <h1
        v-if="props.open"
        class="text-lg font-bold text-(--text-base) whitespace-nowrap"
      >
        ColmeiaBee
      </h1>
    </div>

    <nav class="flex-1 py-4 overflow-y-auto">
      <ul class="space-y-1 px-3">
        <li v-for="item in menuItems" :key="item.id">
          <button
            :class="[
              'w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer',
              props.activeSection === item.id
                ? 'bg-primary/20 text-dark'
                : 'text-(--text-muted) hover:bg-(--bg-base) hover:text-(--text-base)',
            ]"
            @click="emit('update:activeSection', item.id)"
          >
            <span class="text-lg shrink-0">{{ item.icon }}</span>

            <span v-if="props.open" class="whitespace-nowrap">
              {{ item.label }}
            </span>
          </button>
        </li>
      </ul>
    </nav>

    <div class="p-4 border-t border-(--border-base)">
      <button
        class="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
        @click="handleLogout"
      >
        <span class="text-lg shrink-0">🚪</span>

        <span v-if="props.open" class="whitespace-nowrap">Sair</span>
      </button>
    </div>
  </aside>
</template>
