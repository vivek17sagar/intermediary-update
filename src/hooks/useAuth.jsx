import { createContext, useContext, useMemo } from "react";
import { useSessionStorage } from "./useSessionStorage";
import { useNavigate } from "react-router-dom";
import { useStore } from "../Store/store";
import { useEffect } from "react";
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useSessionStorage("user", null);

  const navigate = useNavigate();

  const { userDetails } = useStore((store) => ({
    userDetails: store.userDetails,
  }));

  //do the auth here
  const { setUserDetails } = useStore((store) => ({
    setUserDetails: store.setUserDetails,
  }));

  useEffect(() => {
    setUserDetails(JSON.parse(sessionStorage.getItem("user")));
  }, []);

  const login = (data) => {
    try {
      setUser(data);
      sessionStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("userDetails", JSON.stringify(userDetails));
      //   navigate("/prehome");
    } catch (error) {
      alert("please enter correct details");
    }
  };

  const logout = () => {
    setUser(null);
    // setNavBarActive("home");
    // setSelectmemberDetails(null);
    navigate("/", { replace: true });
  };

  const userDetailsMemo = useMemo(
    () => ({
      user,
    }),
    [user]
  );

  const value = useMemo(
    () => ({ ...userDetailsMemo, login, logout }),
    [userDetailsMemo]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;

export const useAuth = () => {
  return useContext(AuthContext);
};
