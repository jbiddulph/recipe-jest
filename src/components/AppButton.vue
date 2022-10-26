<template>
  <button
    :class="{
      'rounded disabled:cursor-not-allowed p-4 text-xl ': true,
      'bg-jet-light-gray border-jet-dark-gray border rounded-full hover:border-jet-orange text-jet-dark-gray hover:text-jet-orange':
        type === 'primary',
      'bg-black text-white': type === 'secondary',
      'cursor-not-allowed text-gray-500 bg-gray-800': processing,
    }"
    :disabled="processing"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    type: {
      type: String,
      default: "primary",
    },
    processing: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
