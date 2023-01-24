import { createRouter, createWebHistory } from "vue-router";
import Register from '../pages/Register.vue';
import ToDo from '../pages/ToDo.vue';
import Login from '../pages/Login.vue'


const routes = [
  {path: '/auth', component: Register},
  {path: '/', component: ToDo},
  {path: '/login', component: Login}

];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_ENV),
  routes,
});

export default router;
