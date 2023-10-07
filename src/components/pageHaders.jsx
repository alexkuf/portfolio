import React from "react";
import Typewriter from "typewriter-effect";
import ReactWhatsapp from "react-whatsapp";
const PageHaders = () => {
  return (
    <div className="container" id="home" style={{ paddingTop: "110px" }}>
      <div className="row">
        <div className="col-sm" id="ulHome">
          <p className="logo fs-4 me-2">Full Stack developer</p>
          <div className="d-flex fw-bold">
            <p className="fs-2 me-2">Hi,</p>
            <span className="text-primary fs-2" id="text">
              <Typewriter
                options={{
                  strings: ["I'm Alex", "I'm a Developer", ""],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          <p className="fs-2 mb-5 fw-bold">From Petach Tikva, Israel</p>
          <button type="button" className="btn btn-primary me-3 mb-5">
            Contact me
          </button>
          <button type="button" className="btn btn-primary mb-5">
            My projects
          </button>
          <div
            className="col-sm"
            id="imageHome"
            style={{
              maxWidth: "300px",
              borderRadius: "18px",
              marginBottom: "35px",
              justifyContent: "center",
            }}
          >
            <img
              src="images/p11.png"
              alt="Alex"
              style={{ maxWidth: "300px", borderRadius: "18px" }}
            />
          </div>
          <ul className="col-md-4 list-unstyled d-flex">
            <li className="link fs-4">
              <a
                className="text-white"
                href="https://www.linkedin.com/in/alex-karavansky-8ba840220"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </li>
            <li className="link ms-4 fs-4">
              <a
                className="text-white"
                href="https://github.com/alexkuf"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>
            </li>
            <li className="link ms-4 fs-4">
              <a
                className="text-white"
                href="https://www.facebook.com/denis.kuzin.9404"
                target="_blank"
                rel="noreferrer"
              >
                <i className="hover bi bi-facebook"></i>
              </a>
            </li>

            <ReactWhatsapp
              number="0542055549"
              className="ms-4 fs-4 mb-5 pb-5 text-white border border-0 bg-transparent"
              id="watsapp"
            >
              <i className="hover bi bi-whatsapp" id="watsapp"></i>
            </ReactWhatsapp>

            <li className="link ms-4 fs-4 mb-5 pb-5">
              <a
                className="text-white"
                href="/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-envelope-at"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageHaders;
