<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeadBar from '@/components/headBar.vue'
</script>

<template>
  <HeadBar/>
  <keep-alive include="SearchList">
    <RouterView />
  </keep-alive>
</template>

<style scoped>

</style>
