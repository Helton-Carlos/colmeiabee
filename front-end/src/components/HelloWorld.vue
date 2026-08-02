<script setup lang="ts">
import { ref } from 'vue';

const text = ref<string>('COLMEIABEE');
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold">{{ text }}</h1>
  </div>
</template>
