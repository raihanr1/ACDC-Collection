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
import ProductImagePage from "./views/ProductImage/ProductImagePage";
function App() {
  return (
    <>
      {localStorage.getItem("access_token") ? <Navbar /> : null}
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
