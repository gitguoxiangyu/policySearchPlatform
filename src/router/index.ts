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
      path: '/register',
      name: 'Register',
      component: ()=> import('../views/register.vue')
    },
    {
      path: '/search',
      name: 'Search',
      component: ()=> import('../views/DetailSearch.vue')
    },
    {
      path: '/list',
      name: 'List',
      component: ()=> import('../views/SearchList.vue'),
    },
    {
      path: '/policy',
      name: 'Policy',
      component: ()=> import('../views/PolicyView.vue')
    },
    {
      path: '/personal',
      name: 'Personal',
      component: ()=> import('../views/PersonInfo.vue')
    }
  ]
})

export default router
