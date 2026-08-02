import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/view/Home.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/view/Login.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/view/Dashboard.vue'),
    },
  ],
});

export default router;
