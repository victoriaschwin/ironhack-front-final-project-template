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
      <p v-if="!data">No tienes tareas aún</p>
      <Task v-else v-for="task in tasksUncompleted" :key="task.id" :task="task"/>
    </section>

    <div class="border-l-2 border-stone-300 h-60 mt-12 "></div>
    
    <section id="done" class="mx-10 ">
      <h2 class="text-center text-xl m-7 text-lg text-slate-500">Completadas</h2>
      <Task v-if="!tasksCompleted.length" v-for="task in tasksCompleted" :key="task.id" :task="task" />

    </section>
    
  </div>

  <div class="flex justify-center">
    <button class="py-3 px-12 m-4 mb-10 bg-slate-700 text-white text-lg rounded-lg hover:text-slate-700 hover:bg-white hover:border-slate-700 hover:border" @click="handlePopUp()">Agregar</button> 
  </div>
  
</div>

<!-- Form para agregar nueva tarea -->

  <form @submit.prevent="postNewTask()" v-if="popUp" class="absolute top-14 left-56 flex flex-col my-20 mx-16 w-3/6 h-4/6 bg-white shadow-2xl items-center">
    
    <button @click="closePopUp()" class="absolute right-10 top-4 text-slate-500">x</button>
    
    <h2 class="text-xl m-7 mt-14 text-black text-3xl font-semibold">Añade una nueva tarea</h2>
    
    <div class=" flex flex-col items-start">

    <label for="title" class="text-black text-lg ">Título</label>
    <input class="p-1 rounded border-2" 
    type="text" 
    id="title" 
    v-model="title" 
    required>

    <label for="description" class="text-black text-lg">Descripción</label>
    <input class="p-1 rounded border-2" 
    type="text" 
    id="description" 
    v-model="description" 
    required>
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

const data = ref(taskStore.tasks);
const tasksUncompleted = ref([]);
const tasksCompleted = ref([]);
const title = ref('');
const description = ref('');
const errorMessage = ref(null);
const popUp = ref(false);
const date = ref(new Date().toLocaleDateString())

//Funcion para renderizado condicional del form agregar tarea.

function closePopUp(){
popUp.value = !popUp.value;
}

//Fetch Tasks
onMounted( async () => {
  try{
    await taskStore.fetchTasks(userStore.user.id); 
    
  }catch (error){
    console.log(error)
  }
})
//Filter tasks

// function filterCompleted(data){
//   tasksCompleted.value = data.filter((task) => task.is_complete === true);
//   tasksUncompleted.value = data.filter((task) => task.is_complete === false);
// }

// filterCompleted(data.value);


//POST Nueva Tarea

async function postNewTask() {

try {
      await taskStore.postTask(title.value, description.value, userStore.user.id);
      if (error)throw error;
      addNewTask.value = false;
} catch (error) {
errorMessage.value = error.message;
}
}


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