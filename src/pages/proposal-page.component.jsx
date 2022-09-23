import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CustomButton from "../components/custom-button.component";
import CustomInput from "../components/custom-input.component";
import { urls } from "../url";

const ProposalPageComponent = ({ setError, setErrorMessage }) => {
  const [values, setValues] = useState({
    email: "",
    mobileNumber: "",
    document: "",
    role: "",
    others: "",
  });

  const [role, setRole] = useState("");

  const [allErrors, setAllErrors] = useState(null);

  const [fileImage, setFileImage] = useState();

  const [inputShow, setInputShow] = useState(false);

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
    formData.append("email", values.email);
    formData.append("contact_number", values.mobileNumber);
    if (fileImage) {
      formData.append("document", fileImage);
    }
    formData.append("proposed_role", role);
    formData.append("others", values.others);

    fetch(urls + `proposal/`, {
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
        document.querySelector("#selectRole").value = 1;
        document.querySelector("#inputFile").value = null;
        setInputShow(false);
        setAllErrors(null);
        setErrorMessage("Proposal Send");
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
          <h2>Proposal</h2>

          <form onSubmit={handleSubmit}>
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
              label="Mobile Number"
              handleChange={handleChange}
              value={values.mobileNumber}
              required
            />

            {allErrors !== null ? (
              <React.Fragment>
                {allErrors.contact_number !== undefined ? (
                  <p
                    style={{
                      color: "red",
                      margin: "0 5px",
                      marginTop: "-30px",
                      padding: 0,
                    }}
                  >
                    {allErrors.contact_number}
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

            <div className="custom-input">
              <select
                id="selectRole"
                onChange={(e) => {
                  if (e.target.value === "Others") {
                    setInputShow(true);
                  } else {
                    setInputShow(false);
                    // setOthers(null);
                  }

                  setRole(e.target.value);
                }}
                required
              >
                <option value="1">Select Role</option>
                <option value="Vendor">Vendor</option>
                <option value="Rider">Rider</option>
                <option value="Customer">Customer</option>
                <option value="Others">Others</option>
              </select>
            </div>

            {allErrors !== null ? (
              <React.Fragment>
                {allErrors.proposed_role !== undefined ? (
                  <p
                    style={{
                      color: "red",
                      margin: "0 5px 10px",
                      marginTop: "-30px",
                      padding: 0,
                    }}
                  >
                    Please Select Role
                  </p>
                ) : null}
              </React.Fragment>
            ) : null}

            {inputShow ? (
              <CustomInput
                type="text"
                name="others"
                label="Others*"
                handleChange={handleChange}
                value={values.others}
              />
            ) : null}

            {allErrors !== null ? (
              <React.Fragment>
                {allErrors.Others !== undefined ? (
                  <p
                    style={{
                      color: "red",
                      margin: "0 5px 10px",
                      marginTop: "-30px",
                      padding: 0,
                    }}
                  >
                    {allErrors.Others}
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

export default ProposalPageComponent;
