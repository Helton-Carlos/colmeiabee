import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import Cookies from 'js-cookie';

import {
  login as loginService,
  register as registerService,
} from '../services/auth.service';
import type { User } from '../types/user';

const TOKEN_KEY = 'colmeiabee_token';
const USER_KEY = 'colmeiabee_user';

function loadUserFromCookie(): User | null {
  const raw = Cookies.get(USER_KEY);

  if (!raw) return null;

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function loadTokenFromCookie(): string | null {
  return Cookies.get(TOKEN_KEY) || null;
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(loadUserFromCookie());
  const token = ref<string | null>(loadTokenFromCookie());
  const isLoading = ref<boolean>(false);
  const error = ref<string>('');

  const isAuthenticated = computed(() => !!token.value && !!user.value);

  function saveSession(accessToken: string, userData: User) {
    Cookies.set(TOKEN_KEY, accessToken, {
      expires: 7,
      secure: true,
      sameSite: 'strict',
    });

    Cookies.set(USER_KEY, JSON.stringify(userData), {
      expires: 7,
      secure: true,
      sameSite: 'strict',
    });

    token.value = accessToken;
    user.value = userData;
  }

  function clearSession() {
    Cookies.remove(TOKEN_KEY);
    Cookies.remove(USER_KEY);
    token.value = null;
    user.value = null;
  }

  async function login(email: string, password: string): Promise<boolean> {
    isLoading.value = true;
    error.value = '';

    try {
      const response = await loginService({ email, password });
      saveSession(response.accessToken, response.user);
      return true;
    } catch (err: unknown) {
      if (err && typeof err === 'object' && 'response' in err) {
        const axiosErr = err as { response?: { data?: { message?: string } } };
        error.value = axiosErr.response?.data?.message || 'Erro ao fazer login';
      } else {
        error.value = 'Erro de conexão com o servidor';
      }
      return false;
    } finally {
      isLoading.value = false;
    }
  }

  async function register(
    name: string,
    email: string,
    password: string,
  ): Promise<boolean> {
    isLoading.value = true;
    error.value = '';

    try {
      const response = await registerService({ name, email, password });
      saveSession(response.accessToken, response.user);
      return true;
    } catch (err: unknown) {
      if (err && typeof err === 'object' && 'response' in err) {
        const axiosErr = err as { response?: { data?: { message?: string } } };
        error.value = axiosErr.response?.data?.message || 'Erro ao criar conta';
      } else {
        error.value = 'Erro de conexão com o servidor';
      }
      return false;
    } finally {
      isLoading.value = false;
    }
  }

  function logout() {
    clearSession();
  }

  return {
    user,
    token,
    isAuthenticated,
    isLoading,
    error,
    login,
    register,
    logout,
  };
});
