import { ServiceInstance } from "../../../axios.config";

export const endorsementInvoicesList = async (payLoad) => {
  let result;
  try {
    result = await ServiceInstance.post(
      "/intermediateendrosmentinvoices",
      payLoad
    );
    return { ok: true, data: result, error: null };
  } catch (error) {
    return { ok: false, data: null, error };
  }
};
