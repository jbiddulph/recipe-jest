<template>
  <div class="home max-h-screen container mx-auto my-12">
    <h1 class="text-4xl mx-8 my-8 text-center md:text-left">Recipes</h1>
    <ul class="flex flex-col md:flex-row items-center md:items-start mx-4">
      <li
        class="w-11/12 md:w-1/2 flex flex-col bg-jet-light-gray p-4 rounded-2xl md:mx-4 mx-2 mb-4 border border-jet-dark-gray"
        v-for="recipe in recipes"
        :key="recipe.id"
      >
        <div class="flex flex-col md:flex-row">
          <img
            :src="recipe.image"
            class="rounded-2xl md:mr-4 align-middle w-full md:w-1/4"
          />
          <div>
            <h2 class="text-2xl">{{ recipe.name }}</h2>
            <span class="italic">by: {{ recipe.cook_name }}</span>
          </div>
        </div>
        <stats :recipe="recipe" />
        <div class="mt-4">{{ recipe.description }}</div>
        <!-- ingredients -->
        <ingredients :recipe="recipe" />
        <router-link :to="`/recipe/${recipe.id}`" class="text-center">
          <AppButton type="primary" class="my-4 mx-10 w-60"
            >View Full Recipe</AppButton
          >
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import Stats from "@/components/Stats.vue";
import AppButton from "@/components/AppButton.vue";
import Ingredients from "@/components/Ingredients.vue";
export default {
  name: "RecipesView",
  components: {
    Stats,
    AppButton,
    Ingredients,
  },
  data() {
    return {
      recipes: [],
    };
  },
  methods: {
    async getAllRecipes() {
      let response = await axios.get("http://localhost:3000/meals");
      this.recipes = response.data;
    },
  },
  mounted() {
    this.getAllRecipes();
  },
};
</script>
