<template>
  <div class="main">
    <div class="header">
      <div class="left" @click="toHome">
        问政寻策——政策检索平台
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
        <div class="login" v-if="!isLogin">
          <el-button type="text" @click="handleLogin">登录</el-button>
          <el-button type="text" @click="handleRegister">注册</el-button>
        </div>
        <div class="userInfo" v-else>
          <el-dropdown>
            <span class="el-dropdown-link">
              尊敬的{{userInfo.UserName}}用户，您好
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="toPersonInfo">个人中心</el-dropdown-item>
                <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
  <div class="replace"></div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { Search } from '@element-plus/icons-vue'
  import router from "@/router";
  import { userUserInfoStore } from '@/stores/useUserInfoStore'
  import { storeToRefs } from 'pinia';

  const searchValue = ref<string>('')
  const {logout} = userUserInfoStore()
  const {isLogin , userInfo} = storeToRefs(userUserInfoStore())

  const handleClear = ()=>{
    searchValue.value = ''
  }

  const toHome = ()=>{
    router.push({
      path: '/'
    })
  }

  const handleSearch = ()=>{
    // 搜索逻辑
    if (searchValue.value){
      router.push({
        path: '/list',
        query: {
          'keyword':searchValue.value
        }
      })
    }
  }

  // 登录注册
  const handleLogin = ()=>{
    // 登录逻辑
    console.log("login");
    router.push({
      path: '/login'
    })
  }
  const handleRegister = ()=> {
    // 注册逻辑
    console.log("register");
    router.push({
      path: '/register'
    })
  }

  // 登陆后，功能
  const toPersonInfo = ()=>{
    router.push({
      path: '/personal'
    })
  }
</script>

<style scoped lang="less">
.main{
  height: 80px;
  width: 100%;
  background-image: url('@/assets/img/background.jpg');
  position: fixed;
  top:0;
  z-index: 999;
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
      align-items: center;
      .login{
        margin-left: 30px;
        display: flex;
        flex-direction: row;
      }
      .userInfo{
        margin-left: 30px;
        width: 220px;
        font-size: small;
      }
    }
  }
}

.replace{
  height: 80px;
  margin-bottom: 10px;
}

.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>