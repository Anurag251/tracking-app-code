import React, { useEffect } from "react";
import SignUp from "../components/sign-up.component";

const SignUpPage = ({ signInGo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <SignUp signInGo={signInGo} />;
};

export default SignUpPage;
