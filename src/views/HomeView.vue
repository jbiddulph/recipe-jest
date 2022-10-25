<template>
  <div class="home">
    <WelcomeComponent msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import WelcomeComponent from "@/components/WelcomeComponent.vue";

export default {
  name: "WelcomeComponent",
  components: {
    WelcomeComponent,
  },
};
</script>
