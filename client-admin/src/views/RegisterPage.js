import { useState } from "react";
import postAPI from "../helper/PostAPI";
import CSS from "./Create/index.css";
export default function RegisterPage() {
  let [inputUser, setInput] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  const [loadingForm, setLoading] = useState();
  let handleInputNewAdmin = (e) => {
    let input = {
      ...inputUser,
    };
    input[e.target.name] = e.target.value;
    setInput(input);
  };
  let handleSubmitFormRegister = (e) => {
    e.preventDefault();
    console.log(inputUser);
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
            placeholder="Username"
          ></input>
        </div>
        <div className="form-group">
          <input
            onChange={handleInputNewAdmin}
            type="email"
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
            type="number"
            className="form-control item"
            name="phone"
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
