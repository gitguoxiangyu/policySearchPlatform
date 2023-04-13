<template>
  <div class="mainContent">
    <el-form :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.username" disabled></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="倾向政策类型">
        <el-radio-group v-model="form.politicalTendency">
          <el-radio-button label="左派"></el-radio-button>
          <el-radio-button label="中间派"></el-radio-button>
          <el-radio-button label="右派"></el-radio-button>
          <!-- 自定义倾向政策类型 -->
          <template v-if='isEdit'>
            &nbsp;&nbsp;&nbsp;
            <el-input v-model='form.politicalTendency' placeholder='自定义'></el-input>
          </template>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="兴趣">
        <el-checkbox-group v-model="form.interests">
          <el-checkbox label="篮球"></el-checkbox>
          <el-checkbox label="足球"></el-checkbox>
          <el-checkbox label="游泳"></el-checkbox>
          <el-checkbox label="跑步"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="工作行业">
        <el-select v-model="form.industry" placeholder="请选择">
          <el-option label="IT" value="IT"></el-option>
          <el-option label="金融" value="金融"></el-option>
          <el-option label="教育" value="教育"></el-option>
          <el-option label="医疗" value="医疗"></el-option>
        </el-select>
      </el-form-item>

      <!-- 编辑和保存按钮 -->
      <div style='text-align: center;'>
        <!-- 编辑按钮 -->
        <template v-if='!isEdit'>
          <button class='edit-btn' @click='isEdit = true'>编辑</button>
        </template>

        <!-- 保存按钮 -->
        <template v-else>
          <!-- 取消按钮 -->
          &nbsp;&nbsp;&nbsp;
          <button class='cancel-btn' @click='isEdit = false'>取消</button>

          <!-- 保存按钮 -->
          &nbsp;&nbsp;&nbsp;
          <button class='save-btn' @click='save'>保存</button>

        </template>

      </div>

    </el-form>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'

const form = ref({
  username: '',
  email: '',
  politicalTendency: '',
  interests: [],
  industry: ''
})

const isEdit = ref(false)

function save() {
  console.log('保存成功')
  isEdit.value = false
}

</script>

<style scoped>
.mainContent{
  background-color: white;
  min-width: 760px;
  max-width: 960px;
  width: 70%;
  margin: 10px auto;
  padding: 10px 20px;
}

.edit-btn {
  background-color: #409EFF;
  color: #fff;
  border-radius: 4px;
  padding: 8px 20px;
}

.cancel-btn {
  background-color: #C0C4CC;
  color: #fff;
  border-radius: 4px;
  padding: 8px 20px;
}

.save-btn {
  background-color: #67C23A;
  color: #fff;
  border-radius: 4px;
  padding: 8px 20px;
}

</style>