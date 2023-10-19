import { ServiceInstance } from "../../axios.config";


export const intermediatepolicycount = (payLoad) => {
    return ServiceInstance.post('/intermediatepolicycount', payLoad);
};


export const intermediatecustomersinfo = (payLoad) => {
    return ServiceInstance.post('/intermediatecustomersinfo', payLoad);
};