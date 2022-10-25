<template>
  <JetHeader />
  <div class="contact">
    <h1>This is an contact page</h1>
  </div>
  <JetFooter />
</template>

<script>
import JetHeader from "@/components/JetHeader.vue";
import JetFooter from "@/components/JetFooter.vue";
export default {
  name: "ContactView",
  components: {
    JetHeader,
    JetFooter,
  },
};
</script>
