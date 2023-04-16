import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const userUserInfoStore = defineStore('userInfo', () => {
  const isLogin = ref<boolean>(false)
  const userInfo = ref({})
  function userLogin(){
    isLogin.value = true
  }
  function logout(){
    isLogin.value = false
  }

  function setUserInfo(info: object){
    userInfo.value = {...info}
  }
  return { isLogin , userInfo , userLogin ,logout , setUserInfo}
})
