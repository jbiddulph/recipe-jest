import { createRouter, createWebHistory } from "vue-router";
import RecipesView from "@/views/RecipesView.vue";
import RecipeView from "@/views/RecipeView.vue";
import ContactView from "@/views/ContactView.vue";

const routes = [
  {
    path: "/recipes",
    name: "recipes",
    component: RecipesView,
  },
  {
    path: "/recipe/:id",
    name: "recipe",
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
