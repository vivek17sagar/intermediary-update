import { ServiceInstance } from "../../../axios.config";

export const commissionStatement = (payload) => {
  return ServiceInstance.post("/intermediatelistcommision", payload);
};
