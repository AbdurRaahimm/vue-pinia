<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useApiCrudStore } from '@/stores/apicrud'

const apicrud = useApiCrudStore()
const { updateData, state, fetchData } = apicrud

const route = useRoute()
const router = useRouter()
const id = route.params.id

// Refs for form fields
const title = ref('')
const content = ref('')

// Fetch data on mount
onMounted(async () => {
    await fetchData();
    // Find the post by id and populate the form fields
    const post = state.data.find(post => post.id == id)
    if (post) {
        title.value = post.title
        content.value = post.content // Assuming "content" is the "body" field in the API
    } else {
        console.error('Post not found')
    }
    // console.log(post)
})


// Update post
const handleUpdatePost = async (e) => {
    try {
        const form = e.target
        const data = {
            title: title.value,
            content: content.value, // Assuming the "content" field is actually "body"
        }
        await updateData(id, data)
        form.reset()
    } catch (error) {
        console.error(error)
    } finally {
        // Navigate back to the home page after update
        router.push('/apicrud')
    }
}
</script>

<template>
    <div class="flex justify-center items-center h-screen">
        <div class="bg-white p-8 rounded-md shadow-md w-96">
            <h2 class="text-2xl font-bold">Update Post</h2>
            <form @submit.prevent="handleUpdatePost" class="mt-4">
                <input v-model="title" placeholder="Title" name="title" class="border p-2 rounded w-full focus:outline-[#56B259]" required />
                <textarea v-model="content" placeholder="Content" name="content" class="border p-2 rounded w-full mt-2 focus:outline-[#56B259]" required></textarea>
                <button type="submit" class="px-4 py-2 bg-gradient-to-r from-[#56B259] to-[#FFDA5B] text-white rounded font-semibold capitalize mt-4">Update Post</button>
            </form>
        </div>
    </div>

</template>