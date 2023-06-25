import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "../components/MainPage.vue";
import Home from "../components/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      redirect:'/home'
    },
    {
      path: '/main',
      name: 'main',
      component: MainPage,
      children:[
        {
          path: 'prof',
          name: 'prof',
          component: () => import('../components/prof.vue'),
        },
        {
          path: 'lightInt',
          name: 'lightInt',
          component: () => import('../components/lightInt.vue'),
        },
        {
          path: 'xyzTrans',
          name: 'xyzTrans',
          component: () => import('../components/xyzTrans.vue'),
        },
        {
          path: 'culture',
          name: 'culture',
          component: () => import('../components/culture.vue'),
        },
    ]
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    }

  ]
})

export default router
