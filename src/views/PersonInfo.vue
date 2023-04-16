<template>
  <div class="mainContent">
    <el-form :model="form" label-width="120px" label-position="left">
      <el-form-item label="用户名">
        <el-input v-model="form.username" disabled></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="政策倾向">
        <el-tag
          v-for="tag in form.tendency"
          :key="tag"
          closable
          @close="close(tag)"
        >
          {{ tag }}
        </el-tag>
        <el-input
          v-if="inputVisible"
          ref="InputRef"
          v-model="inputValue"
          size="small"
          @keyup.enter="handleInputConfirm"
          @blur="handleInputConfirm"
        />
        <el-button v-else class="button-new-tag ml-1" size="small" @click="showInput">
          + New Tag
        </el-button>
      </el-form-item>
      <!-- 编辑和保存按钮 -->
      <el-button type="primary" @click="saveInfo" >保存</el-button>
      <el-button type="info" @click="cancelSave">取消</el-button>
    </el-form>
  </div>
</template>

<script setup lang='ts'>
import router from '@/router';
import { reactive, ref } from 'vue'
import { userUserInfoStore } from '@/stores/useUserInfoStore'
import { resetTendency , setEmail} from '@/api/user/user'

const form = reactive({
  username: '',
  email: '',
  tendency: []
})
const {userInfo} = userUserInfoStore()
form.username =  userInfo.UserName
form.email =  userInfo.email
form.tendency =  userInfo.tendency

const Remove = JSON.parse(JSON.stringify(form.tendency))

let inputVisible = ref(false)
const inputValue = ref('')
const showInput = () => {
  inputVisible.value = true
}
const handleInputConfirm = () => {
  if (inputValue.value) {
    form.tendency.push(inputValue.value)
  }
  inputVisible.value = false
  inputValue.value = ''
}
const close = (val)=>{
  form.tendency.splice(form.tendency.indexOf(val), 1)
  
}

function saveInfo() {
  if(form.email != ''){
    setEmail(form.email)
  }
  if(form.tendency.length != 0){
    let data = {
      Removed: Remove,
      Added: form.tendency
    }
    resetTendency(data)
  }
  router.push({
    path: '/'
  })
}

function cancelSave(){
  router.push({
    path: '/'
  })
}


</script>

<style scoped>
.mainContent{
  background-color: white;
  min-width: 760px;
  max-width: 960px;
  width: 70%;
  margin: 10px auto;
  padding: 10px 20px;
}

.edit-btn {
  background-color: #409EFF;
  color: #fff;
  border-radius: 4px;
  padding: 8px 20px;
}

.cancel-btn {
  background-color: #C0C4CC;
  color: #fff;
  border-radius: 4px;
  padding: 8px 20px;
}

.save-btn {
  background-color: #67C23A;
  color: #fff;
  border-radius: 4px;
  padding: 8px 20px;
}

</style>