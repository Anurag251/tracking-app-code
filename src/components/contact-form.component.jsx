import React, { useState } from "react";
import { urls } from "../url";
import CustomButton from "./custom-button.component";
import CustomInput from "./custom-input.component";
import PageBanner from "./page-banner.component";

const ContactForm = ({ setError, setErrorMessage }) => {
  const [values, setValues] = useState({
    displayName: "",
    email: "",
    mobileNumber: "",
    subject: "",
    yourMessage: "",
  });

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
    <div className="contact-form">
      <PageBanner title="Contact Us"></PageBanner>
      <h3>Send Your Message</h3>
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
          name="subject"
          label="Subject"
          handleChange={handleChange}
          value={values.subject}
          required
        />

        <CustomInput
          label=" "
          placeholder="Your Message*"
          name="yourMessage"
          handleChange={handleChange}
          value={values.yourMessage}
          textArea
        />

        <CustomButton noArrow type="submit">
          Submit
        </CustomButton>
      </form>
    </div>
  );
};

export default ContactForm;
