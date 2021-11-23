import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import DeleteProduct from "./views/Delete/DeleteProduct";
import ReadProduct from "./views/Read/GetProduct";
import CreateProduct from "./views/Create/CreateProduct";
import UpdateProduct from "./views/Update/UpdateProduct";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    {<CreateProduct />}, {<DeleteProduct />}, {<ReadProduct />},{" "}
    {<UpdateProduct />}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
