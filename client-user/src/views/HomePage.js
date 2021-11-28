import CardCategory from "../components/Card/CardCategory";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import CardProduct from "../components/Card-Product/CardProduct";
import { fetchAllProduct } from "../store/root-reducer/action/actionProduct";
import { useState } from "react";
export default function HomePage() {
  const dispatch = useDispatch();
  const { product, category, productLoading, errorProduct, filter } =
    useSelector((state) => state);
  let productFilter = [];
  let theme = "This Is Our Product";
  if (filter !== "all" && filter !== null && product.length) {
    console.log(product, "ada emng???");
    theme = `This Is Our Product of ${filter.name}`;
    productFilter = product.filter((el) => el.CategoryId == filter.id);
  } else if (product.length) {
    productFilter = product;
  }
  useEffect(() => {
    dispatch(fetchAllProduct());
  }, [filter]);
  return (
    <>
      <div
        style={{
          maxWidth: "1200px",
          display: "flex",
          marginTop: "30px",
        }}
      >
        {category.map((el, i) => {
          if (i < 3) {
            return <CardCategory key={el.id} category={el} />;
          }
        })}
      </div>
      <div className="container" style={{ marginTop: "80px" }}>
        <p
          style={{
            textAlign: "center",
            marginBottom: "50px",
            fontFamily: "fantasy",
            fontSize: "50px",
          }}
        >
          {theme}
        </p>
        <div className="row">
          {productFilter.length
            ? productFilter.map((el, i) => {
                return <CardProduct key={el.id} product={el} />;
              })
            : null}
        </div>
      </div>
    </>
  );
}
