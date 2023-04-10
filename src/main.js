import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'

const Home = {template: ''}

const routes = [
  {path: '/', component: Home},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(app);
app.use(router)
app.mount('#app')


// createApp(App).mount('#app')
