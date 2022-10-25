<template>
  <div class="relative">
    <h1
      class="text-4xl md:text-6xl font-bold text-white mx-2 md:mx-8 my-8 text-center md:text-left absolute md:bottom-10 md:left-10 container"
    >
      Contact us
    </h1>
    <img
      src="@/assets/JET-header-door-warm-welcome-1600_9e5549e083257978c8afcbf848280fd0.webp"
    />
  </div>
  <div class="max-h-screen container md:mx-auto my-12 mx-4">
    <h2 class="text-2xl mb-4">International Headquarters</h2>
    <div class="flex md:flex-row flex-col">
      <div class="md:w-1/2">
        <span
          >Just Eat Takeaway.com N.V.<br />
          Piet Heinkade 61<br />
          1019 GM<br />
          Amsterdam<br />
          The Netherlands<br />
          W: https://justeattakeaway.com</span
        >
      </div>
      <div class="md:w-1/2 w-3/4">
        <form class="flex flex-col">
          <div class="flex flex-col">
            <label for="Name">First Name</label>
            <input
              type="text"
              class="border border-jet-dark-gray rounded p-4 mb-4"
            />
          </div>
          <div class="flex flex-col">
            <label for="Name">Last Name</label>
            <input
              type="text"
              class="border border-jet-dark-gray rounded p-4 mb-4"
            />
          </div>
          <div class="flex flex-col">
            <label for="Name">Email</label>
            <input
              type="email"
              class="border border-jet-dark-gray rounded p-4 mb-4"
            />
          </div>
          <div class="flex flex-col">
            <label for="Name">Comment</label>
            <input
              type="text"
              class="border border-jet-dark-gray rounded p-4 mb-4"
            />
          </div>
          <div class="flex flex-col">
            <AppButton type="primary" class="my-4 mx-10 w-60"
              >Contact</AppButton
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/AppButton.vue";
export default {
  components: { AppButton },
  name: "ContactView",
};
</script>
