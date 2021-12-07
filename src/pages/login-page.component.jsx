import React, { useEffect } from "react";

import bgImage from "../assets/images/bg.png";
import Login from "../components/login.componsnt";

const LoginPage = ({ signInGo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="login-page" style={{ backgroundImage: `url(${bgImage})` }}>
      <Login signInGo={signInGo} />
    </div>
  );
};

export default LoginPage;
