import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'

const Home = {template: ''}

const routes = [
  {path: '/', component: () => import('./views/Home.vue')},
  {path: '/drag', component: () => import('./views/DraggableScreen.vue')}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App);
app.use(router)
app.mount('#app')
