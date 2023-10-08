const Myproject = () => {
  return (
    <div className="container">
      <h2 className="mb-5 text-center">My Projects</h2>
      <div className="row" id="projectcard">
        <div className="col mb-5">
          <div
            className="card border border-1 rounded-2 p-3 text-center border-primary m-auto"
            style={{ width: "18rem", height: "25rem", background: "black" }}
          >
            <img
              src="https://user-images.githubusercontent.com/111445523/270298255-a4ea90de-1121-4d42-9485-156fd04aa9fe.JPG"
              alt=""
            />
            <h5 className="mt-3">Fenestra project menage</h5>
            <p className="mt-3">
              This is a closed application intended for small companies. Only
              company employees have the opportunity to enter the application.
              Only administrator can add users.
              <a
                className="ms-3"
                href="https://github.com/alexkuf/FinalyProject-HakerU"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </p>
          </div>
        </div>
        <div className="col mb-5">
          <div
            className="card border border-1 rounded-2 p-3 text-center border-primary m-auto"
            style={{ width: "18rem", height: "25rem", background: "black" }}
          >
            <img
              src="https://user-images.githubusercontent.com/111445523/242813779-59ea1865-cbfd-400c-9a70-2b2eb08771a4.JPG"
              alt=""
            />
            <h5 className="mt-3">Tester project React module</h5>
            <p className="mt-3">
              Test project! Users will be able to post their tickets to the
              manager
            </p>
            <a
              className="ms-3"
              href="https://github.com/alexkuf/React-vision-site"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>
        <div className="col mb-5">
          <div
            className="card border border-1 rounded-2 p-3 text-center border-primary m-auto"
            style={{ width: "18rem", height: "25rem", background: "black" }}
          >
            <img
              src="https://user-images.githubusercontent.com/111445523/238339468-85f7ada2-1421-414b-8537-7cded88867bf.jpg"
              alt=""
            />
            <h5 className="mt-3">Menage Task list project</h5>
            <p className="mt-3">
              An application will help the tasks from day to day
            </p>
            <a
              className="ms-3"
              href="https://github.com/alexkuf/React-to-do"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myproject;