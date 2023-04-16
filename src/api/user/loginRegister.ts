import { post } from '@/utils/request'
import type { FcResponse , IAnyObj} from '@/utils/request'
import { ElMessage } from 'element-plus'
import { userUserInfoStore } from '@/stores/useUserInfoStore'

interface loginForm extends IAnyObj{
  UserName: string,
  password: string
}

interface registerForm extends IAnyObj{
  UserName: string,
  password: string
}

interface loginBack extends IAnyObj{
  UserId: number,
  UserName: string,
  token: string
}

export const login = async (form:loginForm)=>{
  return post<loginBack>('/login',form).then((res:[any, FcResponse<loginBack> | undefined])=>{
    const [err, success] = res 
    console.log(res);
    
    if (err==undefined && success!=undefined){
      localStorage.setItem('token', success.data.token)
      const {setUserInfo} = userUserInfoStore()
      setUserInfo(success.data)
      return success.data
    }
    ElMessage.error('登录失败，请检查用户名和密码是否正确')
    return err
  })
}


export const register = async (form:registerForm)=>{
  console.log(form);
  
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
