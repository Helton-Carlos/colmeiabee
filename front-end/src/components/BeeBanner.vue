<script setup lang="ts">
interface Props {
  title?: string;
  subtitle?: string;
  variant?: 'primary' | 'secondary' | 'dark';
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  subtitle: '',
  variant: 'primary',
});
</script>

<template>
  <section
    :class="[
      'w-full py-16 px-4 sm:px-6 lg:px-8',
      {
        'bg-primary text-dark': variant === 'primary',
        'bg-secondary text-dark': variant === 'secondary',
        'bg-dark text-white': variant === 'dark',
      },
    ]"
  >
    <div class="max-w-7xl mx-auto text-center">
      <h2 v-if="props.title" class="text-3xl sm:text-4xl font-bold mb-4">
        {{ props.title }}
      </h2>
      <p
        v-if="props.subtitle"
        class="text-lg opacity-80 mb-8 max-w-2xl mx-auto"
      >
        {{ props.subtitle }}
      </p>
      <slot />
    </div>
  </section>
</template>
