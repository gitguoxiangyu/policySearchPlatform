import { post } from '@/utils/request'
import type { FcResponse , IAnyObj} from '@/utils/request'
import { ElMessage } from 'element-plus'

interface loginForm extends IAnyObj{
  name: string,
  password: string
}

interface registerForm extends IAnyObj{
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
    ElMessage.error('登录失败，请检查用户名和密码是否正确')
    return err
  })
}


export const register = async (form:registerForm)=>{
  return post<string>('/register',form).then((res:[any, FcResponse<string> | undefined])=>{
    console.log(res);
    const [err, success] = res 
    if (!err && success){
      localStorage.setItem('token', success.data)
      return success
    }
    
    return err
  })
}
