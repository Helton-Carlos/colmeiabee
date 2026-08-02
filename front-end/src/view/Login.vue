<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';

import BeeInput from '../components/BeeInput.vue';
import BeeButton from '../components/BeeButton.vue';

import { useTheme } from '../composables/useTheme';
import { useAuth } from '../composables/useAuth';

const router = useRouter();
const { theme, toggleTheme } = useTheme();
const { login, register, isLoading, error: authError } = useAuth();

const activeTab = ref<'signin' | 'signup'>('signin');

const signInSchema = toTypedSchema(
  z.object({
    email: z
      .string({ required_error: 'E-mail é obrigatório' })
      .min(1, 'E-mail é obrigatório')
      .email('E-mail inválido'),
    password: z
      .string({ required_error: 'Senha é obrigatória' })
      .min(1, 'Senha é obrigatória'),
  }),
);

const {
  handleSubmit: handleSignInSubmit,
  defineField: defineSignInField,
  errors: signInErrors,
} = useForm({ validationSchema: signInSchema });

const [signInEmail, signInEmailAttrs] = defineSignInField('email');
const [signInPassword, signInPasswordAttrs] = defineSignInField('password');

const onSignIn = handleSignInSubmit(async (values) => {
  const success = await login(values.email, values.password);

  if (success) {
    router.push('/');
  }
});

const signUpSchema = toTypedSchema(
  z
    .object({
      name: z
        .string({ required_error: 'Nome é obrigatório' })
        .min(1, 'Nome é obrigatório'),
      email: z
        .string({ required_error: 'E-mail é obrigatório' })
        .min(1, 'E-mail é obrigatório')
        .email('E-mail inválido'),
      password: z
        .string({ required_error: 'Senha é obrigatória' })
        .min(6, 'Senha deve ter no mínimo 6 caracteres'),
      confirmPassword: z
        .string({ required_error: 'Confirmação é obrigatória' })
        .min(1, 'Confirmação é obrigatória'),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'As senhas não coincidem',
      path: ['confirmPassword'],
    }),
);

const {
  handleSubmit: handleSignUpSubmit,
  defineField: defineSignUpField,
  errors: signUpErrors,
} = useForm({ validationSchema: signUpSchema });

const [signUpName, signUpNameAttrs] = defineSignUpField('name');
const [signUpEmail, signUpEmailAttrs] = defineSignUpField('email');
const [signUpPassword, signUpPasswordAttrs] = defineSignUpField('password');
const [signUpConfirmPassword, signUpConfirmPasswordAttrs] =
  defineSignUpField('confirmPassword');

const onSignUp = handleSignUpSubmit(async (values) => {
  const success = await register(values.name, values.email, values.password);

  if (success) {
    router.push('/');
  }
});
</script>

