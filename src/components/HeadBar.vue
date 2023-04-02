<template>
  <div class="main">
    <div class="header">
      <div class="left">
        政策检索平台
      </div>
      <div class="right">
        <el-input
          placeholder="请输入搜索内容"
          :prefix-icon="Search"
          clearable
          
          @clear="handleClear"
          v-model="searchValue"
          @keyup.enter.native="handleSearch"
        />
        <div class="login">
          <el-button type="text" @click="handleLogin">登录</el-button>
          <el-button type="text" @click="handleRegister">注册</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { Search } from '@element-plus/icons-vue'
  import router from "@/src/router";

  const searchValue = ref<string>('')

  const handleClear = ()=>{
    searchValue.value = ''
  }

  const handleSearch = ()=>{
    // 搜索逻辑
  }
  const handleLogin = ()=>{
    // 登录逻辑
    router.replace('/login')
  }
  const handleRegister = ()=> {
    // 注册逻辑
  }

</script>

<style scoped lang="less">
.main{
  height: 80px;
  background-image: url('@/src/assets/img/background.jpg');
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 auto;
    margin: auto;
    width: 80%;
    min-width: 1100px;
    
    .left {
      height: 100%;
      font-size: 30px;
      font-weight: bold;
      line-height: 80px;
    }

    .right {
      display: flex;
      .login{
        margin-left: 30px;
        display: flex;
        flex-direction: row;
      }
    }
  }
}
</style>