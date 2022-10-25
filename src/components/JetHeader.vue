<template>
  <div
    class="bg-jet-orange text-gray-100 py-4 px-6 shadow md:flex justify-between items-center"
  >
    <div class="flex items-center">
      <router-link to="/" class="p-2">
        <img
          src="https://s3.eu-central-1.amazonaws.com/takeaway-corporatewebsite-dev/logo_white.svg"
          height="24"
          width="200"
        />
      </router-link>
    </div>
    <span
      @click="menuOpen"
      class="absolute md:hidden right-6 top-2 cursor-pointer text-3xl"
    >
      <i :class="[open ? 'fa-solid fa-times' : 'fa-solid fa-bars']"></i>
    </span>
    <ul
      class="bg-jet-orange md:flex items-center cursor-pointer z-10 md:px-0 px-10 md:pb-0 pb-10 md:static absolute md:w-auto w-full top-14 duration-700 ease-in"
      :class="[open ? 'left-0' : 'hidden']"
    >
      <li class="my-8 md:my-0 md:mx-2">
        <router-link
          class="text-white hover:border-b-2 border-white font-bold p-2"
          to="/"
          >Recipe List</router-link
        >
      </li>
      <li class="my-8 md:my-0 md:mx-2">
        <router-link
          class="text-white hover:border-b-2 border-white font-bold p-2"
          to="/contact"
          >Contact us</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "JetHeader",
  data() {
    return {
      open: false,
    };
  },
  methods: {
    menuOpen() {
      this.open = !this.open;
    },
  },
};
</script>
