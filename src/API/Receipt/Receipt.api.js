import { ServiceInstance } from "../../../axios.config";

export const intermediateinvoicesreceipts = (payLoad) => {
    console.log(payLoad)
    return ServiceInstance.post("/intermediateinvoicesreceipts", payLoad);
  };