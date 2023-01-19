<template>
  <div class="bg-white flex-col m-5">

  <header>

    <div class="flex justify-between">
      <span class="text-xs text-slate-500 p-3 ml-8"> {{ new Date().toLocaleString() }}</span>

      <div>
        <img src="https://picaflor-azul.com/images/power-off1.png" alt="log out image" class="logout mt-2 mr-16">
      </div>

    </div>
    <h1 class="text-2xl font-semibold p-3 ml-8 mb-8">Lista de Tareas</h1>
    
  </header>

  <div class="flex my-5 mx-10 justify-center">
    
    <section id="to-do" class="mx-10 border-2 border-slate-100 ">
      <h2 class="text-center text-xl m-7 text-lg text-slate-500">Pendientes</h2>
      <Task />
    </section>

    <section id="done" class="mx-10 border-2 border-slate-100 ">
      <h2 class="text-center text-xl m-7 text-lg text-slate-500">Completadas</h2>
      <Task />
    </section>
    
  </div>

  <div class="flex justify-center">
    <button class="p-4 m-4 bg-slate-700 text-white rounded-lg">Agregar</button> 
  </div>
  
</div>

<!-- Form para agregar nueva tarea -->

  <form class="flex flex-col my-20 mx-16 w-4/6 h-96 bg-orange-500 items-center">

    <h2 class="text-xl m-7 mt-20 text-white text-3xl font-semibold">Añade una nueva tarea</h2>

    <div class=" flex flex-col items-start">

    <label for="title" class="text-white text-lg">Titulo</label>
    <input class="p-1 rounded" 
    type="text" 
    id="title" 
    v-model="title" 
    required>

    <label for="description" class="text-white text-lg">Descripción</label>
    <input class="p-1 rounded" 
    type="text" 
    id="description" 
    v-model="description" 
    required>

</div>

    <button @submit.prevent="postTask()" type="submit" class="p-4 m-4 bg-slate-700 text-white rounded-lg">Enviar</button>

  </form>

</template>

<script setup>
import Task from '../components/Task.vue';
import { ref } from 'vue';



//Funcion para renderizado condicional del form agregar tarea.




</script>

<style>
  .logout{
    width: 2rem;
    height: auto;
  }
</style>