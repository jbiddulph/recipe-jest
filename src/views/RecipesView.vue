<template>
  <JetHeader />
  <div class="home max-h-screen container mx-auto my-12">
    <h1 class="text-4xl mx-4 my-8 text-center md:text-left">Recipes</h1>
    <ul class="flex flex-col md:flex-row items-center md:items-start mx-4">
      <li
        class="w-11/12 md:w-1/2 flex flex-col bg-jet-light-gray p-4 rounded-2xl md:mx-4 mx-2 mb-4"
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
        <ul class="flex flex-row mt-4">
          <li class="mr-6">
            <i class="fa-solid fa-clock">&nbsp;&nbsp;</i>{{ recipe.prep_time }}
          </li>
          <li class="mr-6">
            <i class="fa-solid fa-clock">&nbsp;&nbsp;</i>{{ recipe.cook_time }}
          </li>
          <li class="mr-6">
            <i class="fa-solid fa-star">&nbsp;&nbsp;</i>{{ recipe.difficulty }}
          </li>
          <li class="mr-6">
            <i class="fa-solid fa-users">&nbsp;&nbsp;</i>{{ recipe.serves }}
          </li>
        </ul>
        <div class="mt-4">{{ recipe.description }}</div>
        <!-- ingredients -->
        <ul>
          <li v-for="ingredient in ingredients" :key="ingredient.id">
            {{ ingredient }}
          </li>
        </ul>
        <router-link :to="`/recipe/${recipe.id}`" class="text-center">
          <AppButton type="primary" class="my-4 mx-10 w-60"
            >View Full Recipe</AppButton
          >
        </router-link>
      </li>
    </ul>
  </div>
  <JetFooter />
</template>

<script>
import axios from "axios";
import AppButton from "@/components/AppButton.vue";
import JetHeader from "@/components/JetHeader.vue";
import JetFooter from "@/components/JetFooter.vue";
export default {
  name: "RecipesView",
  components: {
    AppButton,
    JetHeader,
    JetFooter,
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
