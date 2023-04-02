import { get } from '@/src/utils/request'
import type { FcResponse , IAnyObj} from '@/src/utils/request'


export const searchPolicy = async (value:any)=>{
  const data = {
    keyword: value
  }
  return get<string>('/search/policy',data).then((res:[any, FcResponse<string> | undefined])=>{
    console.log(res);
    const [err, success] = res 
    if (!err && success){
      
      return success
    }
    return err
  })
}
