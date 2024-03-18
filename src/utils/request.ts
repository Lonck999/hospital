import axios from "axios";
import { ElMessage } from "element-plus";
import { ca } from "element-plus/es/locales.mjs";

const request = axios.create({
    baseURL: "/api",
    timeout: 5000,
    });

    request.interceptors.request.use((config) => {
    return config;
    });

    request.interceptors.response.use((response) => {
    return response;
    }, (error) => {
        let status = error.response.status;
        switch (status) {
        case 404:
            ElMessage({
                type: "error",
                message: error.message,
            })
            break;
        case 500|501|502|503|504|505:
            ElMessage({
                type: "error",
                message: "服務器錯誤",
            })
            break;
        case 401:
            ElMessage({
                type: "error",
                message: "未授權",
            })
            break;
        }
    return Promise.reject(new Error(error.message));
    });

    export default request;