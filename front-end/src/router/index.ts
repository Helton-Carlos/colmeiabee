import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../view/Home.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../view/Login.vue'),
    },
  ],
});

export default router;
