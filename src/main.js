import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'

const Home = {template: ''}

const routes = [
  {path: '/', component: () => import('./views/Home.vue')},
  {path: '/drag', component: () => import('./views/SimpleDrag.vue')},
  {path: '/drag-n-drop', component: () => import('./views/DragNDrop.vue')},
  {path: '/sort-column', component: () => import('./views/SortColumn.vue')},
  {path: '/sort-row', component: () => import('./views/SortRow.vue')},
  {path: '/template-builder', component: () => import('./views/TemplateBuilder.vue')},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App);
app.use(router)
app.mount('#app')
