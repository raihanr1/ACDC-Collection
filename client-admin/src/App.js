import "./App.css";
import CreateProduct from "./views/Create/CreateProduct";
import HomePage from "./views/HomePage";
import RegisterPage from "./views/RegisterPage";
import CreateCategoryPage from "./views/CreateCategoryPage";
import LoginPage from "./views/Login/LoginPage";
import { Routes, Route } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import LoginAuth from "./components/LoginAuth";
import Navbar from "./components/NavbarPage";
import DetailPage from "./views/DetailPage";
import { useEffect } from "react";
import { useSelector } from "react-redux";
function App() {
  const { loginSuccess } = useSelector((state) => state.user);
  useEffect(() => {
    console.log("");
  }, [loginSuccess]);
  return (
    <>
      {localStorage.getItem("access_token") &&
      localStorage.getItem("access_token") !== "undefined" &&
      localStorage.getItem("access_token") !== null ? (
        <Navbar />
      ) : null}
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <HomePage />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <LoginAuth>
              <LoginPage />
            </LoginAuth>
          }
        ></Route>
        <Route path="/:slug" element={<DetailPage />}></Route>
        <Route
          path="/register"
          element={
            <RequireAuth>
              <RegisterPage />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/new-category"
          element={
            <RequireAuth>
              <CreateCategoryPage />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/new-product"
          element={
            <RequireAuth>
              <CreateProduct />
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </>
  );
  // return <LoginPage />;
  // return <CreateCategoryPage />;
  // return <HomePage />;
  // return <CreateProduct />;
  // return <RegisterPage />;
}

export default App;
