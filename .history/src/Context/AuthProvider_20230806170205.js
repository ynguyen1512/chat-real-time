import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";
import { useEffect } from "react";

function AuthProvider() {
  const navigate = useNavigate();

  useEffect(() => {
    //   After login successfully
    auth.onAuthStateChanged((user) => {
      console.log({ user });
      if (user) {
        navigate("/");
      }
    });
  });

  return <div></div>;
}

export default AuthProvider;
