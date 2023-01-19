<template >
  <div class="flex my-20 mx-16 w-4/6 h-96 bg-white">
    <!-- Error Message -->

    <div v-if="errorMessage">
      <p>{{ errorMessage }}</p>
    </div>

    <!-- Formulario Crear Cuenta -->
    <div class="flex-col w-6/12">

      <div>
        <h1 class="text-center text-xl m-7">Crea tu cuenta</h1>
      </div>

      <form @submit.prevent="register" class="flex-col my-5 mx-10">

        <div class="">
          <label for="name">Nombre</label>
          <input class="border-2 border-inherit rounded-md p-1 m-2 text-slate-500"
          type="text" 
          id="name" 
          v-model="name" 
          required />
        </div>

        <div>
          <label for="email">E-mail</label>
          <input class="border-2 border-inherit rounded-md p-1 m-2 text-slate-500" 
          type="email" 
          id="email" v-model="email" 
          required/>
        </div>

        <div>
          <label for="password">Contraseña</label>
          <input class="border-2 border-inherit rounded-md p-1 m-2 text-slate-500"
          type="password" 
          id="password" 
          v-model="password"  
          required />
          <p class="text-slate-500 m-1"> Debe incluir mínimo 8 caracteres incluyendo minúscula, mayúscula y un número.</p>
        </div>

        <div>
          <label for="passwordVer">Verifica Contraseña</label>
          <input class="border-2 border-inherit rounded-md p-1 m-2 text-slate-500"
          type="password" 
          id="passwordVer" 
          v-model="passwordVer"  
          required />
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
import { supabase } from '../supabase';
import { useRouter } from 'vue-router';

const router = useRouter();
const name = ref('');
const email = ref('');
const password = ref('');
const passwordVer = ref('');

const errorMessage = ref(null);
// const passwordValidation = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"

const register = async () => {
 if (password.value === passwordVer.value){
  try{
    const{error} = await supabase.auth.signUp({
      email: email.value,
      password: password.value
    });
    if (error) throw error;
    router.push({ path: "/to-do"});
  }
  catch(error){
    errorMessage.value = error.message;
  }
 }else{
  errorMessage.value = "Tu contraseña no cumple los requisitos"
 }
}

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
