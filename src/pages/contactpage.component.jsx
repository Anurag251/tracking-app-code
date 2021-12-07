import React, { useEffect } from "react";
import ContactForm from "../components/contact-form.component";
import ContactInfos from "../components/contact-infos.component";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="contact-page">
      <ContactForm />
      <ContactInfos />
    </div>
  );
};

export default ContactPage;
