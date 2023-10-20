import { ServiceInstance } from "../../../axios.config";


export const intermediateendrosmentinvoices = (payLoad) => {
    return ServiceInstance.post("/intermediateendrosmentinvoices", payLoad);
  };
  