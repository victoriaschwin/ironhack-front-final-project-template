# To Do Web App with Vue 3 & Pinia

# About the project

The goal of this project was to implement the information and kwnoledge of the Front-end Web Developer Bootcamp of Ironhack. In order to do this the app was built with Vue 3, Pinia and Tailwind and I used Supabase as a BBDD. 
You have a login and register page that connects with the database and use the Supabase API's authentication methods so we don't have to handle the creation of tokens and uuid. Also the CRUD is built with the Supabase API (https://supabase.com/) 

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

### Supabase

In order to replicate your own version of this To Do App you'll need to create your own project in Supabase and follow the
installation steps. The users table is created automatically by Supabase. You only need to create a table for handeling the tasks information (name, description, id, uuid, is_complete) and configure your RLS policiesif you enable them.
