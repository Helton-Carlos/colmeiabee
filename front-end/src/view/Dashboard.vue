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
const activeTab = ref<string>('overview');

const tabs = ['Overview', 'Produção', 'Manejos', 'Floradas', 'Relatórios'];

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
        'flex-1 transition-all duration-300 flex flex-col',
        sidebarOpen ? 'ml-64' : 'ml-18',
      ]"
    >
      <header class="sticky top-0 z-30 bg-(--bg-base) px-8 pt-6 pb-4">
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center gap-4">
            <button
              class="p-2 rounded-full hover:bg-(--bg-surface) transition-colors cursor-pointer text-(--text-muted)"
              @click="toggleSidebar"
            >
              <span class="text-lg">☰</span>
            </button>

            <div
              class="flex items-center gap-3 bg-(--bg-surface) rounded-full p-1"
            >
              <button
                v-for="tab in tabs"
                :key="tab"
                :class="[
                  'px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer',
                  activeTab === tab.toLowerCase()
                    ? 'bg-(--bg-base) text-(--text-base) shadow-sm'
                    : 'text-(--text-muted) hover:text-(--text-base)',
                ]"
                @click="activeTab = tab.toLowerCase()"
              >
                {{ tab }}
              </button>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <button
              class="w-10 h-10 rounded-full bg-(--bg-surface) flex items-center justify-center hover:bg-(--border-base) transition-colors cursor-pointer text-(--text-muted)"
              @click="toggleTheme"
            >
              <span v-if="theme === 'light'">🌙</span>
              <span v-else>☀️</span>
            </button>

            <div
              class="flex items-center gap-3 pl-3 border-l border-(--border-base)"
            >
              <div
                class="w-9 h-9 rounded-full bg-dark flex items-center justify-center"
              >
                <span class="text-white text-sm font-bold">
                  {{ user?.name?.charAt(0)?.toUpperCase() }}
                </span>
              </div>

              <div class="hidden sm:block">
                <p
                  class="text-sm font-semibold text-(--text-base) leading-tight"
                >
                  {{ user?.name }}
                </p>
                <p class="text-xs text-(--text-muted)">Apicultor</p>
              </div>
            </div>
          </div>
        </div>

        <h1 class="text-3xl font-bold text-(--text-base)">Dashboard</h1>
      </header>

      <main class="flex-1 px-8 pb-8">
        <div v-if="activeSection === 'visao-geral'" class="space-y-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div
              class="p-6 rounded-2xl bg-(--bg-surface) border border-(--border-base) relative overflow-hidden"
            >
              <span
                class="text-xs font-medium text-(--text-muted) uppercase tracking-wide"
                >Melhor Colmeia</span
              >
              <div class="flex items-center gap-3 mt-3 mb-4">
                <span class="text-3xl">🐝</span>
                <div>
                  <p class="text-lg font-bold text-(--text-base)">Colmeia 07</p>
                  <p class="text-xs text-(--text-muted)">Apis mellifera</p>
                </div>
              </div>
              <p class="text-sm text-(--text-muted) mb-1">Produção total</p>
              <div class="flex items-center gap-2">
                <p class="text-2xl font-bold text-(--text-base)">18,5 kg</p>
                <span
                  class="text-xs font-semibold text-green-600 bg-green-100 px-2 py-0.5 rounded-full"
                  >+12%</span
                >
              </div>
            </div>

            <div
              class="p-6 rounded-2xl bg-(--bg-surface) border border-(--border-base)"
            >
              <span
                class="text-xs font-medium text-(--text-muted) uppercase tracking-wide"
                >Atenção Necessária</span
              >
              <div class="flex items-center gap-3 mt-3 mb-4">
                <span class="text-3xl">⚠️</span>
                <div>
                  <p class="text-lg font-bold text-(--text-base)">Colmeia 05</p>
                  <p class="text-xs text-(--text-muted)">
                    Rainha não localizada
                  </p>
                </div>
              </div>
              <p class="text-sm text-(--text-muted) mb-1">Última revisão</p>
              <div class="flex items-center gap-2">
                <p class="text-2xl font-bold text-(--text-base)">14 dias</p>
                <span
                  class="text-xs font-semibold text-red-600 bg-red-100 px-2 py-0.5 rounded-full"
                  >atrasada</span
                >
              </div>
            </div>

            <div
              class="p-6 rounded-2xl bg-(--bg-surface) border border-(--border-base)"
            >
              <span
                class="text-xs font-medium text-(--text-muted) uppercase tracking-wide"
                >Florada Ativa</span
              >
              <div class="flex items-center gap-3 mt-3 mb-4">
                <span class="text-3xl">🌸</span>
                <div>
                  <p class="text-lg font-bold text-(--text-base)">Laranjeira</p>
                  <p class="text-xs text-(--text-muted)">Região Sudeste</p>
                </div>
              </div>
              <p class="text-sm text-(--text-muted) mb-1">Duração estimada</p>
              <div class="flex items-center gap-2">
                <p class="text-2xl font-bold text-(--text-base)">15 dias</p>
                <span
                  class="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full"
                  >ativa</span
                >
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div
              class="lg:col-span-2 p-6 rounded-2xl bg-(--bg-surface) border border-(--border-base)"
            >
              <div class="flex items-center justify-between mb-6">
                <div>
                  <p class="text-sm text-(--text-muted) mb-1">Produção Total</p>
                  <p class="text-3xl font-bold text-(--text-base)">
                    48<span class="text-lg text-(--text-muted) font-normal"
                      >,2 kg</span
                    >
                  </p>
                </div>
                <div class="flex items-center gap-2">
                  <div
                    class="flex items-center gap-3 bg-(--bg-base) rounded-full p-1"
                  >
                    <button
                      class="px-3 py-1 rounded-full text-xs font-medium text-(--text-muted) cursor-pointer hover:text-(--text-base)"
                    >
                      Semana
                    </button>
                    <button
                      class="px-3 py-1 rounded-full text-xs font-medium bg-(--bg-surface) text-(--text-base) shadow-sm cursor-pointer"
                    >
                      Mês
                    </button>
                    <button
                      class="px-3 py-1 rounded-full text-xs font-medium text-(--text-muted) cursor-pointer hover:text-(--text-base)"
                    >
                      Ano
                    </button>
                  </div>
                </div>
              </div>

              <div class="flex items-end gap-3 h-48">
                <div class="flex-1 flex flex-col items-center gap-1">
                  <div
                    class="w-full bg-green-200 rounded-t-lg"
                    style="height: 40%"
                  ></div>
                  <span class="text-xs text-(--text-muted)">Jan</span>
                </div>
                <div class="flex-1 flex flex-col items-center gap-1">
                  <div
                    class="w-full bg-green-200 rounded-t-lg"
                    style="height: 55%"
                  ></div>
                  <span class="text-xs text-(--text-muted)">Fev</span>
                </div>
                <div class="flex-1 flex flex-col items-center gap-1">
                  <div
                    class="w-full bg-green-300 rounded-t-lg"
                    style="height: 65%"
                  ></div>
                  <span class="text-xs text-(--text-muted)">Mar</span>
                </div>
                <div class="flex-1 flex flex-col items-center gap-1">
                  <div
                    class="w-full bg-green-300 rounded-t-lg"
                    style="height: 50%"
                  ></div>
                  <span class="text-xs text-(--text-muted)">Abr</span>
                </div>
                <div class="flex-1 flex flex-col items-center gap-1">
                  <div
                    class="w-full bg-green-400 rounded-t-lg"
                    style="height: 80%"
                  ></div>
                  <span class="text-xs text-(--text-muted)">Mai</span>
                </div>
                <div class="flex-1 flex flex-col items-center gap-1">
                  <div
                    class="w-full bg-green-500 rounded-t-lg"
                    style="height: 100%"
                  ></div>
                  <span class="text-xs text-(--text-muted)">Jun</span>
                </div>
                <div class="flex-1 flex flex-col items-center gap-1">
                  <div
                    class="w-full bg-green-300 rounded-t-lg"
                    style="height: 70%"
                  ></div>
                  <span class="text-xs text-(--text-muted)">Jul</span>
                </div>
                <div class="flex-1 flex flex-col items-center gap-1">
                  <div
                    class="w-full bg-(--border-base) rounded-t-lg"
                    style="height: 30%"
                  ></div>
                  <span class="text-xs text-(--text-muted)">Ago</span>
                </div>
                <div class="flex-1 flex flex-col items-center gap-1">
                  <div
                    class="w-full bg-(--border-base) rounded-t-lg"
                    style="height: 20%"
                  ></div>
                  <span class="text-xs text-(--text-muted)">Set</span>
                </div>
                <div class="flex-1 flex flex-col items-center gap-1">
                  <div
                    class="w-full bg-(--border-base) rounded-t-lg"
                    style="height: 15%"
                  ></div>
                  <span class="text-xs text-(--text-muted)">Out</span>
                </div>
                <div class="flex-1 flex flex-col items-center gap-1">
                  <div
                    class="w-full bg-(--border-base) rounded-t-lg"
                    style="height: 25%"
                  ></div>
                  <span class="text-xs text-(--text-muted)">Nov</span>
                </div>
                <div class="flex-1 flex flex-col items-center gap-1">
                  <div
                    class="w-full bg-(--border-base) rounded-t-lg"
                    style="height: 35%"
                  ></div>
                  <span class="text-xs text-(--text-muted)">Dez</span>
                </div>
              </div>

              <div class="flex items-center gap-4 mt-4">
                <div class="flex items-center gap-1.5">
                  <span class="w-3 h-3 rounded-full bg-green-400"></span>
                  <span class="text-xs text-(--text-muted)">produção alta</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="w-3 h-3 rounded-full bg-green-200"></span>
                  <span class="text-xs text-(--text-muted)"
                    >produção média</span
                  >
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="w-3 h-3 rounded-full bg-(--border-base)"></span>
                  <span class="text-xs text-(--text-muted)">sem dados</span>
                </div>
              </div>
            </div>

            <div class="space-y-5">
              <div
                class="p-5 rounded-2xl bg-(--bg-surface) border border-(--border-base)"
              >
                <p
                  class="text-xs font-medium text-(--text-muted) uppercase tracking-wide mb-2"
                >
                  Resumo do Apiário
                </p>
                <p class="text-2xl font-bold text-(--text-base) mb-1">
                  12 colmeias
                </p>
                <p class="text-xs text-(--text-muted) mb-3">Capacidade: 80%</p>
                <div
                  class="w-full h-2 bg-(--bg-base) rounded-full overflow-hidden"
                >
                  <div
                    class="h-full bg-green-400 rounded-full"
                    style="width: 80%"
                  ></div>
                </div>
              </div>

              <div
                class="p-5 rounded-2xl bg-(--bg-surface) border border-(--border-base)"
              >
                <div class="flex items-center justify-between mb-3">
                  <p
                    class="text-xs font-medium text-(--text-muted) uppercase tracking-wide"
                  >
                    Colmeias
                  </p>
                </div>
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <span class="text-lg">🐝</span>
                      <div>
                        <p class="text-sm font-medium text-(--text-base)">
                          Colmeia 07
                        </p>
                        <p class="text-xs text-(--text-muted)">Forte</p>
                      </div>
                    </div>
                    <div class="text-right">
                      <p class="text-sm font-bold text-(--text-base)">
                        18,5 kg
                      </p>
                      <p class="text-xs text-green-600">+12%</p>
                    </div>
                  </div>

                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <span class="text-lg">🐝</span>
                      <div>
                        <p class="text-sm font-medium text-(--text-base)">
                          Colmeia 03
                        </p>
                        <p class="text-xs text-(--text-muted)">Média</p>
                      </div>
                    </div>
                    <div class="text-right">
                      <p class="text-sm font-bold text-(--text-base)">
                        12,3 kg
                      </p>
                      <p class="text-xs text-green-600">+5%</p>
                    </div>
                  </div>

                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <span class="text-lg">🐝</span>
                      <div>
                        <p class="text-sm font-medium text-(--text-base)">
                          Colmeia 01
                        </p>
                        <p class="text-xs text-(--text-muted)">Fraca</p>
                      </div>
                    </div>
                    <div class="text-right">
                      <p class="text-sm font-bold text-(--text-base)">4,8 kg</p>
                      <p class="text-xs text-red-500">-8%</p>
                    </div>
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
