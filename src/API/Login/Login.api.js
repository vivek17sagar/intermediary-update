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
