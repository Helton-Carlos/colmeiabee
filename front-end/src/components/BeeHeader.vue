<script setup lang="ts">
interface Props {
  title?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: 'ColmeiaBee',
});

const emit = defineEmits<{
  toggleTheme: [];
}>();
</script>

<template>
  <header
    class="w-full border-b border-[var(--border-base)] bg-[var(--bg-surface)]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center gap-3">
          <span class="text-2xl font-bold text-primary">🐝</span>
          <h1 class="text-xl font-bold text-[var(--text-base)]">
            {{ props.title }}
          </h1>
        </div>

        <nav class="hidden md:flex items-center gap-6">
          <slot name="nav" />
        </nav>

        <div class="flex items-center gap-3">
          <button
            @click="emit('toggleTheme')"
            class="p-2 rounded-lg hover:bg-[var(--bg-base)] transition-colors cursor-pointer"
            aria-label="Alternar tema"
          >
            <slot name="theme-icon"> 🌙 </slot>
          </button>
          <slot name="actions" />
        </div>
      </div>
    </div>
  </header>
</template>
