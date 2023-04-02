import { post } from '@/src/utils/request'
import type { FcResponse , IAnyObj} from '@/src/utils/request'

interface loginForm extends IAnyObj{
  name: string,
  password: string
}

export const login = async (form:loginForm)=>{
  return post<string>('/login',form).then((res:[any, FcResponse<string> | undefined])=>{
    console.log(res);
    const [err, success] = res 
    if (!err && success){
      localStorage.setItem('token', success.data)
      return success
    }
    return err
  })
}
