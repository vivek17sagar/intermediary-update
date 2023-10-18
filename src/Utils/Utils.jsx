export const getCurrentBrowserDiamension = () => {
  return window.innerWidth;
};

export const getResultFromData = (data) =>
  data?.data?.data?.result || data?.data?.result;

export const getErrorResultFromData = (data) => data?.error?.response?.data;
