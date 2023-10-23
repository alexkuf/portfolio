import { useState } from "react";
import Skills from "./skills";
import Education from "./education";
import Experience from "./experience";

const FILE_PDF = "https://portfolio-c14m.onrender.com/resumePdf.pdf";
const FILE_WORD = "https://portfolio-c14m.onrender.com/Resume.rar";

const AboutMe = () => {
  const [isActive, setIsActive] = useState("Skills");

  const handleClick = (el) => {
    setIsActive(el);
  };

  const downloadFilePdf = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <div className="container">
      <div className="pageHome row">
        <div
          className="col-sm"
          style={{ maxWidth: "350px", height: "600", borderRadius: "18px" }}
        >
          <img
            src="images/p7.png"
            id="imageAbout"
            alt="Alex"
            style={{
              maxWidth: "100%",
              maxHeight: "900px",
              borderRadius: "18px",
            }}
          />
        </div>
        <div className="col-sm" id="aboutmy">
          <h1 className="mt-3">About me:</h1>
          <p
            className="fs-4"
            style={{
              maxWidth: "550px",
              borderRadius: "18px",
            }}
          >
            Name: Alex, Age: 45 <br />
            At first it was a hobby. Then I really liked it. When I work on
            code, time limits disappear for me. I want to combine business with
            pleasure
          </p>
          <div className="">
            <div className="tab-titles tab-skils d-flex">
              <p
                className={
                  isActive === "Skills"
                    ? "tab-links active-link me-4 fs-6 pe-auto"
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
      <div className="container text-center mt-5">
        <button
          onClick={() => {
            downloadFilePdf(FILE_PDF);
          }}
          className="btn btn-outline-info m-3"
        >
          Download Resume
          <i className="bi bi-file-earmark-pdf ms-2"></i>
        </button>
        <button
          onClick={() => {
            downloadFilePdf(FILE_WORD);
          }}
          className="btn btn-outline-info"
        >
          Download Resume
          <i className="bi bi-file-earmark-word ms-2"></i>
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
