import { useState } from "react";
import postAPI from "../../helper/PostAPI";
import CSS from "./index.css";
export default function LoginPage() {
  const [userInput, setInput] = useState({
    email: "",
    password: "",
  });
  let handleUserLogin = (e) => {
    let input = {
      ...userInput,
    };
    input[e.target.name] = e.target.value;
    setInput(input);
  };
  let handleSubmitFormLogin = (e) => {
    e.preventDefault();
    console.log(userInput, ">>> asup gengs");
  };
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
                        type="email"
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
                      <button
                        className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                        type="submit"
                      >
                        Sign in
                      </button>
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
