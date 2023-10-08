const Myservices = () => {
  return (
    <div className="container pt-3 servicescard">
      <h2 className="mb-5">My Services</h2>
      <div className="row">
        <div className="col-sm-4 mb-5 ">
          <div className="card-body border border-1 rounded-2 p-3 text-center border-primary m-3">
            <i className="bi bi-code-slash fs-2"></i>
            <h5 className="card-title">Web development</h5>
            <p className="card-text">
              HTML building and maintaining websites and web applications.
            </p>
          </div>
        </div>

        <div className="col-sm-4 mb-5">
          <div className="card-body border border-1 rounded-2 p-3 text-center border-primary m-3">
            <i className="bi bi-app-indicator fs-2"></i>
            <h5 className="card-title">Web-app front end</h5>
            <p className="card-text">
              HTML, CSS, JavaScript, React.js - Wide range of tasks and
              technologies
            </p>
          </div>
        </div>
        <div className="col-sm-4 mb-5">
          <div className="card-body border border-1 rounded-2 p-3 text-center border-primary m-3">
            <i className="bi bi-app-indicator fs-2"></i>
            <h5 className="card-title">Web-app back end</h5>
            <p className="card-text">
              Node.js, MongoDB, SQL - Йuick access to data will give you an
              advantage
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myservices;
