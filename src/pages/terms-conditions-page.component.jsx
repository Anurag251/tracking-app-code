import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Loading from "../components/loading.component";
import { urls } from "../url";

const TermsConditionsPageComponent = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [termsConditions, setTermsConditions] = useState([]);

  useEffect(() => {
    fetch(urls + "terms-conditions/")
      .then((res) => res.json())
      .then((data) => setTermsConditions(data));
  }, []);

  console.log(termsConditions);

  return (
    <div className="terms-conditions-page">
      {termsConditions[0] !== undefined ? (
        <React.Fragment>
          <h2>Terms & Conditions</h2>

          {termsConditions.map((termsCondition, idx) => (
            <React.Fragment key={termsCondition.id}>
              <Document
                file={termsCondition.document}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page pageNumber={1} />
              </Document>

              {/*  <p>
                Page {pageNumber} of {numPages}
              </p> */}

              {/* <embed
                className="pdf-file"
                height="100%"
                width="100%"
                src={
                  termsCondition.document !== null
                    ? React.IframeHTMLAttributes
                    : termsCondition.document
                }
              /> */}
            </React.Fragment>
          ))}
        </React.Fragment>
      ) : (
        "No Data Found"
      )}
    </div>
  );
};

export default TermsConditionsPageComponent;
