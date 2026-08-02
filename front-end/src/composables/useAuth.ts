import { ref, computed } from 'vue';
import Cookies from 'js-cookie';
import {
  login as loginService,
  register as registerService,
} from '../services/auth.service';

interface User {
  id: number;
  email: string;
  name: string;
}

const user = ref<User | null>(loadUserFromCookie());
const isLoading = ref(false);
const error = ref('');

function loadUserFromCookie(): User | null {
  const raw = Cookies.get('colmeiabee_user');

  if (!raw) return null;

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function saveSession(token: string, userData: User) {
  Cookies.set('colmeiabee_token', token, {
    expires: 7,
    secure: true,
    sameSite: 'strict',
  });

  Cookies.set('colmeiabee_user', JSON.stringify(userData), {
    expires: 7,
    secure: true,
    sameSite: 'strict',
  });

  user.value = userData;
}

function clearSession() {
  Cookies.remove('colmeiabee_token');
  Cookies.remove('colmeiabee_user');
  user.value = null;
}

export function useAuth() {
  const isAuthenticated = computed(() => !!user.value);

  async function login(email: string, password: string) {
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

  async function register(name: string, email: string, password: string) {
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
    isAuthenticated,
    isLoading,
    error,
    login,
    register,
    logout,
  };
}
