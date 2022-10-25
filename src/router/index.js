import { createRouter, createWebHistory } from "vue-router";
import RecipeView from "@/views/RecipeView.vue";
import ContactView from "@/views/ContactView.vue";

const routes = [
  {
    path: "/recipes",
    name: "home",
    component: RecipeView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
