<template>
  <JetHeader />
  <div class="home max-h-screen container mx-auto my-12">
    <h1 class="text-4xl">Recipes</h1>
    <ul class="flex flex-row">
      <li
        class="w-1/2 flex flex-col"
        v-for="recipe in recipes"
        :key="recipe.id"
      >
        <div class="flex flex-row justify-between">
          <h2>{{ recipe.name }}</h2>
          <span>by: {{ recipe.cook_name }}</span>
        </div>
        <div>{{ recipe.description }}</div>
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
