import { ServiceInstance } from "../../../axios.config";

export const intermediateinvoicesreceipts = (payLoad) => {
  return ServiceInstance.post("/intermediateinvoicesreceipts", payLoad);
};
