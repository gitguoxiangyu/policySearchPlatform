<template>
  <div class="mainContent">
    <div class="headOption">
      <searchInput :search-fn="searchFn"/>
      <el-row :gutter="10" align="middle" style="margin-top: 20px;">
        <el-col :span="2">时间排序</el-col>
        <el-col :span="22">
          <el-radio-group v-model="timeSort" size="large">
            <el-radio-button label="不限"/>
            <el-radio-button label="由远到近"/>
            <el-radio-button label="由近到远" />
          </el-radio-group>
        </el-col>
      </el-row>
      <!-- <el-row :gutter="10" align="middle" style="margin-top: 20px;">
        <el-col :span="2">年份</el-col>
        <el-col :span="22">
          <el-radio-group v-model="radio1" size="large">
            <el-radio-button label="New York" />
            <el-radio-button label="Washington" />
            <el-radio-button label="Los Angeles" />
            <el-radio-button label="Chicago" />
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row :gutter="10" align="middle" style="margin-top: 20px;">
        <el-col :span="2">年份</el-col>
        <el-col :span="22">
          <el-radio-group v-model="radio1" size="large">
            <el-radio-button label="New York" />
            <el-radio-button label="Washington" />
            <el-radio-button label="Los Angeles" />
            <el-radio-button label="Chicago" />
          </el-radio-group>
        </el-col>
      </el-row> -->
    </div>

    <div class="body">
      <div class="policyList">
        <div class="policyItem" v-for="item in displayPolicyList" @click="toPolicyView(item)">
          <div class="policyTitle">{{ item._source.POLICY_TITLE }}</div>
          <div class="policyAbstract">{{ item._source.POLICY_BODY.substring(0,100) }}......</div>
          <div class="policyInfo">发文时间：{{ item._source.UPDATE_DATE }} 发文机构：{{ item._source.PUB_AGENCY }}</div>
          <el-divider />
        </div>
        <el-pagination background layout="prev, pager, next" :total="100" :current-page="currentPage" @current-change="changePage"/>
      </div>
      <div class="recommendPolicy">
        <div class="recommendTitle"> 推荐文章</div>
        <div class="recommendItem" v-for="item in recommend">
          <div class="recommendPolicyTitle">{{ item._source.POLICY_TITLE }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
    export default {
        name: 'SearchList'
    }
</script>

<script lang="ts" setup>
import {reactive, ref} from 'vue'
import searchInput from '@/components/searchInput.vue'
import { useRoute } from 'vue-router';
import { searchPolicy } from '@/api/policy/search';
import { usePolicyStore } from '@/stores/usePolicyStore'
import router from '@/router';
import type {condition} from '@/common/type'


const province = ref('不限')
const timeSort = ref('不限')

const policyList = ref([])
const displayPolicyList = ref([])

// 获取路由query参数
let route = useRoute()
console.log(route.query);

searchPolicy(route.query).then((data:Array<any>)=>{
  console.log(data);
  displayPolicyList.value.push(...data)
  policyList.value.push(...data)
})


// 推荐政策
let rec = {
  keyword: '国家',
  pageSize: 5
}
let recommend = ref([])
searchPolicy(rec).then((data)=>{
  console.log(data);
  recommend.value.push(...data)
})


const searchFn = (val: any)=>{
  policyList.values = val
}

const { tempPolicy , setPolicy } = usePolicyStore()

const toPolicyView = (item) => {
  setPolicy(item._source)
  router.push({
    path: '/policy'
  })
}


// 分页逻辑
const currentPage = ref(1)
const changePage = (val:number)=>{
  console.log(val);
  
  currentPage.value = val
  let postData = route.query;
  postData.pageNo = currentPage.value

  searchPolicy(postData).then((data:Array<any>)=>{
    console.log(data);
    displayPolicyList.value = []
    displayPolicyList.value.push(...data)
    policyList.value.push(...data)
  })
}
</script>

<style scoped lang="less">

.mainContent{
  min-width: 930px;
  width: 70%;
  margin: 10px auto;
  padding: 10px 20px;
}

.headOption{
  background-color: white;
  padding: 20px 20px;
  border-radius: 5px;
}
.body{
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  .policyList{
    background-color: white;
    border-radius: 5px;
    width: 74%;
    padding: 20px 2px;
  }
  .recommendPolicy{
    background-color: white;
    border-radius: 5px;
    width: 24%;
    padding: 6px 8px;
    .recommendTitle{
      padding: 1px 2px;
      line-height: 24px;
    }
    .recommendTitle::before{
      width: 4px;
      height: 20px;
      border-radius: 4px;
      background-color: #1D9ED2;
      color: #1D9ED2;
      content: '1';
    }
    .recommendItem{
      padding: 5px 0;
      border-bottom: 1px rgb(204, 204, 204) solid;
    }
    .recommendPolicyTitle{
      font-size: 6px;
      font-weight: bold;
    }
  }
}

.policyItem{
  padding: 18px 18px 0px 18px;
  .policyTitle{
    font-size: 20px;
    font-weight: bold;
  }
  .policyAbstract{
    margin: 12px 0px;
  }
  .policyInfo{
    font-size: 12px;
    color:grey
  }
}
.policyItem:hover{
  background-color: rgb(236, 236, 236);
}
</style>