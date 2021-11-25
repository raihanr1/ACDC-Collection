import "./index.css";

export default function Navbar() {
  return (
    <div className="container-fluid px-0">
      <nav className="navbar navbar-expand-md navbar-light bg-white p-0">
        <a className="navbar-brand mr-4">
          <strong>BBBootstrap</strong>
        </a>
        <button
          className="navbar-toggler mr-3"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                id="navbarDropdown1"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Products<span className="fa fa-angle-down"></span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="navbarDropdown2"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Resources<span className="fa fa-angle-down"></span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="navbarDropdown3"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Customers<span className="fa fa-angle-down"></span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
