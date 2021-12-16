import { useEffect } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../store/root-reducer/action/actionProduct";
import NavbarList from "../NavbarListCategory";
import { useNavigate } from "react-router-dom";
import { filerByCategory } from "../../store/root-reducer/action/actionProduct";
export default function Navbar() {
  const { category, productLoading, errorProduct } = useSelector(
    (state) => state
  );
  const navigate = useNavigate();
  const handleHomePage = () => {
    dispatch(filerByCategory("all"));
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  if (productLoading) {
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
    <div className="container-fluid px-0">
      <nav className="navbar navbar-expand-md navbar-light bg-white p-0">
        <a className="navbar-brand mr-4" onClick={() => navigate("/")}>
          <strong>ACDC Collection</strong>
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
                onClick={() => handleHomePage()}
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
            {category.map((el) => {
              return <NavbarList key={el.id} category={el} />;
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
}
