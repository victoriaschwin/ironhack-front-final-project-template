<template>
  <div class="flex w-4/5 g-slate-600 m-6 border rounded-tl-3xl px-10 shadow-2xl">
    <input type="checkbox">
    <div class="flex-col p-5">
      <p class="text-2xl font-semibold text-slate-800 px-5">Task name</p>
      <span class="text-lg text-slate-500 px-5 font-semibold">Description</span>
    </div>

    <button class="text-lg text-slate-800">Editar</button>
    <img src="../assets/task-deco.png" alt="decoration image" class="task-img">
  </div>
</template>
<script setup>

</script>
<style >
.task-img{
  width:3rem;
  height: auto;
}
</style>