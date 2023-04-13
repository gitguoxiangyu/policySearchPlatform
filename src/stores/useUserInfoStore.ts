import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const userUserInfoStore = defineStore('userInfo', () => {
  const isLogin = ref<boolean>(true)
  const userInfo = reactive({})
  function userLogin(){
    isLogin.value = true
  }
  function logout(){
    console.log('logout')
    isLogin.value = false
  }
  return { isLogin , userInfo , userLogin ,logout}
})
