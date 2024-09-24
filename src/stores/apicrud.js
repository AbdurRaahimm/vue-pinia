import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useApiCrudStore = defineStore('apiCrud', () => {
    const state = reactive({
        data: [],
        loading: false,
        error: null,
    })

    // Fetch Data
    async function fetchData() {
        state.loading = true
        state.error = null
        try {
            const response = await fetch('http://localhost:3001/posts')
            if (!response.ok) {
                throw new Error(`${response.status} - Server responded with error`)
            }
            state.data = await response.json()
        } catch (error) {
            state.error = error.message
        } finally {
            state.loading = false
        }
    }

    // Add Data
    async function addData(newItem) {
        try {
            const response = await fetch('http://localhost:3001/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newItem),
            })
            if (!response.ok) {
                throw new Error(`${response.status} - Server responded with error`)
            }
            state.data.push(await response.json())
        } catch (error) {
            console.log(error)
        }
    }

    // Remove Data
    async function removeData(id) {
       try {
        const response = await fetch(`http://localhost:3001/posts/${id}`, {
            method: 'DELETE',
        })
        if (!response.ok) {
            throw new Error(`${response.status} - Server responded with error`)
        }
       } catch (error) {
           console.log(error)   
       }
    }

    // Update Data
    async function updateData(id, updatedFields) {
        try {
            const response = await fetch(`http://localhost:3001/posts/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedFields),
            })
            if (!response.ok) {
                throw new Error(`${response.status} - Server responded with error`)
            }
            const updatedItem = await response.json()
            const index = state.data.findIndex((item) => item.id === id)
            state.data[index] = updatedItem          
        }
        catch (error) {
            console.log(error)
        }
    }

    return {
        state,
        fetchData,
        addData,
        removeData,
        updateData,
    }
})
