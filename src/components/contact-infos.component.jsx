import React from "react";

const ContactInfos = () => {
  return (
    <div className="contact-infos">
      <div>
        <h3>Address:</h3>

        <h5>Elites Logestics Pvt. Ltd. Dhumbarahi Kathmandu 04</h5>

        <h5>CSD: +977-015912468</h5>
        <h5>Operation: +977-9881111100</h5>
        <h5>Courier: +977-9881111200</h5>

        <h5>Email: trackingapp@gmail.com</h5>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h3>Find Us:</h3>

        <div className="google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.5869301866787!2d85.34190951512306!3d27.730037331101034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190b343d1cc1%3A0x57becd53ffdb7d29!2sElites%20Logistics!5e0!3m2!1sen!2snp!4v1663662854732!5m2!1sen!2snp"
            width="100%"
            height="200"
            style={{ borderRadius: "20px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactInfos;
