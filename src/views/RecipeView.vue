<template>
  <div class="home max-h-screen container mx-auto my-12">
    <h1 class="text-4xl mx-8 my-8 text-center md:text-left">
      <router-link :to="'/recipes'" class="text-jet-orange"
        >Recipes</router-link
      >
      > {{ recipe.name }}
    </h1>
    <div class="flex flex-col md:flex-row items-center md:items-start mx-4">
      <div
        class="w-11/12 md:w-full flex flex-col bg-jet-light-gray p-4 rounded-2xl md:mx-4 mx-2 mb-4"
      >
        <div class="flex flex-col md:flex-row">
          <img
            :src="recipe.image"
            class="rounded-2xl md:mr-4 align-middle w-full md:w-2/4"
          />
          <div>
            <h2 class="text-2xl">{{ recipe.name }}</h2>
            <span>by: {{ recipe.cook_name }}</span>
            <div class="mt-4">{{ recipe.description }}</div>
            <!-- ingredients -->
            <ul>
              <li v-for="ingredient in ingredients" :key="ingredient.id">
                {{ ingredient }}
              </li>
            </ul>
            <stats :recipe="recipe" />
          </div>
        </div>
        <div class="my-6">{{ recipe.method }}</div>
        <!-- nutritional info -->
        <Nutritional :nutritional="nutritional_info" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Stats from "@/components/Stats.vue";
export default {
  components: { Stats },
  name: "RecipesView",
  data() {
    return {
      recipe: {},
      nutritional_info: {},
      ingredients: [],
    };
  },
  methods: {
    async getAllRecipes() {
      let response = await axios.get(
        `http://localhost:3000/meals/${this.$route.params.id}`
      );
      console.log("Res: ", response);
      this.recipe = response.data;
      this.nutritional_info = response.data.nutritional_info;
      this.ingredients = response.data.ingredients;
    },
  },
  mounted() {
    this.getAllRecipes();
  },
};
</script>
