<script setup>
import { useApiCrudStore } from '@/stores/apicrud'
const apicrud = useApiCrudStore();
const { addData, fetchData } = apicrud


const handleAddPost = async (e) => {
    try {
        const form = e.target
        const data = Object.fromEntries(new FormData(form))
        console.log(data)
        await addData(data)
        form.reset()
    } catch (error) {
        console.error(error)
    }finally{
        await fetchData();
    }
}
</script>

<template>
    <div id="postModal" popover class="">
        <div class="flex justify-end px-9">
            <div class="text-4xl cursor-pointer">&times;</div>
        </div>
        <div class="flex justify-center items-center">
            <div class="bg-white p-8 rounded-md shadow-md w-96">
                <h2 class="text-2xl font-bold">Add Post</h2>
                <form @submit.prevent="handleAddPost" class="mt-4">
                    <input placeholder="Title" name="title" class="border p-2 rounded w-full focus:outline-[#56B259]" required />
                    <textarea placeholder="Content" name="content" class="border p-2 rounded w-full mt-2 focus:outline-[#56B259]"
                        required></textarea>
                    <button type="submit"
                        class="px-4 py-2 bg-gradient-to-r from-[#56B259] to-[#FFDA5B] text-white rounded font-semibold capitalize mt-4">Add
                        Post</button>
                </form>
            </div>
        </div>

    </div>
</template>