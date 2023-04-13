import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const usePolicyStore = defineStore('policy', () => {
  const tempPolicy = reactive({})

  function setPolicy(item){
    tempPolicy.value = item
  }
  return { tempPolicy , setPolicy}
})
