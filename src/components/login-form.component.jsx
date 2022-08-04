import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormInputSignInSignUp from "./form-input-sign-in-sign-up.component";

const LoginForm = () => {
  const [formValues, setFormValuse] = useState({
    userEmail: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValuse({ ...formValues, [name]: value });
  };

  return (
    <div className="login-form">
      <h4>Login</h4>

      <form action="">
        <div className="form">
          <FormInputSignInSignUp
            type="email"
            name="userEmail"
            label="Email Address*"
            handleChange={handleChange}
            value={formValues.userEmail}
          />

          <FormInputSignInSignUp
            type="password"
            name="password"
            label="Password"
            handleChange={handleChange}
            value={formValues.password}
          />

          <div className="btn-group">
            <button>Login</button>
          </div>
        </div>
      </form>

      <div className="or">or</div>

      <div className="social-icons">
        <div className="icon">
          <i className="fab fa-facebook"></i>
        </div>

        <div className="icon">
          <i className="fab fa-google"></i>
        </div>

        <div className="icon">
          <i className="fab fa-apple"></i>
        </div>
      </div>

      <div className="have-account">
        New to Tracking App?{" "}
        <Link to="/sign-up">
          <span>Sign Up</span>
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
