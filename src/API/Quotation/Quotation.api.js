import { ServiceInstance } from "../../../axios.config";

export const intermediateQuotations = (payload) => {
  return ServiceInstance.post("/intermediatequotations", payload);
};
