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
          className="col-sm"
          style={{ maxWidth: "450px", borderRadius: "18px" }}
        >
          <img
            src="images/p10.jpg"
            alt="Alex"
            style={{ maxWidth: "350px", borderRadius: "18px" }}
          />
        </div>
        <div className="col-sm">
          <h1 className="mt-3">About me:</h1>
          <p
            className="fs-4"
            style={{ maxWidth: "550px", borderRadius: "18px" }}
          >
            I then it was a hobby. Then I really liked it. When I work on code,
            time limits disappear for me. I want to combine business with
            pleasure
          </p>
          <div>
            <div className="tab-titles d-flex">
              <p
                className={
                  isActive === "Skills"
                    ? "tab-links active-link me-5 fs-5"
                    : "tab-links me-5 fs-5"
                }
                onClick={() => handleClick("Skills")}
              >
                Skills
              </p>
              <p
                className={
                  isActive === "Education"
                    ? "tab-links active-link me-5 fs-5"
                    : "tab-links me-5 fs-5"
                }
                onClick={() => handleClick("Education")}
              >
                Education
              </p>
              <p
                className={
                  isActive === "Experience"
                    ? "tab-links active-link me-5 fs-5"
                    : "tab-links me-5 fs-5"
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
