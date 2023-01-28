<template >
  <div class="flex mt-24 ml-32 w-5/6 h-full bg-white shadow-2xl">
    
    <!-- Error Message -->

    <div v-if="errorMessage" class="absolute bottom-32 left-64">
      <p class="p-1 text-slate-400">{{ errorMessage }}</p>
    </div>

    <!-- Formulario Crear Cuenta -->
    <div class="flex-col w-6/12">

      <div>
        <h1 class="text-center text-3xl mt-10 mb-6">Crea tu cuenta</h1>
      </div>

      <form @submit.prevent="register" class="flex-col ml-28 mx-10">

        <div>
          <label for="name" class="text-xl mr-8">Nombre</label>
          <input class="border-2 border-inherit rounded-md p-1 m-2 text-slate-500 w-50"
          type="text" 
          id="name" 
          v-model="name" 
          required />
        </div>

        <div>
          <label for="email" class="text-xl mr-12">E-mail</label>
          <input class="border-2 border-inherit rounded-md p-1 m-2 text-slate-500 w-50" 
          type="email" 
          id="email" v-model="email" 
          required/>
        </div>

        <div>
          <label for="password" class="text-xl mr-0.5">Contraseña</label>
          <input class="border-2 border-inherit rounded-md p-1 m-2 text-slate-500 w-50"
          type="password" 
          id="password" 
          v-model="password"  
          required />
          <p class="text-slate-500 mt-4 mb-4 text-xs"> Mínimo 8 carácteres incluyendo minúscula, mayúscula y un número.</p>
        </div>

        <button type="submit" class="p-3 rounded-md w-40 m-2 ml-24 bg-slate-900 text-white">Enviar</button>

      </form>
    </div>

    <div class="background-img p-2">
      <img
        src="https://wallpaperaccess.com/full/5673918.jpg"
        alt="background image of a desk" />
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { supabase } from '../supabase';
import { useRouter } from 'vue-router';

const router = useRouter();
// Form
const name = ref('');
const email = ref('');
const password = ref('');
const errorMessage = ref(null);

const passwordValidation = new RegExp("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"); 

const register = async () => {

  try{
    const {error} = await supabase.auth.signUp({
      email: email.value,
      password: password.value
    });
    if (error) throw error;
    router.push({ path: "/auth"});

    return
  }
  catch(error){
    errorMessage.value = error.message;
  }
}


</script>

<style>
.background-img {
  width: 50%;
  height: 100%;
  margin: 1.5rem 1.5rem ;
  margin-left: 0;
}

body {
  background-color: rgb(100 116 139);
}

img {
  height: 100%;
  object-fit: cover;
}
</style>
