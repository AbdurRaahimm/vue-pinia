<script setup>
import {storeToRefs} from 'pinia';
import {useCounterStore} from '@/stores/counter';


const store = useCounterStore()
const {count, } = storeToRefs(store);
const {increment, decrement, reset} = store;
</script>

<template>
  <div class="flex flex-col justify-center items-center mt-36 space-y-6">
    <h1 class="text-2xl font-bold capitalize">counter app</h1>
    <h2 class="text-xl">Count: <span class="font-bold">{{ count }}</span></h2>
    <div class="flex gap-3">
      <button @click="increment" class="px-3 py-2 bg-gradient-to-r from-[#56B259] to-[#FFDA5B] text-white rounded">Increment</button>
      <button @click="decrement" class="px-3 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded">Decrement</button>
      <button @click="reset" class="px-2 py-1 bg-red-500 text-white rounded capitalize">reset</button>
    </div>

  </div>
</template>
