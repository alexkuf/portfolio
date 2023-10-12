import ReactWhatsapp from "react-whatsapp";
const Mylinks = () => {
  return (
    <ul className="mylinks col-md-4 list-unstyled d-flex">
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
    </ul>
  );
};
export default Mylinks;
