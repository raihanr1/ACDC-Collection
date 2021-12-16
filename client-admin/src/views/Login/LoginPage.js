import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import Swal from "sweetalert2";
import { userLogin } from "../../store/root-reducer/action/actionUser";
import { Navigate, useNavigate } from "react-router-dom";
import {
  ACTION_USER_LOGIN_SUCCESS,
  ACTION_USER_LOGIN_ERROR,
} from "../../store/root-reducer/action-type/actionType";
export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userInput, setInput] = useState({
    email: "",
    password: "",
  });
  const { loginSuccess, loginLoading, loginError } = useSelector(
    (state) => state.user
  );
  useEffect(() => {
    if (loginError) {
      dispatch({
        type: ACTION_USER_LOGIN_ERROR,
        payload: null,
      });
      loginError.json().then((data) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: data.message,
        });
      });
    }
  }, [loginError]);
  useEffect(() => {
    if (loginSuccess) {
      localStorage.setItem("access_token", loginSuccess.access_token);
      dispatch({
        type: ACTION_USER_LOGIN_SUCCESS,
        payload: null,
      });
      if (loginSuccess === null) {
      }
    }
  }, [loginSuccess]);
  let handleUserLogin = (e) => {
    let input = {
      ...userInput,
    };
    input[e.target.name] = e.target.value;
    setInput(input);
  };
  let handleSubmitFormLogin = (e) => {
    e.preventDefault();
    dispatch(userLogin(userInput));
  };
  if (
    localStorage.getItem("access_token") &&
    localStorage.getItem("access_token") !== "undefined" &&
    !loginLoading
  ) {
    return <Navigate to="/" />;
  }
  return (
    <div className="container-fluid ps-md-0">
      <div className="row g-0">
        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
        <div className="col-md-8 col-lg-6">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                  <h3 className="login-heading mb-4">Welcome back!</h3>
                  <form onSubmit={handleSubmitFormLogin}>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        name="email"
                        placeholder="name@example.com"
                        onChange={handleUserLogin}
                      ></input>
                      <label>Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        name="password"
                        onChange={handleUserLogin}
                      ></input>
                      <label>Password</label>
                    </div>

                    <div className="d-grid">
                      {loginLoading ? (
                        <button
                          className="btn btn-primary"
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
                        <button
                          className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                          type="submit"
                        >
                          Sign in
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
