<template>
  <div>
    <div class="mainContent">

      <searchInput/>

      <div class="policy">
        <div class="title">————  最新政策  ————</div>
        <div class="policy-recommendation-container">

          <!-- 推荐政策列表 -->
          <div class="policy-recommendation">
            <div class="recommend-title"> 推荐文章</div>
            <div class="recommend-policys">
              <el-collapse>
                <el-collapse-item v-for="item in policies" :title="item._source.POLICY_TITLE" :name="item.id">
                  <div>
                    <span style="font-weight: bold;">发文机关： </span> {{ item._source.POLICY_SOURCE }}
                  </div>
                  <div>
                    <span style="font-weight: bold;">发文时间： </span> {{ item._source.UPDATE_DATE }}
                  </div>
                  <el-link type="primary" @click="toPolicyView(item)">查看全文</el-link>
                </el-collapse-item>
              </el-collapse>
            </div>
          </div>

          <div class="policy-recommendation-images">
            <div class="gongbao-title">国务院公报</div>
            <el-divider />
            <img src="@/assets/img/gwygongbao.png" alt="国务院公报">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import searchInput from '@/components/searchInput.vue'
import {recommendPolicy} from '@/api/policy/recommend'
import {usePolicyStore} from '@/stores/usePolicyStore'
import router from '@/router';
import { searchPolicy } from '@api/policy/search';
import type {condition} from '@/common/type'

let policies = ref([])
recommendPolicy().then((data)=>{
  console.log(data);
  policies.value = data
})

// const condition: condition = {
//   keyword: '',
//   grade: '国级'
// }
// searchPolicy(condition).then((data:Array<any>)=>{
//   console.log(data);
//   let temp = {
//     _source: data
//   }
// })

const {setPolicy} = usePolicyStore()
const toPolicyView = (item)=>{
  setPolicy(item._source)

  router.push({
    path: '/policy'
  })
}

</script>

<style scoped lang="less">
.mainContent{
  background-color: white;
  width: 70%;
  min-height: 90vh;
  margin: 10px auto;
  padding: 10px 20px;
}
.title{
  margin: 40px auto;
  font-size: 40px;
  font-weight: bold;
  color: rgb(44, 145, 232);
  text-align: center;
}

.policy-recommendation {
  width: 68%;
  margin-top: 20px;
  padding: 10px 34px 33px 20px;
  box-shadow: 0 0 15px #e5e3e3;
  .recommend-title{
    margin: 20px 0;
    font-size: large;
  }
}

.policy-recommendation-container {
  display:flex;
  justify-content: space-between;
}

.policy-recommendation-images {
  width:28%;
  margin-top: 20px;
  .gongbao-title{
    font-size: 20px;
    font-weight: 500;
    margin-bottom: -20px;
  }
}

.policy-recommendation-images img {
  width:80%;
  transition: all 1s;
}
.policy-recommendation-images img:hover {
  margin-top: -5px;
  margin-left: -3px;
}

.policy-recommendation h2 {
    font-size:24px;
    font-weight:bold;
    margin-bottom:20px;
    text-align:center;
}
.recommend-title::before{
  width: 4px;
  height: 20px;
  border-radius: 4px;
  background-color: #4dc7f8;
  color: #4dc7f8;
  content: '1';
}
</style>