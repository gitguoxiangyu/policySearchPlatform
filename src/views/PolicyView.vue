<template>
  <div class="mainContent">
    <div class="policyHead">{{ tempPolicy.value.POLICY_TITLE }}</div>
    <div class="policyDetails">
      <div class="policyPutOrg"><span class="itemTitle">发文机关</span>	{{ tempPolicy.value.PUB_AGENCY_FULLNAME }}</div>
      <div class="policyPutDate"><span class="itemTitle">发文时间</span>	{{ tempPolicy.value.UPDATE_DATE }}</div>
    </div>
    <div class="policyBody">{{ tempPolicy.value.POLICY_BODY }}</div>
    <el-divider />  
  </div>
  
</template>

<script lang="ts" setup>
import { usePolicyStore } from '@/stores/usePolicyStore'
import router from '@/router';

const { tempPolicy , setPolicy } = usePolicyStore()

console.log(tempPolicy);

// if (tempPolicy.value == undefined){
//   router.push({
//     path:'/',
//   })
// }
</script>

<style lang="less" scoped>
.mainContent{
  background-color: white;
  min-width: 760px;
  max-width: 960px;
  width: 70%;
  margin: 10px auto;
  padding: 10px 20px;
  .policyHead{
    text-align: center;
    font-size: 25px;
    font-weight: bold;
  }
  .policyDetails{
    height: 60px;
    margin: 30px 0;
    border: 1px solid rgb(230, 230, 230);
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 0px 10px;
    font-size: small;
  }
  .policyBody{
    letter-spacing: 2px;
  }
}

.itemTitle{
  font-weight: bold;
}
</style>