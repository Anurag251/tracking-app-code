import React, { useState, useEffect } from "react";
import CustomButton from "../components/custom-button.component";
import CustomInput from "../components/custom-input.component";
import { urls } from "../url";

const JobApplyPageComponent = ({ setError, setErrorMessage }) => {
  const [values, setValues] = useState({
    displayName: "",
    email: "",
    mobileNumber: "",
    jobTitle: "",
    yourMessage: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("fullname", values.displayName);
    formData.append("email", values.email);
    formData.append("mobile", values.mobileNumber);
    formData.append("subject", values.subject);
    formData.append("message", values.yourMessage);

    fetch(urls + "contactpage/", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((res) => {
        if (!res.ok) {
          return res.text().then((text) => {
            throw new Error(text);
          });
        }
        return res.json();
      })
      .then((data) => {
        setErrorMessage("Message send");
        setError(true);

        setValues((previousInputs) => ({
          ...previousInputs,
          displayName: "",
          email: "",
          mobileNumber: "",
          subject: "",
          yourMessage: "",
        }));

        setTimeout(() => {
          setErrorMessage("");
          setError(true);
        }, 5000);
      })
      .catch((err) => {
        const errors = JSON.parse(err.message);
        setErrorMessage(errors.mobile[0]);
        setError(false);

        setTimeout(() => {
          setErrorMessage("");
          setError(false);
        }, 5000);
      });
  };

  return (
    <div className="job-apply-page">
      <div className="contact-form">
        <h2>Apply Now</h2>
        <form onSubmit={handleSubmit}>
          <CustomInput
            type="text"
            name="displayName"
            label="Your Name*"
            handleChange={handleChange}
            value={values.displayName}
          />

          <CustomInput
            type="email"
            name="email"
            label="Email Address*"
            handleChange={handleChange}
            value={values.email}
            required
          />

          <CustomInput
            type="number"
            name="mobileNumber"
            label="Mobile Number"
            handleChange={handleChange}
            value={values.mobileNumber}
            required
          />

          <CustomInput
            type="text"
            name="jobTitle"
            label="Job Title"
            handleChange={handleChange}
            value={values.jobTitle}
            required
          />

          <CustomInput
            type="file"
            label=" "
            name="yourMessage"
            handleChange={handleChange}
            value={values.yourMessage}
            required
          />

          <CustomButton noArrow type="submit">
            Submit
          </CustomButton>
        </form>
      </div>
    </div>
  );
};

export default JobApplyPageComponent;
