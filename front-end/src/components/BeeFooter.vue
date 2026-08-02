<script setup lang="ts">
interface Props {
  copyright?: string;
}

const props = withDefaults(defineProps<Props>(), {
  copyright: `© ${new Date().getFullYear()} ColmeiaBee. Todos os direitos reservados.`,
});
</script>

<template>
  <footer
    class="w-full border-t border-[var(--border-base)] bg-[var(--bg-surface)]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">🐝</span>
            <span class="font-bold text-lg text-[var(--text-base)]">ColmeiaBee</span>
          </div>
          <p class="text-sm text-[var(--text-muted)]">
            <slot name="description">
              Conectando pessoas e oportunidades.
            </slot>
          </p>
        </div>

        <div>
          <slot name="links" />
        </div>

        <div>
          <slot name="social" />
        </div>
      </div>

      <div class="mt-8 pt-6 border-t border-[var(--border-base)]">
        <p class="text-sm text-center text-[var(--text-muted)]">
          {{ props.copyright }}
        </p>
      </div>
    </div>
  </footer>
</template>
