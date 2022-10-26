<template>
  <li
    class="w-11/12 md:w-1/2 flex flex-col bg-jet-light-gray p-4 rounded-2xl md:mx-4 mx-2 mb-4 border border-jet-dark-gray"
    v-for="recipe in list"
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
    <router-link :to="`/recipe/${recipe.id}`" class="text-center">
      <AppButton type="primary" class="my-4 w-60">View Full Recipe</AppButton>
    </router-link>
  </li>
</template>

<script>
import Stats from "@/components/Stats.vue";
import AppButton from "@/components/AppButton.vue";
export default {
  name: "ListItems",
  components: {
    Stats,
    AppButton,
  },
  props: {
    list: Array,
  },
};
</script>
