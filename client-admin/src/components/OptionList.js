import { Link } from "react-router-dom";

export default function OptionList() {
  return (
    <>
      <li className="sidebar-item active">
        <Link to="/register">
          <a className="sidebar-link">
            <i className="bi bi-grid-fill"></i>
            <span>Register Admin</span>
          </a>
        </Link>
      </li>
      <li className="sidebar-item active">
        <Link to="/new-product">
          <a className="sidebar-link">
            <i className="bi bi-grid-fill"></i>
            <span>Create New Product</span>
          </a>
        </Link>
      </li>
    </>
  );
}
