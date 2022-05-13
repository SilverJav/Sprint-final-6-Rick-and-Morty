import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/about',
    name: 'about',

    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    
    component: () => import( '../views/ContactView.vue')
  },
  {
    path: '/home',
    name: 'home',
    
    component: () => import( '../views/HomeView.vue')
  },
  {
    path: '/favoritos',
    name: 'favoritos',
    
    component: () => import( '../views/FavoritosView.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
