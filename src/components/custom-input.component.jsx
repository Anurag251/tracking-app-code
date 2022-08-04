import React from "react";

const CustomInput = ({ textArea, label, handleChange, ...otherProps }) => (
  <div className={`${textArea ? "custom-text-area" : ""} custom-input`}>
    {label ? (
      <label>
        {textArea ? (
          <textarea
            className="input text-area"
            onChange={handleChange}
            {...otherProps}
          ></textarea>
        ) : (
          <input className="input" onChange={handleChange} {...otherProps} />
        )}

        <span
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </span>
      </label>
    ) : null}
  </div>
);

export default CustomInput;
