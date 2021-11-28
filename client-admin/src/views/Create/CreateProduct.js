import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import MultipleValueTextInput from "react-multivalue-text-input";
import Swal from "sweetalert2";
import {
  createProduct,
  getCategory,
  updateProduct,
} from "../../store/root-reducer/action/actionProduct";
import {
  ACTION_USER_CREATE_SUCCESS,
  ACTION_USER_CREATE_ERROR,
  ACTION_USER_UPDATE_ERROR,
  ACTION_USER_UPDATE_SUCCESS,
} from "../../store/root-reducer/action-type/actionType";
import { Navigate, NavLink } from "react-router-dom";
export default function CreateProduct(props) {
  const { search } = useLocation();
  const [button, setButton] = useState();
  const [value, setValue] = useState();
  let [inputProduct, setInput] = useState({
    name: "",
    description: "",
    price: "",
    mainImg: "",
    CategoryId: "",
    reserveImage: [],
  });
  const dispatch = useDispatch();
  const {
    successCreate,
    loadingCreate,
    errorCreate,
    category,
    product,
    successUpdate,
    loadingUpdate,
    errorUpdate,
  } = useSelector((state) => state.product);
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
  useEffect(() => {
    if (successCreate) {
      dispatch({
        type: ACTION_USER_CREATE_SUCCESS,
        payload: false,
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "New product has been created",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }, [successCreate]);
  useEffect(() => {
    if (successUpdate) {
      dispatch({
        type: ACTION_USER_UPDATE_SUCCESS,
        payload: false,
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Product has been updated",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }, [successUpdate]);
  useEffect(() => {
    if (errorCreate) {
      setInput({
        name: "",
        description: "",
        price: "",
        mainImg: "",
        CategoryId: "",
        reserveImage: [],
      });
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text:
          errorCreate.message !== "Unexpected token < in JSON at position 0"
            ? errorCreate.message
            : "Invalid input",
      });
      dispatch({
        type: ACTION_USER_CREATE_ERROR,
        payload: null,
      });
    }
  }, [errorCreate]);
  useEffect(() => {
    if (errorUpdate) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorUpdate.message ? errorUpdate.message : "Something wrong !",
      });
      dispatch({
        type: ACTION_USER_UPDATE_ERROR,
        payload: null,
      });
    }
  }, [errorUpdate]);
  const handleOnItemAdded = (item, allItem) => {
    let input = {
      ...inputProduct,
      reserveImage: allItem,
    };
    setInput(input);
  };

  const handleOnItemDeleted = (item, allItem) => {
    let input = {
      ...inputProduct,
      reserveImage: allItem,
    };
    setInput(input);
  };
  let handleSubmitFormProduct = (e) => {
    e.preventDefault();
    let id = search.slice(4);
    if (Number(id)) {
      dispatch(updateProduct(id, inputProduct));
    } else {
      if (!inputProduct.reserveImage.length) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Reserve image is required",
        });
      } else {
        dispatch(createProduct(inputProduct));
      }
    }
  };
  useEffect(() => {
    if (Number(search.slice(4))) {
      let [productData] = product.filter((el) => el.id === +search.slice(4));
      setInput({
        name: productData.name,
        description: productData.description,
        price: productData.price,
        mainImg: productData.mainImg,
        CategoryId: productData.CategoryId,
      });
      setValue(`${productData.CategoryId}`);
      setButton("Update");
    } else {
      setButton("Add");
      setValue("default");
    }
    dispatch(getCategory());
  }, []);
  if (loadingCreate || loadingUpdate) {
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
          <h2 style={{ textAlign: "center", color: "black" }}>Product</h2>
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
            placeholder="Main Image-URL"
            value={inputProduct.mainImg}
          ></input>
        </div>
        {search.slice(4) ? null : (
          <div className="form-group">
            <MultipleValueTextInput
              className="form-control item"
              onItemAdded={handleOnItemAdded}
              onItemDeleted={handleOnItemDeleted}
              name="item-input"
              placeholder="Add image for detail product and enter it !"
            />
          </div>
        )}
        <div className="form-group">
          <select
            onChange={handleInputNewProduct}
            className="form-control item"
            aria-label="Default select example"
            name="CategoryId"
            defaultValue={value}
          >
            <option value="default" disabled>
              --CATEGORY--
            </option>
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
          {loadingCreate || loadingUpdate ? (
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
              {button}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
