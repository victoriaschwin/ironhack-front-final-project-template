<template >
  <div>
    <div class="flex my-20 mx-16 w-4/6 h-96 bg-white">
      
      <!-- Error Message -->

    <div v-if="errorMessage">
      <p>{{ errorMessage }}</p>
    </div>

    <!-- Login Form -->
      <div class="flex-col w-6/12">

        <div>
          <h1 class="text-center text-xl m-7">Login</h1>
        </div>

        <form @submit.prevent="login" class="flex-col my-5 mx-10">

          <div>
            <label for="email">E-mail</label>
            <input class="border-2 border-inherit rounded-md p-1 m-2 text-slate-500"
            type="email" 
            id="email" 
            v-model="email" 
            required/>
          </div>

          <div>
            <label for="password">Contraseña</label>
            <input class="border-2 border-inherit rounded-md p-1 m-2 text-slate-500"
            type="password" 
            id="password" 
            v-model="password" 
            required/>
          </div>

          <button type="submit" class="p-3 rounded-md w-40 m-2 bg-slate-900 text-white">Enviar</button>

        </form>
        <p>¿No tienes una cuenta?</p><router-link :to="{ path: '/auth'}"><span>Registrate</span></router-link>
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