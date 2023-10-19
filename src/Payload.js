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
    case "intermediatepolicycount": {
      return {
        agencyID : extraValues?.agencyID,
        agencyCode : extraValues?.agencyCode,
        tokenID : sessionStorage.getItem("tokenID"),
      };
    }
    case "intermediatecustomersinfo": {
      return {
        agencyID : extraValues?.agencyID,
        agencyCode : extraValues?.agencyCode,
        tokenID : sessionStorage.getItem("tokenID"),
        pageNo: extraValues?.pageNo,
        pageSize: extraValues?.pageSize
      };
    }
    default: {
      toast.error("Payload.ts : Wrong endpoint, please check payload");
    }
  }
};
