import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CustomButton from "../components/custom-button.component";
import CustomInput from "../components/custom-input.component";
import { urls } from "../url";

const JobApplyPageComponent = ({ setError, setErrorMessage }) => {
  const [values, setValues] = useState({
    displayName: "",
    email: "",
    mobileNumber: "",
    jobTitle: "",
    resume: "",
  });

  const [allErrors, setAllErrors] = useState(null);

  const [fileImage, setFileImage] = useState();

  const { jobId } = useParams();

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
    formData.append("full_name", values.displayName);
    formData.append("email", values.email);
    formData.append("phone_number", values.mobileNumber);
    formData.append("career", parseInt(jobId));
    formData.append("document", fileImage);

    fetch(urls + `job-application/`, {
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
        document.querySelector("#inputFile").value = null;
        setAllErrors(null);
        setErrorMessage("Successfully Apply To The Job");
        setError(true);

        setValues((previousInputs) => ({
          ...previousInputs,
          displayName: "",
          email: "",
          mobileNumber: "",
          jobTitle: "",
          resume: "",
        }));

        setTimeout(() => {
          setErrorMessage("");
          setError(true);
        }, 5000);
      })
      .catch((err) => {
        const errors = JSON.parse(err.message);
        setAllErrors(errors);
      });
  };

  return (
    <div className="job-apply-page">
      <div className="inner-sec">
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
            {allErrors !== null ? (
              <React.Fragment>
                {allErrors.email !== undefined ? (
                  <p
                    style={{
                      color: "red",
                      margin: "0 5px",
                      marginTop: "-30px",
                      padding: 0,
                    }}
                  >
                    {allErrors.email}
                  </p>
                ) : null}
              </React.Fragment>
            ) : null}

            <CustomInput
              type="number"
              name="mobileNumber"
              label="Mobile Number*"
              handleChange={handleChange}
              value={values.mobileNumber}
              required
            />

            {allErrors !== null ? (
              <React.Fragment>
                {allErrors.phone_number !== undefined ? (
                  <p
                    style={{
                      color: "red",
                      margin: "0 5px",
                      marginTop: "-30px",
                      padding: 0,
                    }}
                  >
                    {allErrors.phone_number}
                  </p>
                ) : null}
              </React.Fragment>
            ) : null}

            <div className="custom-input">
              <input
                id="inputFile"
                type="file"
                className="input"
                onChange={(e) => {
                  setFileImage(e.target.files[0]);
                }}
                required
              />
            </div>

            {allErrors !== null ? (
              <React.Fragment>
                {allErrors.document !== undefined ? (
                  <p
                    style={{
                      color: "red",
                      margin: "0 5px",
                      marginTop: "-30px",
                      padding: 0,
                    }}
                  >
                    {allErrors.document}
                  </p>
                ) : null}
              </React.Fragment>
            ) : null}

            <CustomButton noArrow type="submit">
              Submit
            </CustomButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApplyPageComponent;
