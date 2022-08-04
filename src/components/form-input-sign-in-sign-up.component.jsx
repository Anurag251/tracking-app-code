import React from "react";

const FormInputSignInSignUp = ({ label, handleChange, ...otherProps }) => {
  return (
    <div className="form-input">
      <label htmlFor="">
        <input onChange={handleChange} {...otherProps} />
        <span
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </span>
        <div className={`${otherProps.value.length ? "glow" : ""} line`}></div>
      </label>
    </div>
  );
};

export default FormInputSignInSignUp;
