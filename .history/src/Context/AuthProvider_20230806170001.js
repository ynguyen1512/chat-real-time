function AuthProvider() {
    return ( 
        const navigate = useNavigate();

  //   After login successfully
  auth.onAuthStateChanged((user) => {
    console.log({ user });
    if (user) {
      navigate("/");
    }
  });
     );
}

export default AuthProvider;