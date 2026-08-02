---
inclusion: auto
---

# Tipagem explícita em ref()

- Sempre use o generic type ao declarar `ref()`, mesmo quando o tipo pode ser inferido
- Exemplos:
  - `const name = ref<string>('')`
  - `const count = ref<number>(0)`
  - `const isOpen = ref<boolean>(false)`
  - `const user = ref<User | null>(null)`
  - `const items = ref<Item[]>([])`
- Nunca deixe `ref()` sem tipagem explícita: `ref('')` ❌ → `ref<string>('')` ✅
