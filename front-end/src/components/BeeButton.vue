<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
});
</script>

<template>
  <button
    :disabled="props.disabled"
    :class="[
      'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 cursor-pointer',
      'focus:outline-none focus:ring-2 focus:ring-primary/50',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      {
        'bg-primary text-dark hover:bg-primary-hover active:scale-95':
          variant === 'primary',
        'bg-secondary text-dark hover:bg-secondary-hover active:scale-95':
          variant === 'secondary',
        'border-2 border-primary text-primary hover:bg-primary hover:text-dark active:scale-95':
          variant === 'outline',
        'text-[var(--text-base)] hover:bg-[var(--bg-surface)] active:scale-95':
          variant === 'ghost',
      },
      {
        'px-3 py-1.5 text-sm': size === 'sm',
        'px-5 py-2.5 text-base': size === 'md',
        'px-7 py-3.5 text-lg': size === 'lg',
      },
    ]"
  >
    <slot />
  </button>
</template>
