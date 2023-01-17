<template >
  <div class="flex my-20 mx-16 w-4/6 h-96 bg-white">
    <div class="flex-col w-6/12">
      <div>
        <h1 class="text-center text-xl m-7">Crea tu cuenta</h1>
      </div>
      <form action="" method="post" class="flex-col my-5 mx-10">
        <div class="">
          <label for="name">Nombre</label>
          <input type="text" v-model="name" class="border-2 border-inherit rounded-md p-1 m-2 text-slate-500" />
        </div>
        <div><label for="email">E-mail</label>
          <input type="email" v-model="email" class="border-2 border-inherit rounded-md p-1 m-2 text-slate-500" />
        </div>
        <div><label for="password">Contraseña</label>
          <input type="password" v-model="password" class="border-2 border-inherit rounded-md p-1 m-2 text-slate-500" />
          <p class="text-slate-500 m-1"> Debe incluir mínimo 8 caracteres incluyendo minúscula, mayúscula y un número.</p>
        </div>
        <button type="submit" class="p-3 rounded-md w-40 m-2 bg-slate-900 text-white">Enviar</button>
      </form>
    </div>
    <div class="background-img p-2">
      <img
        src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvcmslMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        alt="background image of a desk" />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const password = ref('');

</script>
<style>
.background-img {
  width: 50%;
  height: 100%;
}

body {
  background-color: rgb(100 116 139);
}

img {
  height: 100%;
  object-fit: cover;
}
</style>
