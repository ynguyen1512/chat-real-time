import { useNavigate } from "react-router-dom";
import firebase, { auth } from "../../firebase/config";

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