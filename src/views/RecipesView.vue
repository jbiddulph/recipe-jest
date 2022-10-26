<template>
  <div :class="{ 'is-loading': isLoading }">&nbsp;</div>
  <div v-if="!isLoading" class="home container mx-auto my-12">
    <h1 class="text-4xl mx-8 my-8 text-center md:text-left">Recipes</h1>
    <ul class="flex flex-col md:flex-row items-center md:items-start mx-4">
      <list-items :list="recipes" />
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import ListItems from "@/components/ListItems.vue";
export default {
  name: "RecipesView",
  components: {
    ListItems,
  },
  data() {
    return {
      recipes: [],
      isLoading: false,
    };
  },
  methods: {
    async getAllRecipes() {
      try {
        this.isLoading = true;
        let response = await axios.get("http://localhost:3000/meals");
        this.isLoading = false;
        this.recipes = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getAllRecipes();
  },
};
</script>
