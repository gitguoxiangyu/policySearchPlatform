import { get , post} from '@/utils/request'
import type { FcResponse , IAnyObj} from '@/utils/request'
import { userUserInfoStore } from '@/stores/useUserInfoStore'

const {userInfo} = userUserInfoStore()
export const resetTendency = async (val)=>{
  let data = {
    Removed: val.Removed,
    Added: val.Added,
    UserID: userInfo.UserId
  }
  return post('/user/resetTendency',data).then((res)=>{
    const [err,success] = res
    if (!err && success){
      return success.data
    }
    return err
  })
}

export const setEmail = async (val:string)=>{
  let data = {
    userName: userInfo.UserName,
    email: val
  }
  return post('/user/profile/setEmail',data).then((res)=>{
    const [err,success] = res
    if (!err && success){
      return success.data
    }
    return err
  })
}