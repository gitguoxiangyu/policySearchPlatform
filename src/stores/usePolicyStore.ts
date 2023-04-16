import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import type {policy} from '@/common/type'

interface temp{
  value: policy
}
export const usePolicyStore = defineStore('policy', () => {
  const tempPolicy = reactive<temp>({
    value: {} as policy
  })

  function setPolicy(item: policy){
    tempPolicy.value = item
  }
  return { tempPolicy , setPolicy}
})
