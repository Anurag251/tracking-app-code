import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormInputSignInSignUp from "./form-input-sign-in-sign-up.component";

import { signInWithGoogle } from "../firebase/firebase.utils";

const SignUpFormUser = () => {
  const [formValues, setFormValuse] = useState({
    firstName: "",
    lastName: "",
    userEmail: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    address: "",
  });

  const [changeType, setChangeType] = useState("text");

  const [move, setMove] = useState(0);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValuse({ ...formValues, [name]: value });
  };

  const slidePrev = (e) => {
    e.preventDefault();
    setMove(0);
  };

  const slideNext = (e) => {
    e.preventDefault();
    setMove(100);
  };

  return (
    <div className="sign-up-form">
      <h4>Sign Up as User</h4>

      <form action="">
        <div className="form-slide" style={{ marginLeft: `-${move}%` }}>
          <div className="form">
            <FormInputSignInSignUp
              type="text"
              name="firstName"
              label="First Name*"
              handleChange={handleChange}
              value={formValues.firstName}
            />

            <FormInputSignInSignUp
              type="text"
              name="lastName"
              label="Last Name*"
              handleChange={handleChange}
              value={formValues.lastName}
            />

            <FormInputSignInSignUp
              type="email"
              name="userEmail"
              label="Email Address*"
              handleChange={handleChange}
              value={formValues.userEmail}
            />

            <FormInputSignInSignUp
              type="number"
              name="mobileNumber"
              label="Mobile Number"
              handleChange={handleChange}
              value={formValues.mobileNumber}
            />

            <div className="btn-group">
              <button onClick={(e) => slideNext(e)}>Next</button>
            </div>
          </div>

          <div className="form">
            <FormInputSignInSignUp
              type="password"
              name="password"
              label="Password*"
              handleChange={handleChange}
              value={formValues.password}
            />

            <FormInputSignInSignUp
              type="password"
              name="confirmPassword"
              label="Confirm Password*"
              handleChange={handleChange}
              value={formValues.confirmPassword}
            />

            <FormInputSignInSignUp
              type={changeType}
              name="dateOfBirth"
              label="Date Of Birth*"
              handleChange={handleChange}
              value={formValues.dateOfBirth}
              onFocus={() => setChangeType("date")}
            />

            <FormInputSignInSignUp
              type="text"
              name="address"
              label="Address"
              handleChange={handleChange}
              value={formValues.address}
            />

            <div className="btn-group">
              <button onClick={(e) => slidePrev(e)}>Prev</button>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </form>

      <div className="or">or</div>

      <div className="social-icons">
        <button className="icon">
          <i className="fab fa-facebook"></i>
        </button>

        <button className="icon" onClick={signInWithGoogle}>
          <i className="fab fa-google"></i>
        </button>

        <button className="icon">
          <i className="fab fa-apple"></i>
        </button>
      </div>

      <div className="have-account">
        Already have an account?{" "}
        <Link to="/login">
          <span>Login</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUpFormUser;
