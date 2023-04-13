<template>
  <div class="search">
    <el-input placeholder="请输入搜索内容" v-model="searchValue" class="search-input" :prefix-icon="Search" size="large"></el-input>
    <el-button @click="search" class="search-button" size="large" type="primary">搜索</el-button>
    <el-button @click="toDetailSearch" class="detail-search-button" size="large" type="primary">高级搜索</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router/index'
import { Search } from '@element-plus/icons-vue'

const props = defineProps({
  searchFn: Function,
})
// 搜索框逻辑
const searchValue = ref('')

function search() {
  if (searchValue.value){
    router.push({
      path: '/list',
      query: {
        'keyword':searchValue.value
      }
    })
  }
}

function toDetailSearch(){
  router.push({
    path: '/search'
  })
}

</script>

<style>
.search {
  margin-top: 20px;
  display:flex;
  justify-content:center;
}

.search-input {
  width:400px;
}

</style>

