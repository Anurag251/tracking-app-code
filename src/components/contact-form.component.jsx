import React, { useState } from "react";
import CustomButton from "./custom-button.component";
import CustomInput from "./custom-input.component";
import PageBanner from "./page-banner.component";

const ContactForm = () => {
  const [values, setValues] = useState({
    displayName: "",
    email: "",
    mobileNumber: "",
    yourMessage: "",
  });
  // const [displayName, setDisplayName] = useState("");
  // const [email, setEmail] = useState("");
  // const [mobileNumber, setMobileNumber] = useState("");
  // const [yourMessage, setYourMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  };

  // const updateDisplayName = (event) => {
  //   setDisplayName(event.target.value);
  // };

  // const updateEmail = (event) => {
  //   setEmail(event.target.value);
  // };

  // const updateMobileNumber = (event) => {
  //   setMobileNumber(event.target.value);
  // };

  // const updateYourMessage = (event) => {
  //   setYourMessage(event.target.value);
  // };

  // const handleSubmit = () => {
  //   if (updateDisplayName === "") {
  //     setError("Please Enter Your Name");
  //   }
  //   if (email === "") {
  //     setError("Please Enter Your Email Address");
  //   }
  //   if (yourMessage === "") {
  //     setError("Please Enter Your Message");
  //   }
  // };

  return (
    <>
      <p className="error">{error}</p>
      <div className="contact-form">
        <PageBanner title="Contact Us"></PageBanner>
        <h3>Send Your Message</h3>
        <form action="">
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
            type="text"
            name="mobileNumber"
            label="Mobile Number"
            handleChange={handleChange}
            value={values.mobileNumber}
            required
          />

          <CustomInput
            type="text-area"
            label="Your Message*"
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
    </>
  );
};

export default ContactForm;
