import request from "@/utils/request";

enum HomeApi {
  HOSPITAL_URL = "/hosp/hospital/",
}

export const reqHospital = (page: number, limit: number) =>
  request.get(HomeApi.HOSPITAL_URL + `${page}/${limit}`);
