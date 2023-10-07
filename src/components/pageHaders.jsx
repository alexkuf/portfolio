import React from "react";
import Typewriter from "typewriter-effect";
import Mylinks from "./links";
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
              borderRadius: "18px",
              marginBottom: "35px",
              justifyContent: "center",
            }}
          >
            <img
              src="images/p1.png"
              alt="Alex"
              style={{ maxWidth: "250px", borderRadius: "18px" }}
            />
          </div>
          <Mylinks />
        </div>
      </div>
    </div>
  );
};

export default PageHaders;
