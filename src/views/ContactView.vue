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
        <Form class="flex flex-col" @submit="onSubmit()">
          <div class="flex flex-col">
            <label for="Name">First Name</label>
            <Field
              name="first_name"
              type="text"
              v-model="first_name"
              class="border border-jet-dark-gray rounded p-4 mb-4"
              :rules="isRequired"
            />
            <ErrorMessage
              class="text-red-700 font-bold mb-4"
              name="first_name"
            />
          </div>
          <div class="flex flex-col">
            <label for="Name">Last Name</label>
            <Field
              name="last_name"
              type="text"
              v-model="last_name"
              class="border border-jet-dark-gray rounded p-4 mb-4"
              :rules="isRequired"
            />
            <ErrorMessage
              class="text-red-700 font-bold mb-4"
              name="last_name"
            />
          </div>
          <div class="flex flex-col">
            <label for="Name">Email</label>
            <Field
              name="email"
              type="email"
              v-model="email"
              class="border border-jet-dark-gray rounded p-4 mb-4"
              :rules="validateEmail"
            />
            <ErrorMessage class="text-red-700 font-bold mb-4" name="email" />
          </div>
          <div class="flex flex-col">
            <label for="Name">Comment</label>
            <Field
              name="comment"
              type="text"
              v-model="comment"
              class="border border-jet-dark-gray rounded p-4 mb-4"
              :rules="isRequired"
            />
            <ErrorMessage class="text-red-700 font-bold mb-4" name="comment" />
          </div>
          <div class="flex flex-col">
            <AppButton type="primary" class="my-4 mx-10 w-60"
              >Contact</AppButton
            >
            form Data: {{ contactForm }}
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/AppButton.vue";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
  components: {
    AppButton,
    Form,
    Field,
    ErrorMessage,
  },
  name: "ContactView",
  data() {
    return {
      contactForm: {
        first_name: "",
        last_name: "",
        email: "",
        comment: "",
      },
    };
  },
  methods: {
    isRequired(value) {
      if (value && value.trim()) {
        return true;
      }
      return "This field is required";
    },
    clearFields() {
      this.first_name = "";
      this.last_name = "";
      this.email = "";
      this.comment = "";
    },
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return "This field is required";
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return "This field must be a valid email";
      }
      // All is good
      return true;
    },
    onSubmit() {
      this.contactForm = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        comment: this.comment,
      };
    },
  },
};
</script>
