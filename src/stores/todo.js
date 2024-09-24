import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTodoStore = defineStore('todo', () => {
    const todos = ref(
        [
            { id: 1, text: 'Learn Vue 3', done: true },
            { id: 2, text: 'Learn Pinia', done: false },
        ]
    )

    function addTodo(text) {
        todos.value.push({
            id: Date.now(),
            text,
            done: false,
        });
    }

    function removeTodo(id) {
        todos.value = todos.value.filter(todo => todo.id !== id);
    }

    function updateTodo(id, updatedFields) {
        const index = todos.value.findIndex(todo => todo.id === id);
        if (index !== -1) {
            todos.value[index] = { ...todos.value[index], ...updatedFields };
        }
    }

    return { todos, addTodo, removeTodo, updateTodo };
})