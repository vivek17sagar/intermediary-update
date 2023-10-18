export const isBrowser = typeof window !== "undefined";
export const decideENV = () => {
  if (isBrowser) {
    if (window.location.hostname === "localhost") {
      return "DEV";
    }

    return "PROD";
  }
};
