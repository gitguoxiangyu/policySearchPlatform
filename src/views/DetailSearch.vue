<template>
  <div class="mainContent">
      <div class="search">
        <el-input placeholder="请输入搜索内容" v-model="searchValue" class="search-input" :prefix-icon="Search" size="large"></el-input>
        <el-button @click="search" class="search-button" size="large" type="primary">搜索</el-button>
      </div>
      <div class="searchOption">
        <el-form
          ref="form"
          :model="sizeForm"
          label-width="auto"

        >
          <el-form-item label="等级">
            <el-select
              v-model="sizeForm.region"
              placeholder="please select your zone"
            >
              <el-option label="国级" value="shanghai" />
              <el-option label="省级" value="beijing" />
              <el-option label="市级" value="beijing" />
              <el-option label="区级" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="发文时间">
            <el-col :span="11">
              <el-date-picker
                v-model="sizeForm.date1"
                type="date"
                label="Pick a date"
                placeholder="Pick a date"
                style="width: 100%"
              />
            </el-col>
            <el-col class="text-center" :span="1" style="margin: 0 0.5rem">-</el-col>
            <el-col :span="11">
              <el-time-picker
                v-model="sizeForm.date2"
                label="Pick a time"
                placeholder="Pick a time"
                style="width: 100%"
              />
            </el-col>
          </el-form-item>
          <el-form-item label="Activity type">
            <el-checkbox-group v-model="sizeForm.type">
              <el-checkbox-button label="Online activities" name="type" />
              <el-checkbox-button label="Promotion activities" name="type" />
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="Resources">
            <el-radio-group v-model="sizeForm.resource">
              <el-radio border label="Sponsor" />
              <el-radio border label="Venue" />
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button>Cancel</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import router from '@/router/index'
import { Search } from '@element-plus/icons-vue'

const searchValue = ref('')

const search = ()=>{

}

const size = ref('default')
const labelPosition = ref('right')

const sizeForm = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

function onSubmit() {
  console.log('submit!')
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