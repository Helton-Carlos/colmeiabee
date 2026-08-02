<script setup lang="ts">
import { ref } from 'vue';

import BeeSidebar from '@/components/BeeSidebar.vue';

import { useAuth } from '@/composables/useAuth';
import { useTheme } from '@/composables/useTheme';
import { menuItems } from '@/utils/sidebar';

const { user } = useAuth();
const { theme, toggleTheme } = useTheme();

const sidebarOpen = ref<boolean>(true);
const activeSection = ref<string>('visao-geral');

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value;
}
</script>

<template>
  <div class="min-h-screen bg-(--bg-base) flex">
    <BeeSidebar
      :open="sidebarOpen"
      :active-section="activeSection"
      @update:active-section="activeSection = $event"
    />

    <div
      :class="[
        'flex-1 transition-all duration-300',
        sidebarOpen ? 'ml-64' : 'ml-20',
      ]"
    >
      <header
        class="sticky top-0 z-30 bg-(--bg-surface)/90 backdrop-blur-md border-b border-(--border-base) px-6 py-4"
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <button
              class="p-2 rounded-lg hover:bg-(--bg-base) transition-colors cursor-pointer text-(--text-muted)"
              @click="toggleSidebar"
            >
              <span class="text-lg">☰</span>
            </button>

            <h2 class="text-xl font-bold text-(--text-base)">
              {{ menuItems.find((i) => i.id === activeSection)?.label }}
            </h2>
          </div>

          <div class="flex items-center gap-3">
            <button
              class="p-2 rounded-lg hover:bg-(--bg-base) transition-colors cursor-pointer text-(--text-muted)"
              @click="toggleTheme"
            >
              <span v-if="theme === 'light'">🌙</span>
              <span v-else>☀️</span>
            </button>

            <div
              class="flex items-center gap-2 px-3 py-2 rounded-lg bg-(--bg-base)"
            >
              <span class="text-sm font-medium text-(--text-base)">
                {{ user?.name }}
              </span>
            </div>
          </div>
        </div>
      </header>

      <main class="p-6">
        <div v-if="activeSection === 'visao-geral'" class="space-y-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div
              class="p-5 rounded-xl bg-(--bg-surface) border border-(--border-base)"
            >
              <p class="text-sm text-(--text-muted) mb-1">Total de Colmeias</p>
              <p class="text-2xl font-bold text-(--text-base)">12</p>
            </div>

            <div
              class="p-5 rounded-xl bg-(--bg-surface) border border-(--border-base)"
            >
              <p class="text-sm text-(--text-muted) mb-1">Produção do Mês</p>
              <p class="text-2xl font-bold text-(--text-base)">48 kg</p>
            </div>

            <div
              class="p-5 rounded-xl bg-(--bg-surface) border border-(--border-base)"
            >
              <p class="text-sm text-(--text-muted) mb-1">Próximo Manejo</p>
              <p class="text-2xl font-bold text-(--text-base)">3 dias</p>
            </div>

            <div
              class="p-5 rounded-xl bg-(--bg-surface) border border-(--border-base)"
            >
              <p class="text-sm text-(--text-muted) mb-1">Receita Mensal</p>
              <p class="text-2xl font-bold text-(--text-base)">R$ 2.400</p>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div
              class="p-6 rounded-xl bg-(--bg-surface) border border-(--border-base)"
            >
              <h3 class="text-lg font-bold text-(--text-base) mb-4">
                Últimos Manejos
              </h3>
              <div class="space-y-3">
                <div
                  class="flex items-center justify-between py-2 border-b border-(--border-base)"
                >
                  <div>
                    <p class="text-sm font-medium text-(--text-base)">
                      Revisão - Colmeia 03
                    </p>
                    <p class="text-xs text-(--text-muted)">
                      Rainha encontrada, 6 quadros de cria
                    </p>
                  </div>
                  <span class="text-xs text-(--text-muted)">Há 2 dias</span>
                </div>

                <div
                  class="flex items-center justify-between py-2 border-b border-(--border-base)"
                >
                  <div>
                    <p class="text-sm font-medium text-(--text-base)">
                      Colheita - Colmeia 07
                    </p>
                    <p class="text-xs text-(--text-muted)">
                      5 kg de mel colhidos
                    </p>
                  </div>
                  <span class="text-xs text-(--text-muted)">Há 5 dias</span>
                </div>

                <div class="flex items-center justify-between py-2">
                  <div>
                    <p class="text-sm font-medium text-(--text-base)">
                      Alimentação - Colmeia 01
                    </p>
                    <p class="text-xs text-(--text-muted)">Xarope 1:1, 500ml</p>
                  </div>
                  <span class="text-xs text-(--text-muted)">Há 1 semana</span>
                </div>
              </div>
            </div>

            <div
              class="p-6 rounded-xl bg-(--bg-surface) border border-(--border-base)"
            >
              <h3 class="text-lg font-bold text-(--text-base) mb-4">Alertas</h3>
              <div class="space-y-3">
                <div
                  class="flex items-center gap-3 p-3 rounded-lg bg-yellow-50 border border-yellow-200"
                >
                  <span class="text-lg">⚠️</span>
                  <div>
                    <p class="text-sm font-medium text-yellow-800">
                      Colmeia 05 - Rainha não localizada
                    </p>
                    <p class="text-xs text-yellow-600">
                      Última revisão há 14 dias
                    </p>
                  </div>
                </div>

                <div
                  class="flex items-center gap-3 p-3 rounded-lg bg-blue-50 border border-blue-200"
                >
                  <span class="text-lg">🌸</span>
                  <div>
                    <p class="text-sm font-medium text-blue-800">
                      Florada de laranjeira iniciando
                    </p>
                    <p class="text-xs text-blue-600">
                      Previsão: próximos 15 dias
                    </p>
                  </div>
                </div>

                <div
                  class="flex items-center gap-3 p-3 rounded-lg bg-green-50 border border-green-200"
                >
                  <span class="text-lg">✅</span>
                  <div>
                    <p class="text-sm font-medium text-green-800">
                      Colmeia 02 pronta para colheita
                    </p>
                    <p class="text-xs text-green-600">
                      Melgueira cheia, operculação > 80%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="flex flex-col items-center justify-center py-20">
          <span class="text-6xl mb-4">🚧</span>
          <h3 class="text-xl font-bold text-(--text-base) mb-2">
            Em Construção
          </h3>
          <p class="text-(--text-muted) text-center max-w-md">
            A seção "{{ menuItems.find((i) => i.id === activeSection)?.label }}"
            está sendo desenvolvida.
          </p>
        </div>
      </main>
    </div>
  </div>
</template>
