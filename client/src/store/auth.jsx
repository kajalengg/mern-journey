import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const[token,setToken]=useState(localStorage.getItem("token"));

  const [usser,setUser]=useState("");

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

  const userAuthentication = async(req, res) => {

    try{
        const response = await fetch("http://localhost:3000/auth/user",{
          method: "GET",
          headers: {
          Authorization: `Bearer ${token}`,
          },

        });

        if(response.ok){
          const data = await response.json();
          console.log("userdata",data.userData);
          setUser(data.userData);
        }

    }catch(error){

      console.log("fetching user data error");

    }

  };

  //jwt authentication to get the user data

  useEffect(() => {
    userAuthentication();
  },[]);

  return (
    <AuthContext.Provider value={{ isloggedIn,storetokenInLS,LogoutUser,usser}}>
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