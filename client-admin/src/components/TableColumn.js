import "./TableColumnStyle.css";
import { deleteProduct } from "../store/root-reducer/action/actionProduct";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
export default function TableColumn(props) {
  let currencyIDR = `Rp. ${props.product.price.toLocaleString("id-ID")},00`;
  const { errorDelete, loadingDelete } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const handleDeletedProduct = () => {
    dispatch(deleteProduct(props.product.id));
  };
  return (
    <tr>
      <td>{props.product.name}</td>
      <td>{props.product.description}</td>
      <td>{currencyIDR}</td>
      <td>
        <img
          src={props.product.mainImg}
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
          }}
        ></img>
      </td>
      <td>{props.product.Category.name}</td>

      <td>
        <Link to={`/new-product?id=${props.product.id}`}>
          <span className="badge bg-success">Edit</span>
        </Link>
        <span
          style={{ marginLeft: "5px" }}
          className="badge bg-success"
          onClick={() => handleDeletedProduct()}
        >
          Delete
        </span>
        <Link to={`/${props.product.slug}`} product={props.product}>
          <span className="badge bg-success" style={{ marginLeft: "5px" }}>
            See Detail
          </span>
        </Link>
      </td>
    </tr>
  );
}
