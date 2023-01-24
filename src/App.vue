<template>
  <section class="font-Lora">
    <router-view class="app-main" />
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useUserStore } from "./store/user.js";

const router = useRouter();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);


onMounted(async () => {
  try {
    await userStore.fetchUser(); // here we call fetch user
    if (!user.value) {
      // redirect them to register if the user doesn't exist
      router.push({ path: "/login" });
    } else {
      // continue to dashboard
      router.push({ path: "/" });
    }
  } catch (e) {
    console.log(e);
  }
});


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap');
</style>
