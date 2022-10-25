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
            <span>by: {{ recipe.cook_name }}</span>
          </div>
        </div>
        <div class="mt-4">{{ recipe.description }}</div>
        <div>{{ recipe.method }}</div>
        <div>{{ recipe.prep_time }}</div>
        <div>{{ recipe.cook_time }}</div>
        <div>{{ recipe.difficulty }}</div>
        <div>{{ recipe.serves }}</div>
        <!-- ingredients -->
        <ul>
          <li v-for="ingredient in ingredients" :key="ingredient.id">
            {{ ingredient }}
          </li>
        </ul>
        <!-- nutritional info -->
        <div>
          <span class="rounded bg-jet-orange text-white p-1 text-sm mr-2"
            >kcal: <strong>{{ recipe.nutritional_info.kcal }}</strong></span
          >
          <span class="rounded bg-jet-orange text-white p-1 text-sm mr-2"
            >fat: <strong>{{ recipe.nutritional_info.fat }}</strong></span
          >
          <span class="rounded bg-jet-orange text-white p-1 text-sm mr-2"
            >saturates:
            <strong>{{ recipe.nutritional_info.saturates }}</strong></span
          >
          <span class="rounded bg-jet-orange text-white p-1 text-sm mr-2"
            >carbs: <strong>{{ recipe.nutritional_info.carbs }}</strong></span
          >
          <span class="rounded bg-jet-orange text-white p-1 text-sm mr-2"
            >sugars: <strong>{{ recipe.nutritional_info.sugars }}</strong></span
          >
          <span class="rounded bg-jet-orange text-white p-1 text-sm mr-2"
            >fibre: <strong>{{ recipe.nutritional_info.kcal }}</strong></span
          >
          <span class="rounded bg-jet-orange text-white p-1 text-sm mr-2"
            >protein:
            <strong>{{ recipe.nutritional_info.protein }}</strong></span
          >
          <span class="rounded bg-jet-orange text-white p-1 text-sm mr-2"
            >salt: <strong>{{ recipe.nutritional_info.salt }}</strong></span
          >
        </div>
      </li>
    </ul>
  </div>
  <JetFooter />
</template>

<script>
import axios from "axios";
import JetHeader from "@/components/JetHeader.vue";
import JetFooter from "@/components/JetFooter.vue";
export default {
  name: "RecipesView",
  components: {
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
