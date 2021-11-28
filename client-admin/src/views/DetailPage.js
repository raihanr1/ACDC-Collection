import CardDetail from "../components/CardDetail";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
export default function DetailPage(props) {
  const params = useParams();
  const { product } = useSelector((state) => state.product);
  let productFiltered = [];
  if (product.length) {
    productFiltered = product.filter((el) => el.slug === params.slug);
  }
  return (
    <>
      <div style={{ marginLeft: "390px", marginTop: "30px" }}>
        <h1 className="fw-light text-center text-lg-start mt-4 mb-0">
          {productFiltered.length ? productFiltered[0].Category.name : null}
        </h1>

        <hr className="mt-2 mb-5"></hr>

        <div className="row text-center text-lg-start">
          {productFiltered.length
            ? productFiltered.map((el) => {
                let data = el.Images.map((el) => {
                  return <CardDetail key={el.id} image={el.imgUrl} />;
                });
                return data;
              })
            : null}
        </div>
        <p>{productFiltered[0] ? productFiltered[0].name : null}</p>
        <p>Description :</p>
        <p>{productFiltered[0] ? productFiltered[0].description : null}</p>
        <p>Price :</p>
        <p>
          {productFiltered[0]
            ? `Rp. ${productFiltered[0].price.toLocaleString()}, 00`
            : null}
        </p>
      </div>
    </>
  );
}
