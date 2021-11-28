import { Link } from "react-router-dom";

export default function CardProduct(props) {
  return (
    <div className="col-xs-12 col-sm-6 col-md-4">
      <div className="image-flip">
        <div className="mainflip flip-0">
          <div className="frontside">
            <div className="card">
              <div className="card-body text-center">
                <p>
                  <img
                    className=" img-fluid"
                    src={props.product.mainImg}
                    alt="card image"
                    style={{ width: "300px", height: "300px" }}
                  ></img>
                </p>
                <h4 className="card-title">{props.product.name}</h4>
                <p className="card-text">
                  Price : {`Rp. ${props.product.price.toLocaleString()}, 00`}
                </p>
                <Link
                  className="btn btn-primary btn-sm"
                  to={`/${props.product.slug}`}
                >
                  <i className="fa fa-plus">See Detail</i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
