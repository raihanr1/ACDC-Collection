import { useEffect, useState } from "react";
import baseUrl from "../BaseUrlConfig";
import "./Create/index.css";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../store/root-reducer/action/actionUser";
import {
  ACTION_USER_REGISTER_SUCCESS,
  ACTION_USER_REGISTER_ERROR,
} from "../store/root-reducer/action-type/actionType";
export default function RegisterPage() {
  let [inputUser, setInput] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });
  const { successRegister, loadingRegister, errorRegister } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  let handleInputNewAdmin = (e) => {
    let input = {
      ...inputUser,
    };
    input[e.target.name] = e.target.value;
    setInput(input);
  };
  useEffect(() => {
    if (errorRegister) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorRegister.message,
      });
      dispatch({
        type: ACTION_USER_REGISTER_ERROR,
        payload: null,
      });
    }
  }, [errorRegister]);
  useEffect(() => {
    if (successRegister) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your account has been created",
        showConfirmButton: false,
        timer: 1500,
      });
      setInput({
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
      });
      dispatch({
        type: ACTION_USER_REGISTER_SUCCESS,
        payload: false,
      });
    }
  }, [successRegister]);
  let handleSubmitFormRegister = (e) => {
    e.preventDefault();
    dispatch(userRegister(inputUser));
  };
  return (
    <div className="registration-form">
      <form onSubmit={handleSubmitFormRegister}>
        <span>
          <h2 style={{ textAlign: "center", color: "black" }}>Register</h2>
        </span>
        <div className="form-group">
          <input
            onChange={handleInputNewAdmin}
            type="text"
            className="form-control item"
            name="username"
            placeholder="Username (optional)"
          ></input>
        </div>
        <div className="form-group">
          <input
            onChange={handleInputNewAdmin}
            type="text"
            className="form-control item"
            name="email"
            placeholder="Email"
          ></input>
        </div>
        <div className="form-group">
          <input
            onChange={handleInputNewAdmin}
            type="password"
            className="form-control item"
            name="password"
            placeholder="Password"
          ></input>
        </div>
        <div className="form-group">
          <input
            onChange={handleInputNewAdmin}
            type="text"
            className="form-control item"
            name="phoneNumber"
            placeholder="Mobile Number"
          ></input>
        </div>
        <div className="form-group">
          <input
            onChange={handleInputNewAdmin}
            type="text"
            className="form-control item"
            name="address"
            placeholder="Address"
          ></input>
        </div>
        <div className="form-group">
          {loadingRegister ? (
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
