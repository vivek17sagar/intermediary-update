import { ServiceInstance } from "../../../axios.config";

export const intermediatepolicycount = (payLoad) => {
  return ServiceInstance.post("/intermediatepolicycount", payLoad);
};

export const intermediatecustomersinfo = (payLoad) => {
  return ServiceInstance.post("/intermediatecustomersinfo", payLoad);
};

export const intermediateTotalCustomer = (payload) => {
  return ServiceInstance.post("/intermediatetotalcustomer", payload);
};

export const intermediateTotalRenewlListnonth = (payload) => {
  return ServiceInstance.post("/intermediatetotalrenewlListnonth", payload);
};
export const intermediateTotalRenewlListCount = (payload) => {
  return ServiceInstance.post("/intermediatetotalrenewlcountnonth", payload);
};
