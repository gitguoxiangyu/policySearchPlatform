import { get , post} from '@/utils/request'
import type { FcResponse , IAnyObj} from '@/utils/request'

interface condition{
  keyword: string,
  pageNo?: number,
  pageSize?: string,
  grade?: string,
  policyType?: string,
  province?: string
}

export const searchPolicy = async (value:condition)=>{
  const data = {
    keyword: value.keyword,
    pageNo: value.pageNo ? value.pageNo : 1,
    pageSize: value.pageSize ? value.pageSize : 10,
    grade: value.grade ? value.grade : '',
    policyType: value.policyType ? value.policyType : '',
    province: value.province ? value.province : ''
  }
  return post<string>('/search/policy',data).then((res:[any, FcResponse<string> | undefined])=>{
    const [err, success] = res 
    if (!err && success){
      return success.data
    }
    return err
  })
}