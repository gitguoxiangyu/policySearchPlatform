import { get , post} from '@/utils/request'
import type { FcResponse , IAnyObj} from '@/utils/request'
import type {condition} from '@/common/type'
import { userUserInfoStore } from '@/stores/useUserInfoStore'
// export const searchPolicy = async (value:condition)=>{
//   const data = {
//     keyword: value.keyword,
//     pageNo: value.pageNo ? value.pageNo : 1,
//     pageSize: value.pageSize ? value.pageSize : 10,
//     grade: value.grade ? value.grade : '',
//     policyType: value.policyType ? value.policyType : '',
//     province: value.province ? value.province : ''
//   }
//   return post<string>('/search/policy',data).then((res:[any, FcResponse<string> | undefined])=>{
//     const [err, success] = res 
//     if (!err && success){
//       return success.data
//     }
//     return err
//   })
// }

const data = {
  params: {

  }
}

export const searchPolicy = async (value:condition)=>{
  const data = {
    from: value.pageNo ? value.pageNo*10 : 1,
    size: 10,
    params: {
      POLICY_BODY: value.keyword,
      POLICY_TITLE: value.keyword,
      // PROVINCE: value.province ? value.province : null,
      // POLICY_GRADE: value.grade ? value.grade : null,
    }
  }

  if(value.grade){
    data.params.POLICY_GRADE = value.grade
  }
  if(value.province){
    data.params.PROVINCE = value.province
  }

  const {userInfo} = userUserInfoStore()
  if(userInfo.UserId == undefined){
    userInfo.UserId = -1
  }
  return post<string>('/search/policy/'+userInfo.UserId,data).then((res:[any, FcResponse<string> | undefined])=>{
    const [err, success] = res 
    if (!err && success){
      return success.data
    }
    return err
  })
}