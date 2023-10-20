import { ServiceInstance } from "../../axios.config";

export const intermediatepolicycount = (payLoad) => {
  return ServiceInstance.post("/intermediatepolicycount", payLoad);
};

export const intermediatecustomersinfo = (payLoad) => {
  console.log(payLoad)
  return ServiceInstance.post("/intermediatecustomersinfo", payLoad);
};

export const intermediateTotalRenewlCoutnonth = (payload) => {
  return ServiceInstance.post("/intermediatetotalrenewlCoutnonth", payload);
};

export const intermediateTotalProposer = (payload) => {
  return ServiceInstance.post("/intermediatetotalproposer", payload);
};
