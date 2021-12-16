export default function CardDetail(props) {
  return (
    <div className="col-lg-3 col-md-4 col-6">
      <a className="d-block mb-4 h-100">
        <img className="img-fluid img-thumbnail" src={props.image} alt=""></img>
      </a>
    </div>
  );
}
