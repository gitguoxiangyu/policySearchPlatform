import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=> import('../views/MainPage.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: ()=> import('../views/login.vue')
    },
    {
      path: '/search',
      name: 'Search',
      component: ()=> import('../views/DetailSearch.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: ()=> import('../views/SearchList.vue'),
    },
    {
      path: '/policy',
      name: 'policy',
      component: ()=> import('../views/PolicyView.vue')
    },
    {
      path: '/personal',
      name: 'personal',
      component: ()=> import('../views/PersonInfo.vue')
    }
  ]
})

export default router
