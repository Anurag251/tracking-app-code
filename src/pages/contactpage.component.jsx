import React, { useEffect } from "react";
import ContactForm from "../components/contact-form.component";
import ContactInfos from "../components/contact-infos.component";

const ContactPage = ({ setError, setErrorMessage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="contact-page">
      <ContactForm setError={setError} setErrorMessage={setErrorMessage} />
      <ContactInfos />
    </div>
  );
};

export default ContactPage;
