import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";
import React from "react";

function AuthProvider() {
    const navigate = useNavigate();

  //   After login successfully
  auth.onAuthStateChanged((user) => {
    console.log({ user });
    if (user) {
      navigate("/");
    }
  });
    return (  );
}

export default AuthProvider;