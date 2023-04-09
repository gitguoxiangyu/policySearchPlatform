<template>
  <div>
    <div class="mainContent">
      <div class="search">
        <el-input placeholder="请输入搜索内容" v-model="searchValue" class="search-input" :prefix-icon="Search" size="large"></el-input>
        <el-button @click="search" class="search-button" size="large" type="primary">搜索</el-button>
        <el-button @click="toDetailSearch" class="detail-search-button" size="large" type="primary">高级搜索</el-button>
      </div>
      
      <div class="policy-recommendation">
        <h2>最新政策推荐</h2>
        <div class="policy-recommendation-container">
          <ul class="policy-recommendation-list">
            <li v-for="(policy, index) in policies" :key="index">
              <!-- <router-link :to="{ name: 'policy', params: { id: policy.id } }">{{ policy.title }}</router-link> -->
              <p>{{ policy.summary }}</p>
            </li>
          </ul>
          <div class="policy-recommendation-images">
            <img src="./assets/policy-image-1.jpg" alt="">
            <img src="./assets/policy-image-2.jpg" alt="">
            <img src="./assets/policy-image-3.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import router from '@/src/router/index'
import { Search } from '@element-plus/icons-vue'

// 搜索框逻辑
const searchValue = ref('')

function search() {
  router.push({
    path: '/list'
  })
}

function toDetailSearch(){
  router.push({
    path: '/search'
  })
}

const policies = [
  { id: 1, title: '政策标题1', summary: '政策概要信息1' },
  { id: 2, title: '政策标题2', summary: '政策概要信息2' },
  { id: 3, title: '政策标题3', summary: '政策概要信息3' },
  { id: 4, title: '政策标题4', summary: '政策概要信息4' },
  { id: 5, title: '政策标题5', summary: '政策概要信息5' }
]
</script>

<style scoped>
.mainContent{
  background-color: white;
  width: 70%;
  margin: 10px auto;
  padding: 10px 20px;
}

.menu {
  line-height: 60px;
}

.search {
  margin-top: 20px;
  display:flex;
  justify-content:center;
}

.search-input {
  width:400px;
}

.policy-recommendation {
  margin-top: 20px;
}

.policy-recommendation-container {
  display:flex;
}

.policy-recommendation-list {
  width:50%;
}

.policy-recommendation-images {
  width:50%;
}

.policy-recommendation-images img {
  width:100%;
}

.menu .el-submenu__title {
  display:block;
}

.policy-recommendation h2 {
    font-size:24px;
    font-weight:bold;
    margin-bottom:20px;
    text-align:center;
}

.policy-recommendation-list li {
    margin-bottom:20px;
    border-bottom:solid #ccc thin;
    padding-bottom:20px;
}

.policy-recommendation-list li:last-child {
    border-bottom:none;
}

.policy-recommendation-list li a {
    font-size:18px;
    font-weight:bold;
    color:#333;
}

.policy-recommendation-list li p {
    font-size:14px;
    color:#666;
}
</style>