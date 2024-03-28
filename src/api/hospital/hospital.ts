import request from "@/utils/request";
import type {HospitalDetail} from "./type";

enum API {
    HOSPITALDETAIL_URL = "hosp/hospital/",
    }

export const reqHospitalDetail = (hoscode: string) => request.get<any, HospitalDetail>(API.HOSPITALDETAIL_URL+hoscode);