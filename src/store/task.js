// /store/task.js

import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: null,
  }),
  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      this.tasks = tasks;
    },
    // Hacer POST
    async postTask(){
      const { data, error } = await supabase
      .from('tasks')
      .insert([
    { some_column: 'someValue' },
    { some_column: 'otherValue' },
  ])
    },
    // Hacer el PUT (edit)
    async editTask(){
      console.log('hola')
      const { data, error } = await supabase
      .from('tasks')
      .update({ other_column: 'otherValue' })
      .eq('some_column', 'someValue')
    },
    // Hacer el delete
    async deleteTask(){
      const { data, error } = await supabase
    .from('tasks')
    .delete()
    .eq('some_column', 'someValue')
    },
    // Hacer el PUT (cambiar entre completada y pendiente)
    async completeTask(){
        const { data, error } = await supabase
        .from('tasks')
        .update({ other_column: 'otherValue' })
        .eq('some_column', 'someValue')
    }
  },
});
