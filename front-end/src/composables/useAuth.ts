import { storeToRefs } from 'pinia';

import { useAuthStore } from '@/stores/auth.store';

export function useAuth() {
  const store = useAuthStore();
  const { user, token, isAuthenticated, isLoading, error } = storeToRefs(store);

  return {
    user,
    token,
    isAuthenticated,
    isLoading,
    error,
    login: store.login,
    register: store.register,
    logout: store.logout,
  };
}
