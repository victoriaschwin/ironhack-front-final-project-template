import { createRouter, createWebHistory } from "vue-router";
import Register from '../pages/Register.vue';
import ToDo from '../pages/ToDo.vue';
import App from '../App.vue';


const routes = [
  {path: '/', component: App},
  {path: '/auth', component: Register},
  {path: '/to-do', component: ToDo}
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_ENV),
  routes,
});

export default router;
