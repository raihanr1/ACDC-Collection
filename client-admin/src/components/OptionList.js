import { Link } from "react-router-dom";

export default function OptionList() {
  return (
    <>
      <li className="sidebar-item active">
        <Link to="/register" className="sidebar-link">
          <i className="bi bi-grid-fill"></i>
          <span>Register Admin</span>
        </Link>
      </li>
      <li className="sidebar-item active">
        <Link to="/new-product" className="sidebar-link">
          <i className="bi bi-grid-fill"></i>
          <span>Create New Product</span>
        </Link>
      </li>
    </>
  );
}
