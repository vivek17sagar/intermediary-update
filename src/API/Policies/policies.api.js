import { ServiceInstance } from "../../../axios.config";

export const getPoliciesData = async (payLoad) => {
  let result;
  try {
    result = await ServiceInstance.post("/intermediatepolicies", payLoad);
    return { ok: true, data: result, error: null };
  } catch (error) {
    return { ok: false, data: null, error };
  }
};
