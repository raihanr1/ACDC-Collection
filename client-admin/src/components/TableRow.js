export default function TableRow(props) {
  return (
    <>
      <th className="col-2" style={{ textAlign: "center" }}>
        Name
      </th>
      <th className="col-3" style={{ textAlign: "center" }}>
        Description
      </th>
      <th className="col-2" style={{ textAlign: "center" }}>
        Price
      </th>
      <th className="col-2" style={{ textAlign: "center" }}>
        Image
      </th>
      <th className="col-1" style={{ textAlign: "center" }}>
        Category
      </th>
      <th style={{ textAlign: "center" }}>Action</th>
    </>
  );
}
