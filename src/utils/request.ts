// 封装 axios ，最后希望以 const [res , err] =  await api.getUserInfo()调用, { AxiosInstance , AxiosRequestConfig }
import Axios from "axios";
import router from '@/src/router/index'


const axios = Axios
// 配置不同环境下，axios的默认请求地址
if (process.env.NODE_ENV == 'development'){
  axios.defaults.baseURL = 'http://113.54.240.120:8080'
}else if (process.env.NODE_ENV == 'debug'){
  axios.defaults.baseURL = ''
}else if (process.env.NODE_ENV == 'production'){
  axios.defaults.baseURL = ''
}

axios.defaults.timeout = 3000

export interface FcResponse<T> {
  err: string,
  errMsg: string,
  data: T
}

// params 参数对象实现该接口
export interface IAnyObj{
  [index:string]: unknown
}

type Fn = (data: FcResponse<any>) => unknown

// 请求拦截器
axios.interceptors.request.use(    
  config => {
      // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
      // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
      const token:string | null = window.localStorage['token'];        
      token && (config.headers.Authorization = token);
      return config;    
  },    
  error => {        
      return Promise.reject(error);    
  }
)

// axios.interceptors.response.use(
//   (res) => {
//     return res.status === 200 ? Promise.resolve(res) : Promise.reject(res)
//   },
//   (err) => {
//     const { response } = err;
//     if (response) {
//       // 请求已发出，但是不在2xx的范围 
//       errorHandle(response.status, response.data.message);
//       return Promise.reject(response);
//     }
//   }
// )


// 封装 get 请求函数
// 参数 ： url 类型string 必选； params 类型实现IAnyObj的对象 必选； clearFn 类型Fn 可选 用于处理返回值的回调函数
// 返回值 Promise  Promise的包裹值为一个[any,FcResponse<T> | undefined]元组
export const get = <T,> (url:string, params: IAnyObj = {}, clearFn?:Fn): Promise<[any,FcResponse<T> | undefined]> =>{
  return new Promise((reslove,reject)=>{
    axios.get(url,{params}).then((
      success => {
        let res: FcResponse<T>
        // 如果回调函数存在，则执行回调函数；不存在，则直接把success返回值的data作为Promise返回值
        if (clearFn != undefined){
          res = clearFn(success.data) as unknown as FcResponse<T>
        }else {
          res = success.data as FcResponse<T>
        }
        reslove([null, res as FcResponse<T>])
      }
    )).catch((err)=>{
      reslove([err,undefined])
    })
  })
}

export const post = <T,>(url: string, data: IAnyObj, params: IAnyObj = {}): Promise<[any, FcResponse<T> | undefined]> => {
  return new Promise((resolve) => {
    axios
      .post(url, data)
      .then((success) => {
        console.log(success);
        resolve([null, success.data as FcResponse<T>])
      })
      .catch((err) => {
        console.log(err);
        resolve([err, undefined])
      })
  })
}

export const put = <T,>(url: string, data: IAnyObj, params: IAnyObj = {}): Promise<[any, FcResponse<T> | undefined]> => {
  return new Promise((resolve) => {
    axios
      .put(url, data)
      .then((success) => {
        console.log(success);
        resolve([null, success.data as FcResponse<T>])
      })
      .catch((err) => {
        console.log(err);
        resolve([err, undefined])
      })
  })
}

/** 
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
  router.replace({
      path: '/login',        
      query: {
          redirect: router.currentRoute.fullPath
      }
  });
}



const errorHandle = (status: number, other: any) => {
  // 状态码判断
  switch (status) {
    // 401: 未登录状态，跳转登录页
    case 401:
      toLogin();
      break;
    // 403 token过期
    // 清除token并跳转登录页
    case 403:
      localStorage.removeItem('token');
      setTimeout(() => {
          toLogin();
      }, 1000);
      break;
    // 404请求不存在
    case 404:
      console.log(404);
      break;
    default:
      console.log(other);   
  }
}