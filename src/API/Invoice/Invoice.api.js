import { ServiceInstance } from "../../../axios.config";

export const intermediateInvoices = (payLoad) => {
  return ServiceInstance.post("/intermediateinvoices", payLoad);
};
