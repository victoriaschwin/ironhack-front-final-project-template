<template>
  <div class="flex justify-center w-96 g-slate-600 m-6 border rounded-tl-3xl px-10 shadow-2xl bg-white">

    <input type="checkbox" class="ml-8">

    <div class="flex flex-col content-start py-5">
      <input type="text" v-model="title" placeholder="" class="text-2xl font-semibold text-slate-800 ml-10" :disabled="editView"/>
      <input type="text" v-moldel="description" placeholder="" class="text-base text-slate-500 w-40 font-medium ml-10" :disabled="editView"/>
    </div>
  
    <div class="flex flex-col px-7 py-5">
      <button v-if="editView" @click="editTask()" class="text-lg text-slate-800 py-2">Editar</button>
      <button v-else @click="saveEditTask(task.id)" class="text-lg text-slate-800 py-2">Guardar</button>
      <button @click="deleteTask(task.id)" class="text-lg text-slate-800">Borrar</button>
    </div>
    
    <img src="../assets/task-deco.png" alt="decoration image" class="task-img">

  </div>

</template>

<script setup>
import { ref } from 'vue';
import { useTaskStore } from '../store/task';
import { useUserStore } from '../store/user';


const userStore = useUserStore();
const taskStore = useTaskStore();
const props = defineProps(["task"]);

const editView = ref(true);

// Task inputs
const title = ref('');
const description = ref('');
const errorMessage = ref(null);
const doneCheckbox = ref(null);

// V-if function
function editTask(){  
editView.value = !editView.value;
}

// Tasks functions

// PUT inputs
async function saveEditTask(id){
  try{
    await taskStore.editTask(title.value,description.value,id);
    editView.value = !editView.value;
    if(error) throw error
  }
  catch(error){
    errorMessage.value = error.message;
  }
}

// PUT complete


async function deleteTask(id){

  try{
    await taskStore.deleteTask(id);
    if(error) throw error
  } catch (error) {
errorMessage.value = error.message;
}
}

</script>

<style >
.task-img{
  width:3rem;
  height: auto;
}
</style>