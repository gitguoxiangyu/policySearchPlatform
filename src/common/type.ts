export interface policy {
  CITY: string,
  KEY: string,
  POLICY_BODY: string,
  POLICY_GRADE: string,
  POLICY_ID: number,
  POLICY_SOURCE: string,
  POLICY_TITLE: string,
  POLICY_TYPE: string,
  PROVINCE: string,
  PUB_AGENCY: string,
  PUB_AGENCY_FULLNAME: string,
  PUB_AGENCY_ID: string,
  PUB_NUMBER: string,
  PUB_TIME: string,
  UPDATE_DATE: string
}

export interface condition{
  keyword: string,
  pageNo?: number,
  pageSize?: number,
  grade?: string,
  policyType?: string,
  province?: string
}