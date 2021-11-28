import { filerByCategory } from "../store/root-reducer/action/actionProduct";
import { useDispatch } from "react-redux";
export default function NavbarList(props) {
  const dispatch = useDispatch();
  const HANDLE_FILTER_CATEGORY = () => {
    dispatch(
      filerByCategory({
        id: props.category.id,
        name: props.category.name,
      })
    );
  };
  return (
    <li className="nav-item">
      <a
        className="nav-link"
        id="navbarDropdown1"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        onClick={() => HANDLE_FILTER_CATEGORY()}
      >
        {props.category.name}
        <span className="fa fa-angle-down"></span>
      </a>
    </li>
  );
}
