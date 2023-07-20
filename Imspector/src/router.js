import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Log.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;