import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const name = ref('Eduardo')

  const doubleCount = computed(() => count.value * 2)

  function increment() {
    count.value += 1
  }

  function decrement() {
    // no negative numbers
    if (count.value > 0) count.value--
  }

  function reset() {
    count.value = 0
  }

  return { count, name, doubleCount, increment, decrement, reset }
})
