import axios from "axios";
// import { getStatusFromData } from './src/utils';
// import { STATUS_CODE } from './src/Utils/Constant';
// import { toast } from "../eoxegen-intermediary/src/Components/Toaster/Toaster";
// import { useEffect } from 'react';
// import { useAuth } from './src/hooks/useAuth';

//  192.168.100.11:7222 => local
export const ServiceInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "DEV"
      ? import.meta.env.VITE_BaseURL_DEV
      : import.meta.env.VITE_BaseURL_PROD,
  headers: {
    "eO2-Secret-Code": import.meta.env.VITE_EO2_SECRET_CODE,
    "Content-Type": "multipart/form-data",
  },
});

export const SubmitServiceInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "DEV"
      ? import.meta.env.VITE_BaseURL_DEV
      : import.meta.env.VITE_BaseURL_PROD,
  headers: {
    "eO2-Secret-Code": import.meta.env.VITE_EO2_SECRET_CODE,
    "Content-Type": "application/json",
    // 'Access-Control-Allow-Origin': '*',
  },
});
