---
inclusion: auto
---

# Padrão de código Vue - Front-end ColmeiaBee

## Estrutura do arquivo .vue

- Ordem dos blocos: `<script setup lang="ts">`, `<template>`, `<style>` (se necessário)
- Pule uma linha entre cada bloco (`</script>` → linha vazia → `<template>`)

## Template

- Após fechar qualquer tag, pule uma linha antes do próximo elemento irmão
- Exceção: elementos inline curtos dentro de um mesmo contexto (ex: `<span>` dentro de `<div>`)
- Indentação de 2 espaços
- Atributos dinâmicos (`:class`, `v-if`, `@click`) em linhas separadas quando há mais de 2 atributos

## Script

- Sem comentários (nem `//` nem `/* */`)
- Imports agrupados: libs externas primeiro, depois componentes, depois composables/utils
- Linha vazia entre grupos de imports
- Linha vazia entre declarações de variáveis/refs e funções
- Use `const` por padrão, `let` apenas quando necessário reatribuir

## Estilo geral

- Nunca use `<!-- -->` no template
- Nomes de componentes em PascalCase com prefixo `Bee` (ex: `BeeButton`, `BeeCard`)
- Props com interface TypeScript + `withDefaults`
- Emits com interface TypeScript tipada
- Use composables para lógica compartilhada (pasta `composables/`)
- Use a pasta `utils/` para dados estáticos e helpers

## Tailwind

- Use as variáveis do tema: `text-primary`, `bg-dark`, `text-(--text-base)`, etc.
- Não use cores hardcoded (hex direto no class)
- Classes longas: quebre em múltiplas linhas dentro de arrays no `:class`

## Exemplo de formatação

```vue
<script setup lang="ts">
import { ref } from 'vue';

import BeeButton from '../components/BeeButton.vue';

import { useTheme } from '../composables/useTheme';

const { theme, toggleTheme } = useTheme();

const count = ref(0);

function increment() {
  count.value++;
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <h1 class="text-2xl font-bold text-(--text-base)">Título</h1>

    <BeeButton variant="primary" size="lg" @click="increment">
      Clique aqui
    </BeeButton>

    <p class="text-base text-(--text-muted)">Contador: {{ count }}</p>
  </div>
</template>
```
