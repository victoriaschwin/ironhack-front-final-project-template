<template>
  <div class="bg-white flex-col m-5 background-to-do shadow-2xl">

  <header>

    <div class="flex justify-between">
      <span class="text-s text-slate-500 p-3 ml-4 mt-6"> {{ date }} </span>

      <div @click="logout()">
        <img src="https://picaflor-azul.com/images/power-off1.png" alt="log out image" 
        class="logout mt-8 mr-16 hover:cursor-pointer">
      </div>

    </div>
    <h1 class="text-4xl font-semibold p-3 ml-32 mb-8">Lista de Tareas</h1>
    
  </header>

  <div class="flex my-5 mx-10 justify-center">
    
    <section id="to-do" class="mx-10 ">
      <h2 class="text-center text-xl m-7 text-lg text-slate-500">Pendientes</h2>
      <p v-if="tasksUncompleted.length == 0" class="text-base mt-60">No tienes tareas aún</p>
      <Task v-for="task in tasksUncompleted" :key="task.id" :task="task" @handle-change="handleChange" />
    </section>

    <div class="border-l-2 border-stone-300 h-screen mt-12 "></div>

    <section id="done" class="mx-10 ">
      <h2 class="text-center text-xl m-7 text-lg text-slate-500">Completadas</h2>
      <Task v-if="!tasksCompleted.value" v-for="task in tasksCompleted" :key="task.id" :task="task" @handle-change="handleChange"/>

    </section>
    
  </div>

  <div class="flex justify-center">
    <button class="py-3 px-12 m-4 mb-10 bg-slate-700 text-white text-lg rounded-lg hover:text-slate-700 hover:bg-white hover:border-slate-700 hover:border" 
    @click="closePopUp()">Agregar</button> 
  </div>
  
</div>

<!-- Form para agregar nueva tarea -->

  <form @submit.prevent="postNewTask()" v-if="popUp" class="absolute top-14 left-56 flex flex-col my-20 mx-16 w-3/6 h-4/6 bg-white shadow-2xl items-center">
    
    <button @click="closePopUp()" class="absolute right-10 top-4 text-slate-500">x</button>
    
    <h2 class="text-xl mb-2 mt-8 text-black text-3xl font-semibold">Añade una nueva tarea</h2>
    
    <div class=" flex flex-col items-start">

    <label for="title" class="text-black text-xl p-1">Título</label>
    <input class="p-1 rounded border-2 w-80 h-10" 
    type="text" 
    id="title" 
    v-model="title" 
    required>

    <label for="description" class="text-black text-xl p-1">Descripción</label>
    <textarea class="p-1 rounded border-2 w-80 h-32" 
    type="text" 
    id="description" 
    v-model="description" 
    required></textarea>
</div>

    <button type="submit" class="py-3 px-12 m-4 bg-slate-700 text-white text-lg rounded-lg hover:text-slate-700 hover:bg-white hover:border-slate-700 hover:border ">Enviar</button>

  </form>

</template>

<script setup>
import Task from '../components/Task.vue';
import { ref, onMounted } from 'vue';
import { useUserStore } from '../store/user';
import { useTaskStore } from '../store/task';
import router from '../router';

const userStore = useUserStore();
const taskStore = useTaskStore();

// Task data
const data = ref([]);
const tasksUncompleted = ref([]);
const tasksCompleted = ref([]);

// Form inputs
const title = ref('');
const description = ref('');
const errorMessage = ref(null);

const popUp = ref(false);
const date = ref(new Date().toLocaleDateString())

//V-if function.

function closePopUp(){
popUp.value = !popUp.value;
}

async function getData(){
  try{
    await taskStore.fetchTasks(userStore.user.id); 
    data.value = taskStore.tasks;
    tasksCompleted.value = taskStore.tasks.filter((task) => task.is_complete);
    tasksUncompleted.value = taskStore.tasks.filter((task) => task.is_complete == false);
  } catch (error){
    console.log('Error',error)
  }
}

const handleChange = async () =>{
  await getData();
}

//Fetch Tasks from Store
onMounted( async () => {
  try{
    
    getData();
    
  }catch (error){
    console.log(error)
  }
})

//POST Nueva Tarea

async function postNewTask() {

try {
      await taskStore.postTask(title.value, description.value, userStore.user.id);
      popUp.value = !popUp.value;
      getData();
      if (error)throw error;
      
} catch (error) {
errorMessage.value = error.message;
}
}

//User 

const logout = async () => {
  await userStore.signOut();
  router.push( { path: "/login" } )
}

</script>

<style>
  .logout{
    width: 2.3rem;
    height: auto;
    mix-blend-mode: multiply;
  }
  .background-to-do{
    background-image: url('../assets/to-do-bckgrnd.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
</style>