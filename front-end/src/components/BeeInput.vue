<script setup lang="ts">
interface Props {
  modelValue?: string;
  type?: string;
  placeholder?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  type: 'text',
  placeholder: '',
  label: '',
  error: '',
  disabled: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

function onInput(event: Event) {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
}
</script>

<template>
  <div class="flex flex-col gap-1.5">
    <label
      v-if="props.label"
      class="text-sm font-medium text-[var(--text-base)]"
    >
      {{ props.label }}
    </label>
    <input
      :type="props.type"
      :value="props.modelValue"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      @input="onInput"
      :class="[
        'w-full px-4 py-2.5 rounded-lg border transition-all duration-200',
        'bg-[var(--bg-surface)] text-[var(--text-base)] placeholder-[var(--text-muted)]',
        'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        props.error ? 'border-red-500' : 'border-[var(--border-base)]',
      ]"
    />
    <span v-if="props.error" class="text-sm text-red-500">
      {{ props.error }}
    </span>
  </div>
</template>
