import {defineStore} from 'pinia'
import { reqHospitalDetail } from "@/api/hospital/hospital.ts";
import type {HospitalDetail} from "@/api/hospital/type.ts";

const  useDetailStore = defineStore('Detail', {
    state: () => {
        return{
            hospitalDetail: {}
        }
    },
    actions: {
        async getHospital(hoscode: string) {
            let result: HospitalDetail = await reqHospitalDetail(hoscode);
            console.log("123", result.data.code);
            if (result.data.code === 200) {
                this.hospitalDetail = result.data;
            }
        }
    }})
    export default useDetailStore