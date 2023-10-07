import ReactWhatsapp from "react-whatsapp";
const Footer = () => {
  return (
    <div
      className={
        "d-flex flex-column text-secondary bg-dark border-top border-primary"
      }
      data-bs-theme="dark"
    >
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-2 my-1">
        <span
          className="d-flex mb-3 mb-md-0 m-auto align-items-center "
          style={{ width: "25rem" }}
        >
          Alex © {new Date().getFullYear()}
          <ul className="nav row-md-4 list-unstyled d-flex ms-3">
            <li className="ms-3 fs-5">
              <a
                className="text-body-secondary"
                href="https://www.linkedin.com/in/alex-karavansky-8ba840220"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </li>
            <li className="ms-3 fs-5">
              <a
                className="text-body-secondary"
                href="https://github.com/alexkuf"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>
            </li>
            <li className="ms-3 fs-5">
              <a
                className="text-body-secondary"
                href="https://www.facebook.com/denis.kuzin.9404"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <ReactWhatsapp
              number="0542055549"
              className="ms-3 fs-5 text-primary border border-0 bg-transparent"
              id="reactWhatsapp"
            >
              <i className="hover bi bi-whatsapp" id="reactWhatsapp"></i>
            </ReactWhatsapp>
            <li className="ms-3 fs-5">
              <a
                className="text-body-secondary"
                href="https://www.facebook.com/denis.kuzin.9404"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-envelope-at"></i>
              </a>
            </li>
          </ul>
        </span>
      </footer>
    </div>
  );
};

export default Footer;
