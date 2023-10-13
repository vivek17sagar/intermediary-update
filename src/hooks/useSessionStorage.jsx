import { useState } from "react";

export const useSessionStorage = (keyValue, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = sessionStorage.getItem(keyValue);
      if (value) {
        return JSON.parse(value);
      }
      window.sessionStorage.setItem(keyValue, JSON.stringify(defaultValue));
      return defaultValue;
    } catch (error) {
      return defaultValue;
    }
  });

  const setValue = (newValue) => {
    try {
      window.sessionStorage.setItem(keyValue, JSON.stringify(newValue));
    } catch (error) {
      console.log(error);
    }
    setStoredValue(newValue);
  };
  return [storedValue, setValue];
};
