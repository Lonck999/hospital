import request from "@/utils/request";
import type {
  HospitalResponseData,
  HospitalAreaResponseData,
  HospitalInfo,
} from "./type";

enum HomeApi {
  // 醫院資料
  HOSPITAL_URL = "/hosp/hospital/",
  // 醫院地區
  HOSPITALAREA_URL = "/cmn/dict/findByDictCode/",
  // 搜尋醫院
  HOSPITALINFO_URL = "/hosp/hospital/findByHosname/",
}

// 接收醫院資料
export const reqHospital = (
  page: number,
  limit: number,
  hostype = "",
  districtCode = ""
) =>
  request.get<any, HospitalResponseData>(
    HomeApi.HOSPITAL_URL +
      `${page}/${limit}?hostype=${hostype}&districtCode=${districtCode}`
  );

// 接收醫院地區
export const reqHospitalArea = (dictCode: string) =>
  request.get<any, HospitalAreaResponseData>(
    HomeApi.HOSPITALAREA_URL + dictCode
  );

// 搜尋醫院
export const reqHospitalInfo = (hosname: string) =>
  request.get<any, HospitalInfo>(HomeApi.HOSPITALINFO_URL + hosname);
