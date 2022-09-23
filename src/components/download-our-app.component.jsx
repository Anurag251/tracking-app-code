import React from "react";
import { ArrowIcon } from "./icons.component";

const DownloadOurAppComponent = () => {
  return (
    <div className="download-our-app">
      <div className="image-section">
        <img
          src="https://simplify360.com/wp-content/uploads/2021/05/Banner-image-with-App-review-1-768x768.png"
          alt=""
        />
      </div>

      <div className="content-section">
        <h2 className="title">Download Our App</h2>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
          velit qui cum culpa nisi, deserunt quibusdam harum deleniti. Quo
          doloremque dolorum nisi exercitationem labore sapiente quidem, ea amet
          officiis dolor!
        </p>

        <div className="download-now">
          <span>Download Now</span>

          <div className="icon">
            <ArrowIcon />
          </div>
        </div>

        <div className="download-area">
          <div className="button-group">
            <a href="#">
              <button>
                <i className="fab fa-app-store"></i>

                <div className="text">
                  <span>Available on the</span>

                  <h5>App Store</h5>
                </div>
              </button>
            </a>

            <a href="#">
              <button>
                <i className="fab fa-google-play"></i>

                <div className="text">
                  <span>Get it on</span>

                  <h5>Google Play</h5>
                </div>
              </button>
            </a>

            <a href="#">
              <button>
                <i className="fab fa-windows"></i>

                <div className="text">
                  <span>Download from</span>

                  <h5>Window Store</h5>
                </div>
              </button>
            </a>
          </div>

          <div className="qr">
            <img
              src="https://www.qrcode-monkey.com/img/default-preview-qr.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadOurAppComponent;
