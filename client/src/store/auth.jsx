import { createContext, useContext, useState } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const[token,setToken]=useState(localStorage.getItem("token"));

  const storetokenInLS = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  let isloggedIn=!!token;
  console.log("token =", token);
  console.log("isloggedIn =", isloggedIn);

  const LogoutUser=()=>{

    setToken("");
    return localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ isloggedIn,storetokenInLS,LogoutUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);

  if (!authContextValue) {
    throw new Error("useAuth used outside of the provider");
  }

  return authContextValue;
};