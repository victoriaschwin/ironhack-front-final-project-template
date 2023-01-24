<template >
  <div>
    <div class="flex mt-24 ml-32 w-5/6 h-full bg-white shadow-2xl">
      
      <!-- Error Message -->

    <div v-if="errorMessage" class="absolute bottom-32 left-80">
      <p class="p-1 text-slate-400">{{ errorMessage }}</p>
    </div>

    <!-- Login Form -->
      <div class="flex-col w-6/12">

        <div>
          <h1 class="text-center text-3xl m-10">Login</h1>
        </div>

        <form @submit.prevent="login" class="flex-col ml-28 mx-10">

          <div>
            <label for="email" class="text-xl mr-0.5">E-mail</label>
            <input class="border-2 border-inherit rounded-md p-1 m-2 ml-14 text-slate-500 w-50"
            type="email" 
            id="email" 
            v-model="email" 
            required/>
          </div>

          <div>
            <label for="password" class="text-xl">Contraseña</label>
            <input class="border-2 border-inherit rounded-md p-1 m-2 ml-3 text-slate-500 w-50"
            type="password" 
            id="password" 
            v-model="password" 
            required/>
          </div>

          <button type="submit" class="ml-24 mt-4 p-3 rounded-md w-40 m-2 bg-slate-900 text-white">Enviar</button>

        </form>
        
        <div class="flex mt-4">
          <p class="ml-24 p-1 pl-2">¿No tienes una cuenta?</p><router-link :to="{ path: '/auth'}" class="p-1 text-slate-900  hover:font-semibold"><span>Registrate</span></router-link>
        </div>
    </div>

      <div class="background-img p-2">
        <img
          src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvcmslMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt="background image of a desk" />
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { supabase } from '../supabase';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const password = ref('');
const errorMessage = ref(null);

const login = async () => {
  try{
    const {error} = await supabase.auth.signIn({
      email : email.value,
      password : password.value
    });
    if(error) throw error;
    router.push({path: '/'})
  }
  catch(error){
    errorMessage.value = `Error: ${error.message}`;
  }
}
</script>

<style >

</style>