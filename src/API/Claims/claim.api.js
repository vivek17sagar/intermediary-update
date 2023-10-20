import { ServiceInstance } from "../../../axios.config";

export const intermediateTotalClaimInProcessCount = (payload) => {
  return ServiceInstance.post("/intermediatetotalclaiminprocesscount", payload);
};

export const IntermediateClaimInprocess = (payload) => {
  return ServiceInstance.post("/intermediateclaiminprocess", payload);
};
