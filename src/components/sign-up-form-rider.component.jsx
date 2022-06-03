import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormInputSignInSignUp from "./form-input-sign-in-sign-up.component";

const SignUpFormRider = () => {
  const [formValues, setFormValuse] = useState({
    firstName: "",
    lastName: "",
    userEmail: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    address: "",
    licenseSnap: "",
    citezenshipNumber: "",
  });

  const [changeType, setChangeType] = useState("text");

  const [move, setMove] = useState(0);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValuse({ ...formValues, [name]: value });
  };

  const slidePrev = (e) => {
    setMove(e);
  };

  const slideNext = (e) => {
    setMove(e);
  };

  return (
    <div className="sign-up-form rider-forms">
      <h4>Sign Up as Rider</h4>

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
              <button
                onClick={(e) => {
                  e.preventDefault();

                  slideNext(100);
                }}
              >
                Next
              </button>
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
              <button
                onClick={(e) => {
                  e.preventDefault();
                  slidePrev(0);
                }}
              >
                Prev
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();

                  slideNext(200);
                }}
              >
                Next
              </button>
            </div>
          </div>

          <div className="form">
            <FormInputSignInSignUp
              type="number"
              name="citezenshipNumber"
              label="Citezenship Number*"
              handleChange={handleChange}
              value={formValues.citezenshipNumber}
            />

            <FormInputSignInSignUp
              type="file"
              name="licenseSnap"
              label="License Snap*"
              handleChange={handleChange}
              value={formValues.licenseSnap}
            />

            <div className="btn-group">
              <button
                onClick={(e) => {
                  e.preventDefault();

                  slidePrev(100);
                }}
              >
                Prev
              </button>
              <button>Submit</button>
            </div>
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
        Already have an account?{" "}
        <Link to="/login">
          <span>Login</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUpFormRider;
