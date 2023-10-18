import { toast } from "./Components/Toaster/Toaster";

export const getPayload = (endpoint, extraValues = undefined) => {
  switch (endpoint) {
    case "validateintermediatelogin": {
      return {
        memberContactNo: extraValues?.memberContactNo,
      };
    }
    case "validatememberloginotp": {
      return {
        memberContactNo: extraValues?.memberContactNo,
        OTP: extraValues?.OTP,
      };
    }
    default: {
      toast.error("Payload.ts : Wrong endpoint, please check payload");
    }
  }
};
