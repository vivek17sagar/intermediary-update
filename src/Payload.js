/*import { json } from "react-router-dom";
import { toast } from "./Components/Toaster/Toaster";

export const getPayload = (endpoint, extraValues = undefined) => {
  switch (endpoint) {
    // case "validateintermediatelogin": {
    //   return {
    //     memberContactNo: extraValues?.memberContactNo,
    //   };
    // }
    // case "validatememberloginotp": {
    //   return {
    //     memberContactNo: extraValues?.memberContactNo,
    //     OTP: extraValues?.OTP,
    //   };
    // }
    case "endorsementInvoicesList": {
      return {
        agencyID: extraValues?.agencyID,
        agencyCode: extraValues?.agencyCode,
        pageNo: extraValues?.pageNo,
        pageSize: extraValues?.pageSize,
        tokenID: extraValues?.tokenID,
      };
    }
    case "intermediatepolicycount": {
      return {
        agencyID: extraValues?.agencyID,
        agencyCode: extraValues?.agencyCode,
        tokenID: sessionStorage.getItem("tokenID"),
      };
    }
    // case "intermediatepolicycount": {
    //   return {
    //     agencyID: extraValues?.agencyID,
    //     agencyCode: extraValues?.agencyCode,
    //     tokenID: sessionStorage.getItem("tokenID"),
    //   };
    // }
    case "intermediatetotalclaiminprocesscount": {
      return {
        agencyID: JSON.parse(sessionStorage.getItem("user"))?.userID,
        agencyCode: JSON.parse(sessionStorage.getItem("user"))?.userCode,
        tokenID: JSON.parse(sessionStorage.getItem("user"))?.tokenID,
      };
    }
    case "intermediateclaiminprocess": {
      return {
        agencyID: extraValues?.agencyID,
        agencyCode: extraValues?.agencyCode,
        pageNo: extraValues?.pageNo,
        pageSize: extraValues?.pageSize,
        tokenID: extraValues?.tokenID,
      };
    }

    // case "intermediatepolicycount": {
    //   return {
    //     agencyID: extraValues?.agencyID,
    //     agencyCode: extraValues?.agencyCode,
    //     tokenID: sessionStorage.getItem("tokenID"),
    //   };
    // }
    // case "intermediatetotalclaiminprocesscount": {
    //   return {
    //     agencyID: JSON.parse(sessionStorage.getItem("user"))?.userID,
    //     agencyCode: JSON.parse(sessionStorage.getItem("user"))?.userCode,
    //     tokenID: JSON.parse(sessionStorage.getItem("user"))?.tokenID,
    //   };
    // }
    // case "intermediateclaiminprocess": {
    //   return {
    //     agencyID: extraValues?.agencyID,
    //     agencyCode: extraValues?.agencyCode,
    //     pageNo: extraValues?.pageNo,
    //     pageSize: extraValues?.pageSize,
    //     tokenID: extraValues?.tokenID,
    //   };
    // }
    case "intermediatecustomersinfo": {
      return {
        agencyID: extraValues?.agencyID,
        agencyCode: extraValues?.agencyCode,
        tokenID: sessionStorage.getItem("tokenID"),
        pageNo: extraValues?.pageNo,
        pageSize: extraValues?.pageSize,
        memberName: extraValues?.memberName,
        membershipNo: extraValues?.membershipNo,
        proposerName: extraValues?.proposerName,
        mobileNo: extraValues?.mobileNo,
      };
    }
    case "intermediatetotalrenewlCoutnonth": {
      return {
        agencyID: extraValues?.agencyID,
        agencyCode: extraValues?.agencyCode,
        pageNo: extraValues?.pageNo,
        pageSize: extraValues?.pageSize,
        tokenID: extraValues?.tokenID,
      };
    }
    case "intermediatepolicies": {
      return {
        agencyID: extraValues?.agencyID,
        agencyCode: extraValues?.agencyCode,
        pageNo: extraValues?.pageNo,
        pageSize: extraValues?.pageSize,
        tokenID: extraValues?.tokenID,
      };
    }
    // case "intermediatetotalrenewlCoutnonth": {
    //   return {
    //     agencyID: extraValues?.agencyID,
    //     agencyCode: extraValues?.agencyCode,
    //     pageNo: extraValues?.pageNo,
    //     pageSize: extraValues?.pageSize,
    //     tokenID: extraValues?.tokenID,
    //   };
    // }
    case "intermediatetotalproposer": {
      return {
        agencyID: extraValues?.agencyID,
        agencyCode: extraValues?.agencyCode,
        tokenID: extraValues?.tokenID,
      };
    }
    default: {
      toast.error("Payload.ts : Wrong endpoint, please check payload");
    }
  }
};*/

import { json } from "react-router-dom";
import { toast } from "./Components/Toaster/Toaster";

