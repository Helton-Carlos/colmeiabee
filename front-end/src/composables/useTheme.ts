import { ref, watch } from 'vue';

type Theme = 'light' | 'dark';

const theme = ref<Theme>(
  (localStorage.getItem('colmeiabee-theme') as Theme) || 'light',
);

function applyTheme(value: Theme) {
  if (value === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

applyTheme(theme.value);

watch(theme, (newTheme) => {
  localStorage.setItem('colmeiabee-theme', newTheme);
  applyTheme(newTheme);
});

export function useTheme() {
  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
  }

  return {
    theme,
    toggleTheme,
  };
}
