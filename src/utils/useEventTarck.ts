// 埋点sdk

import request from '@/api/eventTrack'
import { onBeforeUnmount, onMounted, ref} from 'vue'

interface userInfo{
  userID: string
}
// PV 用户浏览页面次数
// 当 pageView 方法执行时， 会将记录发给后端
export const pageView = (userInfo:userInfo)=>{
  request
}

// TP 记录用户停留时间
export const TimeOnPage = (userInfo:userInfo)=>{
  let startTime;
  let endTime;

  onMounted(()=>{
    startTime = console.time()
  })

  onBeforeUnmount(()=>{
    endTime = console.timeEnd()
    // 上报数据
    request
  })
}