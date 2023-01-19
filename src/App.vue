<template>
  <section class="font-Lora">
    <router-view class="app-main" />
  </section>
  <!-- <form>
    <label for="email">Email</label>
    <input type="email" v-model="email" required>
    <label for="password">Password</label>
    <input type="password" v-model="password" required>
    <button type="submit">Send</button>
  </form> -->
</template>

<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useUserStore } from "./store/user.js";
import { ref } from "vue";

const router = useRouter();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);

// const email = ref('');
// const password = ref('');

// onMounted(async () => {
//   try {
//     await userStore.fetchUser(); // here we call fetch user
//     if (!user.value) {
//       // redirect them to register if the user doesn't exist
//       router.push({ path: "/auth" });
//     } else {
//       // continue to dashboard
//       router.push({ path: "/to-do" });
//     }
//   } catch (e) {
//     console.log(e);
//   }
// });


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap');
</style>
