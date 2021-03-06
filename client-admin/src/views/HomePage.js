import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import TableColumn from "../components/TableColumn";
import TableRow from "../components/TableRow";
import { useSelector, useDispatch } from "react-redux";
import { getAllProduct } from "../store/root-reducer/action/actionProduct";
import { useEffect } from "react";
import { ACTION_USER_LOGIN_SUCCESS } from "../store/root-reducer/action-type/actionType";
export default function HomePage() {
  const { loginSuccess } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { product, isLoadingProduct, isErrorProduct } = useSelector(
    (state) => state.product
  );
  useEffect(() => {
    dispatch(getAllProduct());
  }, []);
  let handleLogOutUser = (e) => {
    localStorage.removeItem("access_token");
    dispatch({
      type: ACTION_USER_LOGIN_SUCCESS,
      payload: false,
    });
  };
  if (isErrorProduct) {
    return (
      <div
        style={{
          display: "flex",
          marginTop: "250px",
          marginLeft: "270px",
          justifyContent: "center",
          height: "689px",
        }}
      >
        <div
          className="spinner-grow text-info mr-2"
          role="status"
          style={{ width: "200px", height: "200px" }}
        >
          <p
            style={{ textAlign: "center", color: "#e6fff7", marginTop: "90px" }}
          >
            Error BOSS!!!
          </p>
        </div>
      </div>
    );
  }
  if (isLoadingProduct) {
    return (
      <div
        style={{
          display: "flex",
          marginTop: "250px",
          marginLeft: "270px",
          justifyContent: "center",
          height: "689px",
        }}
      >
        <div
          className="spinner-grow text-info mr-2"
          role="status"
          style={{ width: "200px", height: "200px" }}
        >
          <p
            style={{ textAlign: "center", color: "#e6fff7", marginTop: "90px" }}
          >
            Loading...
          </p>
        </div>
      </div>
    );
  }
  return (
    <div id="main">
      <header className="mb-3">
        <nav className="navbar navbar-expand navbar-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item dropdown me-3">
                    <a
                      className="nav-link active dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-bell bi-sub fs-4 text-gray-600"></i>
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li>
                        <h6 className="dropdown-header">Option</h6>
                      </li>
                      <li>
                        <Link to="/new-category" className="dropdown-item">
                          Create New Category
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="dropdown">
                  <a data-bs-toggle="dropdown" aria-expanded="false">
                    <div className="user-menu d-flex">
                      <div className="user-name text-end me-3">
                        <p
                          className="mb-0 text-sm text-gray-600"
                          style={{ marginTop: "10px" }}
                        >
                          Administrator
                        </p>
                      </div>
                      <div className="user-img d-flex align-items-center">
                        <div className="avatar avatar-md">
                          <img src="https://image.flaticon.com/icons/png/512/742/742751.png" />
                        </div>
                      </div>
                    </div>
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li>
                      <h6 className="dropdown-header">Hello !</h6>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={() => {
                          handleLogOutUser();
                        }}
                      >
                        <i className="icon-mid bi bi-box-arrow-left me-2"></i>
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="page-heading">
        <div className="page-title">
          <div className="row">
            <div className="col-12 col-md-6 order-md-1 order-last">
              <h3>Product Table</h3> <br></br>
            </div>
          </div>
        </div>
        <section className="section">
          <div className="card" style={{ width: "1400px" }}>
            <div className="card-header">Product List</div>
            <div className="card-body">
              <table className="table table-striped" id="table1">
                <thead>
                  <tr>
                    <TableRow />
                  </tr>
                </thead>
                <tbody>
                  {product.map((el) => {
                    return <TableColumn key={el.id} product={el} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
