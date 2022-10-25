<template>
  <ul class="flex flex-row mt-4">
    <li class="mr-6">
      <i class="fa-solid fa-clock text-jet-orange">&nbsp;&nbsp;</i
      >{{ recipe.prep_time }} Prep
    </li>
    <li class="mr-6">
      <i class="fa-solid fa-clock text-jet-orange">&nbsp;&nbsp;</i
      >{{ recipe.cook_time }} Cook
    </li>
    <li class="mr-6">
      <i class="fa-solid fa-star text-jet-orange">&nbsp;&nbsp;</i
      >{{ recipe.difficulty }}
    </li>
    <li class="mr-6">
      <i class="fa-solid fa-users text-jet-orange">&nbsp;&nbsp;</i
      >{{ recipe.serves }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "StatsView",
  props: {
    recipe: Object,
  },
};
</script>

<style></style>
