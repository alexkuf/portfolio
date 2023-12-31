const Navbar = () => {
  const handleCollapse = () => {
    const nav = document.getElementById("navbarsExample05");
    nav.classList.remove("show");
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top"
      aria-label="Fifth navbar example"
    >
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample05"
          aria-controls="navbarsExample05"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <h3 className="logo text-white">Alex</h3>
        <div className="collapse navbar-collapse" id="navbarsExample05">
          <ul className="navbar-nav mb-2 mb-lg-0 w-100 justify-content-end me-5">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#home"
                onClick={handleCollapse}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={handleCollapse}>
                About me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services" onClick={handleCollapse}>
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#project" onClick={handleCollapse}>
                My projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={handleCollapse}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
