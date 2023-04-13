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
                <el-collapse-item v-for="item in policies" :title="item.title" :name="item.id">
                  <div>
                    中共中央发出关于学习《习近平著作选读》第一卷、第二卷的通知
                  </div>
                  <div>
                    Consistent within interface: all elements should be consistent, such
                    as: design style, icons and texts, position of elements, etc.
                  </div>
                  <div class="policy-link">查看全文</div>
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

const policies = [
  { id: 1, title: '政策标题1', summary: '政策概要信息1' },
  { id: 2, title: '政策标题2', summary: '政策概要信息2' },
  { id: 3, title: '政策标题3', summary: '政策概要信息3' },
  { id: 4, title: '政策标题4', summary: '政策概要信息4' },
  { id: 5, title: '政策标题5', summary: '政策概要信息5' }
]
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