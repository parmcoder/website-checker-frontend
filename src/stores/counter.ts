import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = ref(1)
  function increment() {
    count.value++
  }
  function doubleIncrement() {
    doubleCount.value *= 2
  }

  return { count, doubleCount, increment, doubleIncrement }
})
