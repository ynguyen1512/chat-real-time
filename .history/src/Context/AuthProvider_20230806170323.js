import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";
import { useEffect } from "react";

function AuthProvider() {
  const navigate = useNavigate();

  useEffect(() => {
    //   After login successfully
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log({ user });
      if (user) {
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
