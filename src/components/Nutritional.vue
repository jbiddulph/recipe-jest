<template>
<div>
    <span class="rounded bg-jet-orange text-white p-1 text-sm mr-2"
    >kcal: <strong>{{ nutritional_info.kcal }}</strong></span
    >
    <span class="rounded bg-jet-orange text-white p-1 text-sm mr-2"
    >fat: <strong>{{ nutritional_info.fat }}</strong></span
    >
    <span class="rounded bg-jet-orange text-white p-1 text-sm mr-2"
    >saturates: <strong>{{ nutritional_info.saturates }}</strong></span
    >
    <span class="rounded bg-jet-orange text-white p-1 text-sm mr-2"
    >carbs: <strong>{{ nutritional_info.carbs }}</strong></span
    >
    <span class="rounded bg-jet-orange text-white p-1 text-sm mr-2"
    >sugars: <strong>{{ nutritional_info.sugars }}</strong></span
    >
    <span class="rounded bg-jet-orange text-white p-1 text-sm mr-2"
    >fibre: <strong>{{ nutritional_info.kcal }}</strong></span
    >
    <span class="rounded bg-jet-orange text-white p-1 text-sm mr-2"
    >protein: <strong>{{ nutritional_info.protein }}</strong></span
    >
    <span class="rounded bg-jet-orange text-white p-1 text-sm mr-2"
    >salt: <strong>{{ nutritional_info.salt }}</strong></span
    >
</div>
</template>

<script>
export default {
    name: "NutritionalVie",
    props: {
      nutritional_info: Object,
    },
};
</script>

<style>

</style>