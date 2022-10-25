<template>
  <ul>
    <li v-for="ingredient in ingredients" :key="ingredient.id">
      {{ ingredient }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "IngredientsView",
  props: {
    recipe: Object,
  },
};
</script>

<style></style>
