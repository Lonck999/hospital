import request from "@/utils/request";
import type { HospitalResponseData } from "./type";

enum HomeApi {
  HOSPITAL_URL = "/hosp/hospital/",
}

export const reqHospital = (page: number, limit: number) =>
  request.get<any, HospitalResponseData>(
    HomeApi.HOSPITAL_URL + `${page}/${limit}`
  );
