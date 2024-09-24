<script setup>
import { ref } from 'vue';
import { useTodoStore } from '@/stores/todo';

const todo = useTodoStore();

const { addTodo, removeTodo, updateTodo } = todo;
const newTodoText = ref('');

// Update todo item when checkbox is clicked or text is modified
const toggleDone = (id, done) => {
    updateTodo(id, { done });
};

const editTodoText = (id, text) => {
    updateTodo(id, { text });
};

// console.log(todo.todos);

</script>


<template>
    <div class="grid place-items-center mt-32 space-y-3">
        <h1 class="text-2xl font-bold">Todo App</h1>
        <!-- Form to add new todo -->
        <form @submit.prevent="addTodo(newTodoText)" class="mt-4">
            <input v-model="newTodoText" placeholder="Add new todo" name="todo" class="border p-2 rounded-s focus:outline-[#56B259]" required />
            <button type="submit"
                class="px-4 py-2 bg-gradient-to-r from-[#56B259] to-[#FFDA5B] text-white rounded-e font-semibold capitalize">Add
                todo</button>
        </form>
        <div class="">
            <div v-for="item in todo.todos" :key="item.id" class="flex gap-3 items-center mt-3 ">
                <!-- Checkbox to mark as done -->
                <!-- <input v-model="item.done" @change="toggleDone(item.id, item.done)" type="checkbox" /> -->

                <!-- Editable text field for todo text -->
                <!-- <input v-model="item.text" @blur="editTodoText(item.id, item.text)" :class="{ 'line-through': item.done }" class="text-lg" /> -->

                <!-- Delete button -->
                <!-- <button @click="removeTodo(item.id)" class="px-2 py-1 bg-red-500 text-white rounded">Delete</button> -->

                <div class="grid grid-cols-[1fr_24px] items-center gap-6">
                    <label class="peer grid grid-cols-[auto_1fr] items-center gap-3 rounded-md px-2 hover:bg-slate-100">
                        <input v-model="item.done" @change="toggleDone(item.id, item.done)" type="checkbox" class="peer size-3.5 appearance-none rounded-sm border border-slate-300 accent-[#56B259] dark:accent-[#56B259] checked:appearance-auto">
                        <!-- <input v-model="item.text" @blur="editTodoText(item.id, item.text)" class=" text-slate-700 peer-checked:text-slate-400 peer-checked:line-through" /> -->
                         <!-- if peer checked edit is disaled--> 
                        <input v-model="item.text" @blur="editTodoText(item.id, item.text)" :disabled="item.done" class="px-2 text-slate-700 peer-checked:text-slate-400 peer-checked:line-through" />
                   
                    </label>
                    <div @click="removeTodo(item.id)"
                        class="size-[26px] rounded-md p-1 hover:bg-red-50 hover:text-red-500 block peer-has-[:checked]:hidden cursor-pointer font-semibold">
                        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>
