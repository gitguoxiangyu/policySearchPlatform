<template>
  <div class="mainContent">
      <div class="search">
        <el-input placeholder="请输入搜索内容" v-model="searchForm.keyword" class="search-input" :prefix-icon="Search" size="large"></el-input>
        <el-button @click="search" class="search-button" size="large" type="primary">搜索</el-button>
      </div>
      <div class="searchOption">
        <el-form
          ref="form"
          :model="searchForm"
          label-width="auto"

        >
          <el-form-item label="省份">
            <el-select
              v-model="searchForm.province"
              placeholder="please select your zone"
            >
              <el-option v-for="item in provincesArr" :label="item" :value="item"/>
            </el-select>
          </el-form-item>
          <el-form-item label="发文时间">
            <el-col :span="11">
              <el-date-picker
                v-model="searchForm.date1"
                type="date"
                label="Pick a date"
                placeholder="起始时间"
                style="width: 100%"
              />
            </el-col>
            <el-col class="text-center" :span="1" style="margin: 0 0.5rem">-</el-col>
            <el-col :span="11">
              <el-date-picker
                v-model="searchForm.date2"
                label="Pick a time"
                placeholder="结束时间"
                style="width: 100%"
              />
            </el-col>
          </el-form-item>
          <el-form-item label="政策等级">
            <el-radio-group v-model="searchForm.grade" size="large">
              <el-radio-button label="国家级"/>
              <el-radio-button label="省级"/>
              <el-radio-button label="市级"/>
              <el-radio-button label="区级" />
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">搜索</el-button>
            <el-button @click="router.back()">返回</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import router from '@/router/index'
import { Search } from '@element-plus/icons-vue'

const search = ()=>{

}

const size = ref('default')
const labelPosition = ref('right')

const provincesArr = ref(['河北','山西','黑龙江','吉林','辽宁','江苏','浙江','安徽','福建','江西','山东','河南','湖北','湖南','广东','海南','四川','贵州','云南','陕西','甘肃','青海','台湾','内蒙古','广西','西藏','宁夏','新疆','北京','天津','上海','重庆','香港','澳门'])
const searchForm = reactive({
  keyword: '',
  grade: '',
  province: '',
  // policyType: false,
  date1: '',
  date2: ''
})

function onSubmit() {
  router.push({
    path: '/list',
    query: searchForm
  })
}
</script>

<style scoped lang="less">
  .mainContent{
    background-color: white;
    width: 70%;
    margin: 10px auto;
    padding: 10px 20px;
    
    .search {
      margin-top: 20px;
      display:flex;
      justify-content:center;
    }

    .search-input {
      width:400px;
    }

    .searchOption{
      padding: 20px 60px;
    }
  }


</style>