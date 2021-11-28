import { useEffect, useState } from "react";
import "./Create/index.css";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import { createNewCategory } from "../store/root-reducer/action/actionProduct";
import {
  ACTION_USER_CREATE_SUCCESS,
  ACTION_USER_CREATE_ERROR,
} from "../store/root-reducer/action-type/actionType";
export default function CreateCategoryPage() {
  let [newCategory, setInput] = useState({
    name: "",
    mainImg: "",
  });
  const { successCreate, loadingCreate, errorCreate } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();
  let handleInputNewCategory = (e) => {
    let input = {
      ...newCategory,
    };
    input[e.target.name] = e.target.value;
    setInput(input);
  };
  let handleSubmitFormCategory = (e) => {
    e.preventDefault();
    dispatch(createNewCategory(newCategory));
  };
  useEffect(() => {
    if (successCreate) {
      setInput({
        name: "",
        mainImg: "",
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Category has been created",
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch({
        type: ACTION_USER_CREATE_SUCCESS,
        payload: false,
      });
    }
  }, [successCreate]);
  useEffect(() => {
    if (errorCreate) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorCreate.message,
      });
      dispatch({
        type: ACTION_USER_CREATE_ERROR,
        payload: null,
      });
    }
  }, [errorCreate]);
  return (
    <div className="registration-form">
      <form onSubmit={handleSubmitFormCategory}>
        <span>
          <h2
            style={{
              textAlign: "center",
              color: "black",
              marginBottom: "20px",
            }}
          >
            New Category
          </h2>
        </span>
        <div className="form-group">
          <input
            onChange={handleInputNewCategory}
            type="text"
            className="form-control item"
            name="name"
            placeholder="Category"
          ></input>
        </div>
        <div className="form-group">
          <input
            onChange={handleInputNewCategory}
            type="text"
            className="form-control item"
            name="mainImg"
            placeholder="Image URL"
          ></input>
        </div>

        <div className="form-group">
          {loadingCreate ? (
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
