import { createContext, useContext, useMemo } from "react";
import { useSessionStorage } from "./useSessionStorage";
import { useNavigate } from "react-router-dom";
import { useStore } from "../Store/store";
import { useEffect } from "react";
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useSessionStorage("user", null);
  const navigate = useNavigate();
  //   const { setNavBarActive, setSelectmemberDetails } = useStore((store) => ({
  //     setNavBarActive: store.setNavBarActive,
  //     setSelectmemberDetails: store.setSelectmemberDetails,
  //   }));

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

  const userDetails = useMemo(
    () => ({
      user,
    }),
    [user]
  );

  const value = useMemo(
    () => ({ ...userDetails, login, logout }),
    [userDetails]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;

export const useAuth = () => {
  return useContext(AuthContext);
};
