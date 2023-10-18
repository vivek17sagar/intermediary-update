import { ServiceInstance } from "../../../axios.config";
export const LoginAPI = async (payLoad) => {
  if (payLoad.email === "admin@admin.com" && payLoad.password === "admin") {
    return { ...payLoad, loggedIn: true, error: null };
  }
  return {
    ...payLoad,
    loggedIn: false,
    error: "Wrong username/password combination",
  };
};

export const ValidateLogin = async (payLoad) => {
  let result;
  try {
    result = await ServiceInstance.post("/validateintermediatelogin", {
      requiredOTP: "Y",
      ...payLoad,
    });
    return { ok: true, data: result, error: null };
  } catch (error) {
    return { ok: false, data: null, error };
  }
};

/*
export const Forgotpassword = async (payLoad) => {
  let result;
  try {
    result = await ServiceInstance.post("/changeCustomerPassword", {
      OTP: "123456",
      ...payLoad,
    });
    return { ok: true, data: result, error: null };
  } catch (error) {
    return { ok: false, data: null, error };
  }
};

export const verifyWithOTP = async (payLoad) => {
  let result;
  try {
    result = await ServiceInstance.post("/validatecustomerloginotp", payLoad);
    return { ok: true, data: result, error: null };
  } catch (error) {
    return { ok: false, data: null, error };
  }
};*/
