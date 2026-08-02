<script setup lang="ts">
interface Props {
  title?: string;
  subtitle?: string;
  hoverable?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  subtitle: '',
  hoverable: false,
});
</script>

<template>
  <div
    :class="[
      'rounded-xl border border-[var(--border-base)] bg-[var(--bg-surface)] overflow-hidden transition-all duration-200',
      props.hoverable &&
        'hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 cursor-pointer',
    ]"
  >
    <div v-if="$slots.image" class="w-full">
      <slot name="image" />
    </div>

    <div class="p-5">
      <h3
        v-if="props.title"
        class="text-lg font-semibold text-[var(--text-base)] mb-1"
      >
        {{ props.title }}
      </h3>
      <p v-if="props.subtitle" class="text-sm text-[var(--text-muted)] mb-3">
        {{ props.subtitle }}
      </p>
      <slot />
    </div>

    <div
      v-if="$slots.footer"
      class="px-5 py-3 border-t border-[var(--border-base)]"
    >
      <slot name="footer" />
    </div>
  </div>
</template>
