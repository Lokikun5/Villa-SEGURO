import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contact-1seguro',
    name: 'contact-1seguro',
    component: () => import(/* webpackChunkName: "contact-1seguro" */ '../views/contact-1seguro.vue')
  },
  {
    path: '/actu-1seguro',
    name: 'actu-1seguro',
    component: () => import(/* webpackChunkName: "actu-1seguro" */ '../views/actu-1seguro.vue')
  },
  {
    path: '/histoire-1seguro',
    name: 'histoire-1seguro',
    component: () => import(/* webpackChunkName: "histoire-1" */ '../views/histoire-1seguro.vue')
  },
  {
    path: '/formule-de-résidence',
    name: 'formule-de-résidence',
    component: () => import(/* webpackChunkName: "formule-de-résidence" */ '../views/formule-de-résidence.vue')
  },
  {
    path: '/photo-exposition',
    name: 'photo-exposition',
    component: () => import(/* webpackChunkName: "photo-exposition" */ '../views/photo-exposition.vue')
  },
  {
    path: '/nos-amis-et-mécènes',
    name: 'nos amis et mécènes',
    component: () => import(/* webpackChunkName: "nos-amis-et-mécènes" */ '../views/nos-amis-et-mécènes.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
