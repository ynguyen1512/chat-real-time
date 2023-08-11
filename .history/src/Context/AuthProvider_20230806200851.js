import { useNavigate } from "react-router-dom";
import firebase, { auth } from "../../firebase/config";
import { createContext, useEffect, useState } from "react";
import { Spin } from "antd";
// import React from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const { isLoading, setIsLoading } = useState(true);

  useEffect(() => {
    //   After login successfully
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log({ user });
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({ displayName, email, uid, photoURL });
        setIsLoading(false);
        navigate("/");
      }
      navigate("/login");
    });
    // clean function
    return () => {
      unsubscribe();
    };
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ user }}>
      {isLoading ? <Spin /> : children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
