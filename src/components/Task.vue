<template>
  <div class="flex justify-center w-96 g-slate-600 m-6 border rounded-tl-3xl px-10 shadow-2xl bg-white">

    <input @click="taskCompleted(props.task.id)" type="checkbox" class="ml-8 checked:bg-slate-700" :checked="completed" >

    <div class="flex flex-col content-start py-4">
      <input type="text" v-model="title" :placeholder="title" class="text-2xl font-semibold text-slate-800 ml-8 w-36 my-2 bg-white" :disabled="editView"/>
      <input type="text" v-moldel="description" :placeholder="description" class="text-base text-slate-500 w-40 font-medium ml-8 bg-white" :disabled="editView"/>
    </div>
  
    <div class="flex flex-col px-7 py-5">
      <button v-if="editView" @click="editTask()" class="text-lg text-slate-800 py-2">Editar</button>
      <button v-else @click="saveEditTask(props.task.id)" class="text-lg text-slate-800 py-2">Guardar</button>
      <button @click="deleteTask(props.task.id), $emit('getData')" class="text-lg text-slate-800">Borrar</button>
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
const emits = defineEmits(['handleChange'])

const editView = ref(true);

// Task inputs
const title = ref(props.task.title);
const description = ref(props.task.description);
const errorMessage = ref(null);
const completed = ref(props.task.is_complete);

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
async function taskCompleted(id){
  try{
    await taskStore.completeTask(id);
    emits('handleChange');
    if(error) throw error;
  }
  catch (error){
    errorMessage.value = error.message;
  }
}

async function deleteTask(id){

  try{
    await taskStore.deleteTask(id);
    emits('handleChange');
    if(error) throw error;
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