import { CardDetailImage } from "../components/CardDetail";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProduct } from "../store/root-reducer/action/actionProduct";
import { useEffect } from "react";
import { useParams } from "react-router";
export default function DetailProduct() {
  const params = useParams();
  const { product } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProduct());
  }, []);
  let productFiltered = [];
  if (product.length) {
    productFiltered = product.filter((el) => el.slug === params.slug);
  }
  return (
    <div className="container">
      <h1 className="fw-light text-center text-lg-start mt-4 mb-0">
        {productFiltered.length ? productFiltered[0].Category.name : null}
      </h1>

      <hr className="mt-2 mb-5"></hr>

      <div className="row text-center text-lg-start">
        {productFiltered.length
          ? productFiltered.map((el) => {
              let data = el.Images.map((el) => {
                return <CardDetailImage key={el.id} image={el.imgUrl} />;
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
  );
}
