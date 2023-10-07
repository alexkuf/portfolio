import { useState } from "react";
import Skills from "./skills";
import Education from "./education";
import Experience from "./experience";

const AboutMe = () => {
  const [isActive, setIsActive] = useState("Skills");

  const handleClick = (el) => {
    setIsActive(el);
  };

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-sm me-5"
          style={{ maxWidth: "500px", height: "600", borderRadius: "18px" }}
        >
          <img
            src="images/p3.png"
            id="imageAbout"
            alt="Alex"
            style={{
              borderRadius: "18px",
            }}
          />
        </div>
        <div className="col-sm">
          <h1 className="mt-3">About me:</h1>
          <p
            className="fs-4"
            style={{
              maxWidth: "550px",
              borderRadius: "18px",
            }}
          >
            At first it was a hobby. Then I really liked it. When I work on
            code, time limits disappear for me. I want to combine business with
            pleasure
          </p>
          <div>
            <div className="tab-titles d-flex">
              <p
                className={
                  isActive === "Skills"
                    ? "tab-links active-link me-4 fs-6"
                    : "tab-links me-4 fs-6"
                }
                onClick={() => handleClick("Skills")}
              >
                Skills
              </p>
              <p
                className={
                  isActive === "Education"
                    ? "tab-links active-link me-4 fs-6"
                    : "tab-links me-4 fs-6"
                }
                onClick={() => handleClick("Education")}
              >
                Education
              </p>
              <p
                className={
                  isActive === "Experience"
                    ? "tab-links active-link me-4 fs-6"
                    : "tab-links me-4 fs-6"
                }
                onClick={() => handleClick("Experience")}
              >
                Experience
              </p>
            </div>
          </div>
          {isActive === "Skills" && <Skills />}
          {isActive === "Education" && <Education />}
          {isActive === "Experience" && <Experience />}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
