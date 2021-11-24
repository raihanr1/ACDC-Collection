import CSS from "./TableColumnStyle.css";

export default function TableColumn(props) {
  let currencyIDR = `Rp. ${props.product.price.toLocaleString("id-ID")},00`;
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
      <td>-</td>

      <td>
        <span className="badge bg-success">Edit</span>
        <span style={{ marginLeft: "5px" }} className="badge bg-success">
          Delete
        </span>
      </td>
    </tr>
  );
}