export const getPayload = (endpoint, extraValues = undefined) => {
  switch (endpoint) {
    // case "validateintermediatelogin": {
    //   return {
    //     memberContactNo: extraValues?.memberContactNo,
    //   };
    // }
    // case "validatememberloginotp": {
    //   return {
    //     memberContactNo: extraValues?.memberContactNo,
    //     OTP: extraValues?.OTP,
    //   };
    // }
    case "endorsementInvoicesList": {
      return {
        agencyID: extraValues?.agencyID,
        agencyCode: extraValues?.agencyCode,
        pageNo: extraValues?.pageNo,
        pageSize: extraValues?.pageSize,
        tokenID: extraValues?.tokenID,
      };
    }
    case "intermediatepolicycount": {
      return {
        agencyID: extraValues?.agencyID,
        agencyCode: extraValues?.agencyCode,
        tokenID: sessionStorage.getItem("tokenID"),
      };
    }
    case "intermediatepolicycount": {
      return {
        agencyID: extraValues?.agencyID,
        agencyCode: extraValues?.agencyCode,
        tokenID: sessionStorage.getItem("tokenID"),
      };
    }
    case "intermediatepolicycount": {
      return {
        agencyID: extraValues?.agencyID,
        agencyCode: extraValues?.agencyCode,
        tokenID: sessionStorage.getItem("tokenID"),
      };
    }
    case "intermediatepolicycount": {
      return {
        agencyID: extraValues?.agencyID,
        agencyCode: extraValues?.agencyCode,
        tokenID: sessionStorage.getItem("tokenID"),
      };
    }
    case "intermediatetotalclaiminprocesscount": {
      return {
        agencyID: JSON.parse(sessionStorage.getItem("user"))?.userID,
        agencyCode: JSON.parse(sessionStorage.getItem("user"))?.userCode,
        tokenID: JSON.parse(sessionStorage.getItem("user"))?.tokenID,
      };
    }
    case "intermediateclaiminprocess": {
      return {
        agencyID: extraValues?.agencyID,
        agencyCode: extraValues?.agencyCode,
        pageNo: extraValues?.pageNo,
        pageSize: extraValues?.pageSize,
        tokenID: extraValues?.tokenID,
      };
    }

    case "intermediatetotalclaiminprocesscount": {
      return {
        agencyID: JSON.parse(sessionStorage.getItem("user"))?.userID,
        agencyCode: JSON.parse(sessionStorage.getItem("user"))?.userCode,
        tokenID: JSON.parse(sessionStorage.getItem("user"))?.tokenID,
      };
    }
    case "intermediateclaiminprocess": {
      return {
        agencyID: extraValues?.agencyID,
        agencyCode: extraValues?.agencyCode,
        pageNo: extraValues?.pageNo,
        pageSize: extraValues?.pageSize,
        tokenID: extraValues?.tokenID,
      };
    }

    case "intermediatecustomersinfo": {
      return {
        agencyID: extraValues?.agencyID,
        agencyCode: extraValues?.agencyCode,
        tokenID: sessionStorage.getItem("tokenID"),
        pageNo: extraValues?.pageNo,
        pageSize: extraValues?.pageSize,
        memberName: extraValues?.memberName,
        membershipNo: extraValues?.membershipNo,
        proposerName: extraValues?.proposerName,
        mobileNo: extraValues?.mobileNo,
      };
    }
    case "intermediatetotalrenewlCoutnonth": {
      return {
        agencyID: extraValues?.agencyID,
        agencyCode: extraValues?.agencyCode,
        pageNo: extraValues?.pageNo,
        pageSize: extraValues?.pageSize,
        tokenID: extraValues?.tokenID,
      };
    }

    case "intermediateinvoicesreceipts": {
      return {
        agencyID: extraValues?.agencyID,
        agencyCode: extraValues?.agencyCode,
        tokenID: sessionStorage.getItem("tokenID"),
        pageNo: extraValues?.pageNo,
        pageSize: extraValues?.pageSize,
      };
    }
    case "intermediateendrosmentinvoices": {
      return {
        agencyID: extraValues?.agencyID,
        agencyCode: extraValues?.agencyCode,
        tokenID: sessionStorage.getItem("tokenID"),
        pageNo: extraValues?.pageNo,
        pageSize: extraValues?.pageSize,
      };
    }
    case "intermediatetotalproposer": {
      return {
        agencyID: extraValues?.agencyID,
        agencyCode: extraValues?.agencyCode,
        tokenID: extraValues?.tokenID,
      };
    }
    case "intermediatepolicies": {
      return {
        agencyID: extraValues?.agencyID,
        agencyCode: extraValues?.agencyCode,
        pageNo: extraValues?.pageNo,
        pageSize: extraValues?.pageSize,
        tokenID: extraValues?.tokenID,
      };
    }
    case "intermediatequotations": {
      return {
        agencyID: extraValues?.agencyID,
        agencyCode: extraValues?.agencyCode,
        pageNo: extraValues?.pageNo,
        pageSize: extraValues?.pageSize,
        tokenID: extraValues?.tokenID,
      };
    }
    default: {
      toast.error("Payload.ts : Wrong endpoint, please check payload");
    }
  }
};
