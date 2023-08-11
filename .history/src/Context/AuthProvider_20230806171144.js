import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";
import { createContext, useEffect, useState } from "react";
// import React from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    //   After login successfully
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log({ user });
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({ displayName, email, uid, photoURL });
        navigate("/");
      }
    });
    // clean function
    return () => {
      unsubscribe();
    };
  }, [navigate]);

  return <div></div>;
}

export default AuthProvider;
