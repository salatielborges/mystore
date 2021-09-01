import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'


const routes = [
  {
    path: '/',
    component: () => import('pages/Index.vue'),
  },

  { path: '/carrinho', 
        component: () => import('pages/Carrinho.vue') 
  },

  {
    path: '/quemsomos',
    component: () => import('pages/QuemSomos.vue')
  },

  {
    path: '/contato',
    component: () => import('pages/Contato.vue')
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  },
]

export default routes
