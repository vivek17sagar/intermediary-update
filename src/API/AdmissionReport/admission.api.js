// /intermediateawatingadmissionreport
import { ServiceInstance } from "../../../axios.config";

export const intermediateawatingadmissionreport = (payload) => {
  return ServiceInstance.post("/intermediateawatingadmissionreport", payload);
};
