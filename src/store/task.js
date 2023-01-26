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

    // POST

    async postTask(title, description, user) {
      try {
        const { error } = await supabase
          .from("tasks")
          .insert(
            { title: title,
              description: description,
              is_complete: false,
              user_id: user },
          );
          this.fetchTasks();
      } catch (error) {
        throw error.message;
      }
    },

    // PUT (edit)

    async editTask(title, description, id) {
      try{
        const { error } = await supabase
        .from("tasks")
        .update({ title: title }, { description: description })
        .match({ id: id });
        this.fetchTasks(); 
      }catch(error){
        throw error.message
      }
    },

    // DELETE

    async deleteTask(id) {
      try{
        const { error } = await supabase
        .from("tasks")
        .delete()
        .match({ id: id });
        this.fetchTasks();
      }catch(error){
        throw error.message
      }
    },

    // PUT (cambiar entre completada y pendiente)

    async completeTask(id) {
      try{
        const { error } = await supabase
        .from("tasks")
        .update({ is_complete: true })
        .match({ id: id });
        this.fetchTasks();
      }catch{
        throw error.message
      }
    },
  },
});
