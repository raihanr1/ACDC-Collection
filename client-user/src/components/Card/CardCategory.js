import "./index.css";
import { useDispatch } from "react-redux";
import { filerByCategory } from "../../store/root-reducer/action/actionProduct";
export default function CardCategory(props) {
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
    <div className="col-md-4">
      <div className="profile-card">
        <img
          src={props.category.mainImg}
          className="img img-responsive"
          onClick={() => HANDLE_FILTER_CATEGORY()}
        ></img>
        <div className="profile-name">{props.category.name}</div>
        <div className="profile-icons">
          <a>
            <i className="fa"></i>
          </a>
          <a>
            <i className="fa"></i>
          </a>
          <a>
            <i className="fa"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
