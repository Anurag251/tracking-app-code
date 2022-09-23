import React, { useState, useEffect } from "react";
import arrowImage from "../assets/images/icons/arrow-down.svg";
import Loading from "../components/loading.component";
import { urls } from "../url";

const FaqsPageComponent = () => {
  const [FAQS, setFAQS] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    fetch(urls + "faqs/")
      .then((res) => res.json())
      .then((data) => setFAQS(data));
  }, []);

  useEffect(() => {
    const faqBtns = document.querySelectorAll(".faq-btn");
    const faqBtnImg = document.querySelectorAll(".faq-btn-img");
    const faqBtnDesc = document.querySelectorAll(".faq-btn-desc");

    if (faqBtns[0] !== undefined || faqBtns[0] !== null) {
      faqBtns.forEach((faqBtn, idx) => {
        faqBtn.addEventListener("click", () => {
          faqBtnImg[idx].classList.toggle("active");
          faqBtnDesc[idx].classList.toggle("active");
        });
      });
    }
  });

  return (
    <div className="faq">
      <div className="title">
        <h4>FAQ</h4>
        <h2>Still have questions?</h2>
      </div>

      {FAQS[0] !== undefined ? (
        <div className="faq-area">
          <ul>
            {FAQS.map((FAQ) => (
              <li key={FAQ.id}>
                <img className="faq-btn-img" src={arrowImage} alt="" />

                <div>
                  <span className="title-sec faq-btn">{FAQ.title}</span>

                  <div className="desc-area faq-btn-desc">
                    <p>{FAQ.content}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        "No Data Found"
      )}
    </div>
  );
};

export default FaqsPageComponent;
