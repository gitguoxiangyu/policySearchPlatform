<template>
  <div class="mainContent">
    <!-- <el-row>
      <el-col>
        <el-dropdown>
          <span class="el-dropdown-link">
            按时间筛选
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>一周内</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-col>
    </el-row>

    <div class="policy-list">
      <el-table
        :data="tableData"
        :default-sort="{ prop: 'date', order: 'descending' }"
        style="width: 100%"
        :header-row-style="headerRowStyle"
        :header-cell-style="headerCellStyle"
      >
        <el-table-column prop="date" label="Date" sortable width="120" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" :formatter="formatter" />
      </el-table>
    </div> -->

    <div class="headOption">
      <el-row :gutter="10" align="middle">
        <el-col :span="2">部门</el-col>
        <el-col :span="22">
          <el-radio-group v-model="radio1" size="large">
            <el-radio-button label="666" />
            <el-radio-button label="555" />
            <el-radio-button label="Los Angeles" />
            <el-radio-button label="Chicago" />
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row :gutter="10" align="middle">
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
      <el-row :gutter="10" align="middle">
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
    </div>

    <div class="body">
      <div class="policyList">
        <div class="policyItem">
          <div class="policyTitle">关于2022年国民经济和社会发展计划执行情况与2023年国民经济和社会发展计划草案的报告</div>
          <div class="policyAbstract">新华社北京3月15日电关于2022年国民经济和社会发展计划执行情况与2023年国民经济和社会发展计划草案的报告——2023年3月5日在第十四届全国人民代表大会第一次会议上国家发展和改革委员会各位代表：受国务院委托，现将2022年国民经济和社会发展计划执行情况与2023年国民经济和社会发展计划草案提请十四届全国人大一次会议审查，并请全国政协各位委员提出意见……</div>
          <div class="policyInfo">发布时间：2023-03-17 发文机构：全国人民代表大会</div>
        </div>
      </div>
      <div class="recommendPolicy">
        <div class="recommendTitle"> 推荐文章</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import { ArrowDown } from '@element-plus/icons-vue'
import type { TableColumnCtx } from 'element-plus'
const radio1 = ref('New York')

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
    padding: 20px 15px;
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
  }
}

.policyItem{
  
  .policyTitle{
    font-size: 20px;
    font-weight: bold;
  }
  .policyAbstract{
    margin: 8px 0px;
  }
  .policyInfo{
    font-size: 12px;
    color:grey
  }
}
</style>

<!-- interface User {
  date: string
  name: string
  address: string
}
const headerRowStyle = (args:any) => {
  console.log(args)
  return {
    height: '100px',
    backgroundColor: 'red'
  }
}
const headerCellStyle = ({}) => {
  return {
    backgroundColor: 'rgb(242,242,242)'
  }
}
const formatter = (row: User, column: TableColumnCtx<User>) => {
  return row.address
}

const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
] -->