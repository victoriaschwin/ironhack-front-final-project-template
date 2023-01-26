# To Do Web App with Vue 3 & Pinia

# About the project

The goal of this project was to implement the information and kwnoledge of the Front-end Web Developer Bootcamp of Ironhack. In order to do this the app was built with Vue 3, Pinia and Tailwind and I used Supabase as a BBDD. 
You have a login and register page that connects with the database and use the Supabase API's authentication methods so we don't have to handle the creation of tokens and uuid. Also the CRUD is built with the Supabase API (https://supabase.com/) 

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

### Supabase

In order to replicate your own version of this To Do App you'll need to create your own project in Supabase and follow the
installation steps. The users table is created automatically by Supabase. You only need to create a table for handeling the tasks information (name, description, id, uuid, is_complete) and configure your RLS policiesif you enable them.

If you need help with Supabase implementation see this tutorial (https://www.youtube.com/watch?v=3tF0fGkd4ho&t=6911s&ab_channel=TraversyMedia)


### MIT License
MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.