import { ServiceInstance } from "../../../axios.config";

export const intermediatepaidclaim = (payload) => {
  return ServiceInstance.post("/intermediatepaidclaim", payload);
};
