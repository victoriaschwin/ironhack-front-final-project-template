<template>
  <div class="bg-white flex-col">
  <header>
    <span>my date</span>
    <h1>Lista de Tareas</h1>
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
  <button>Add</button>
  </div>
</template>
<script setup>
import Task from '../components/Task.vue';
</script>
<style>
  
</style>