<template>
  <div class="min-h-screen bg-(--bg-base) flex">
    <div
      class="hidden lg:flex lg:w-1/2 bg-dark relative overflow-hidden items-center justify-center"
    >
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 left-10 text-8xl">🐝</div>
        <div class="absolute top-60 right-16 text-6xl">🍯</div>
        <div class="absolute bottom-32 left-1/4 text-7xl">🐝</div>
      </div>
      <div class="relative z-10 text-center px-12">
        <div
          class="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <span class="text-5xl">🐝</span>
        </div>
        <h2 class="text-4xl font-bold text-white mb-4">ColmeiaBee</h2>
        <p class="text-lg text-gray-400 max-w-md">
          A colmeia do agro. Entre e conecte-se com a comunidade de apicultores.
        </p>
      </div>
    </div>

    <div class="w-full lg:w-1/2 flex flex-col">
      <div class="flex items-center justify-between p-6">
        <button
          class="flex items-center gap-2 text-(--text-base) hover:text-dark transition-colors cursor-pointer"
          @click="router.push('/')"
        >
          <span class="text-lg">←</span>
          <span class="text-base font-semibold">Voltar</span>
        </button>

        <button
          class="p-2 rounded-lg hover:bg-(--bg-surface) transition-colors cursor-pointer text-(--text-base)"
          aria-label="Alternar tema"
          @click="toggleTheme"
        >
          <span v-if="theme === 'light'">🌙</span>
          <span v-else>☀️</span>
        </button>
      </div>

      <div class="flex-1 flex items-center justify-center px-6 sm:px-12">
        <div class="w-full max-w-md">
          <div class="lg:hidden text-center mb-8">
            <span class="text-4xl">🐝</span>
            <h1 class="text-2xl font-bold text-(--text-base) mt-2">
              ColmeiaBee
            </h1>
          </div>

          <div class="flex mb-8 border-b border-(--border-base)">
            <button
              :class="[
                'flex-1 pb-3 text-center text-lg font-bold transition-colors cursor-pointer',
                activeTab === 'signin'
                  ? 'text-dark border-b-2 border-dark'
                  : 'text-gray hover:text-dark',
              ]"
              @click="activeTab = 'signin'"
            >
              Entrar
            </button>

            <button
              :class="[
                'flex-1 pb-3 text-center text-lg font-bold transition-colors cursor-pointer',
                activeTab === 'signup'
                  ? 'text-dark border-b-2 border-dark'
                  : 'text-gray hover:text-dark',
              ]"
              @click="activeTab = 'signup'"
            >
              Criar Conta
            </button>
          </div>

          <form
            v-if="activeTab === 'signin'"
            class="space-y-5"
            @submit.prevent="onSignIn"
          >
            <BeeInput
              v-model="signInEmail"
              v-bind="signInEmailAttrs"
              type="email"
              label="E-mail"
              placeholder="seu@email.com"
              :error="signInErrors.email"
            />

            <BeeInput
              v-model="signInPassword"
              v-bind="signInPasswordAttrs"
              type="password"
              label="Senha"
              placeholder="••••••••"
              :error="signInErrors.password"
            />

            <div class="flex items-center justify-between">
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" class="w-4 h-4 accent-primary rounded" />
                <span class="text-base text-(--text-base)">Lembrar-me</span>
              </label>
              <a
                href="#"
                class="text-base font-medium text-dark hover:text-primary hover:underline"
                >Esqueceu a senha?</a
              >
            </div>

            <div
              v-if="authError && activeTab === 'signin'"
              class="p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm font-medium"
            >
              {{ authError }}
            </div>

            <BeeButton
              variant="primary"
              size="lg"
              class="w-full"
              :disabled="isLoading"
            >
              {{ isLoading ? 'Entrando...' : 'Entrar' }}
            </BeeButton>

            <div class="relative my-6">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-(--border-base)"></div>
              </div>
              <div class="relative flex justify-center text-base">
                <span class="px-3 bg-(--bg-base) text-(--text-base) font-medium"
                  >ou continue com</span
                >
              </div>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <button
                type="button"
                class="flex items-center justify-center gap-2 px-4 py-3 border border-(--border-base) rounded-lg hover:bg-dark hover:text-white transition-colors cursor-pointer"
              >
                <span>🔵</span>
                <span class="text-base font-semibold text-(--text-base)"
                  >Google</span
                >
              </button>
              <button
                type="button"
                class="flex items-center justify-center gap-2 px-4 py-3 border border-(--border-base) rounded-lg hover:bg-dark hover:text-white transition-colors cursor-pointer"
              >
                <span>⚫</span>
                <span class="text-base font-semibold text-(--text-base)"
                  >GitHub</span
                >
              </button>
            </div>
          </form>

          <form v-else class="space-y-5" @submit.prevent="onSignUp">
            <BeeInput
              v-model="signUpName"
              v-bind="signUpNameAttrs"
              type="text"
              label="Nome completo"
              placeholder="Seu nome"
              :error="signUpErrors.name"
            />
            <BeeInput
              v-model="signUpEmail"
              v-bind="signUpEmailAttrs"
              type="email"
              label="E-mail"
              placeholder="seu@email.com"
              :error="signUpErrors.email"
            />
            <BeeInput
              v-model="signUpPassword"
              v-bind="signUpPasswordAttrs"
              type="password"
              label="Senha"
              placeholder="Mínimo 6 caracteres"
              :error="signUpErrors.password"
            />
            <BeeInput
              v-model="signUpConfirmPassword"
              v-bind="signUpConfirmPasswordAttrs"
              type="password"
              label="Confirmar Senha"
              placeholder="Repita a senha"
              :error="signUpErrors.confirmPassword"
            />

            <div
              v-if="authError && activeTab === 'signup'"
              class="p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm font-medium"
            >
              {{ authError }}
            </div>

            <BeeButton
              variant="primary"
              size="lg"
              class="w-full"
              :disabled="isLoading"
            >
              {{ isLoading ? 'Criando...' : 'Criar Conta' }}
            </BeeButton>

            <p class="text-sm text-center text-(--text-base)">
              Ao criar uma conta, você concorda com nossos
              <a href="#" class="text-primary font-medium hover:underline"
                >Termos de Uso</a
              >
              e
              <a href="#" class="text-primary font-medium hover:underline"
                >Política de Privacidade</a
              >.
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
