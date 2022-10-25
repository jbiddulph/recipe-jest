<template>
  <jet-header />
  <router-view />
  <jet-footer />
</template>

<script>
import JetHeader from "@/components/JetHeader.vue";
import JetFooter from "@/components/JetFooter.vue";
export default {
  name: "AppView",
  components: {
    JetHeader,
    JetFooter,
  },
};
</script>
