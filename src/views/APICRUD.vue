<script setup>
import { RouterLink } from 'vue-router'
import { useApiCrudStore } from '@/stores/apicrud'
import { onMounted } from 'vue'
import PostAddModal from '@/components/PostAddModal.vue'


const apicrud = useApiCrudStore();
const { fetchData, state, removeData } = apicrud

// Fetch data when the component is mounted
onMounted(async () => {
  await fetchData()
})

const handleRemoveData = async (id) => {
  const confirmDelete = confirm('Are you sure you want to delete this post?')
  if (confirmDelete) {
    await removeData(id)
  }
  await fetchData();
}

</script>

<template>
  <div>
    <div class="flex justify-between items-center px-3 py-4">
      <h1 class="text-2xl font-bold">API CRUD</h1>
      <button popovertarget="postModal"
        class="px-4 py-2 bg-gradient-to-r from-[#56B259] to-[#FFDA5B] text-white rounded font-semibold capitalize">
        add post
      </button>
      <PostAddModal />
    </div>


    <!-- Loading state -->
    <div v-if="state.loading" class="text-2xl text-center font-semibold">Loading...</div>

    <!-- Error state -->
    <div v-else-if="state.error" class="text-red-500">
      Error: {{ state.error }}
    </div>

    <!-- Data display -->
    <div v-else class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 ">
      <article v-for="post in state.data" :key="post.id" class="shadow-md p-4 rounded-md space-y-2">
        <h2 class="text-lg font-semibold">{{ post.title }}</h2>
        <p>{{ post.content }}</p>
        <div class="flex gap-3">
          <RouterLink :to="`apicrud/${post.id}/update`"
            class="bg-gradient-to-r from-[#56B259] to-[#FFDA5B] hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center text-white">
            Edit post
          </RouterLink>
          <button @click="handleRemoveData(post.id)"
            class="px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg font-semibold capitalize">
            delete
          </button>

        </div>
      </article>

    </div>
  </div>
</template>
