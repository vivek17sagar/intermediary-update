import { ServiceInstance } from "../../../axios.config";

export const intermediateInvoices = (payLoad) => {
  return ServiceInstance.post("/intermediateinvoices", payLoad);
};

export const intermediateinvoiceexport = (payLoad) => {
  return ServiceInstance.post("/intermediateinvoiceexport", payLoad);
};
