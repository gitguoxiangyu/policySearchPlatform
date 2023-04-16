import { get , post} from '@/utils/request'
import type { FcResponse , IAnyObj} from '@/utils/request'
import { userUserInfoStore } from '@/stores/useUserInfoStore'

const {userInfo} = userUserInfoStore()
export const recommendPolicy = async ()=>{
  let userId = 1;
  if(userInfo.UserId != undefined){
    userId = userInfo.UserId
  }
  return get('/search/'+userId).then((res)=>{
    const [err,success] = res
    if (!err && success){
      return success.data
    }
    return err
  })
}

// export const addRecord = (item) => {

// }