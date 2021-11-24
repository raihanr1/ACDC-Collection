import "./index.css";
import useFetch from "../../helper/HooksFetch";
import { useState } from "react";
import postAPI from "../../helper/PostAPI";
export default function CreateProduct() {
  let [category, isLoadingFetch, isError] = useFetch("/Category");
  const [loadingForm, setLoadingForm] = useState(false);
  let [inputProduct, setInput] = useState({
    name: "",
    description: "",
    price: "",
    mainImg: "",
    CategoryId: "",
  });
  let handleInputNewProduct = (e) => {
    let form = e.target.name;
    let input = {
      ...inputProduct,
    };
    if (Number(e.target.value)) {
      input[form] = +e.target.value;
    } else {
      input[form] = e.target.value;
    }
    setInput(input);
  };
  let handleSubmitFormProduct = (e) => {
    e.preventDefault();
    setLoadingForm(false);
  };
  if (isError) {
    return (
      <div
        style={{
          display: "flex",
          marginTop: "250px",
          justifyContent: "center",
          height: "689px",
        }}
      >
        <div
          className="spinner-grow text-info mr-2"
          role="status"
          style={{ width: "200px", height: "200px" }}
        >
          <p
            style={{ textAlign: "center", color: "#e6fff7", marginTop: "90px" }}
          >
            Error BOSS!!!
          </p>
        </div>
      </div>
    );
  }
  if (isLoadingFetch) {
    return (
      <div
        style={{
          display: "flex",
          marginTop: "250px",
          justifyContent: "center",
          height: "689px",
        }}
      >
        <div
          className="spinner-grow text-info mr-2"
          role="status"
          style={{ width: "200px", height: "200px" }}
        >
          <p
            style={{ textAlign: "center", color: "#e6fff7", marginTop: "90px" }}
          >
            Loading...
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="registration-form">
      <form onSubmit={handleSubmitFormProduct}>
        <span>
          <h2 style={{ textAlign: "center", color: "black" }}>
            Create New product
          </h2>
        </span>
        <div className="form-group">
          <input
            onChange={handleInputNewProduct}
            type="text"
            className="form-control item"
            name="name"
            placeholder="Name"
            value={inputProduct.name}
          ></input>
        </div>
        <div className="form-group">
          <input
            onChange={handleInputNewProduct}
            type="text"
            className="form-control item"
            name="description"
            placeholder="Description"
            value={inputProduct.description}
          ></input>
        </div>
        <div className="form-group">
          <input
            onChange={handleInputNewProduct}
            type="number"
            className="form-control item"
            name="price"
            placeholder="Price"
            value={inputProduct.price}
          ></input>
        </div>
        <div className="form-group">
          <input
            onChange={handleInputNewProduct}
            type="text"
            className="form-control item"
            name="mainImg"
            placeholder="Image-URL"
            value={inputProduct.mainImg}
          ></input>
        </div>
        <div className="form-group">
          <select
            onChange={handleInputNewProduct}
            className="form-select"
            aria-label="Default select example"
            name="CategoryId"
          >
            {category.map((el) => {
              return (
                <option key={el.id} value={el.id}>
                  {el.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          {loadingForm ? (
            <button
              className="btn btn-block create-account"
              type="button"
              disabled
            >
              <span
                className="spinner-grow spinner-grow-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Loading...
            </button>
          ) : (
            <button type="submit" className="btn btn-block create-account">
              Add
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
