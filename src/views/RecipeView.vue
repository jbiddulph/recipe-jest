<template>
  <JetHeader />
  <div class="home max-h-screen">
    <h1>hello</h1>
  </div>
  <JetFooter />
</template>

<script>
import JetHeader from "@/components/JetHeader.vue";
import JetFooter from "@/components/JetFooter.vue";
export default {
  name: "RecipesView",
  components: {
    JetHeader,
    JetFooter,
  },
};
</script>
