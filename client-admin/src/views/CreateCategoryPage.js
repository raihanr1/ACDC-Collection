import { useState } from "react";
import CSS from "./Create/index.css";
export default function CreateCategoryPage() {
  let [name, setInput] = useState("");
  const [loadingForm, setLoading] = useState(false);
  let handleInputNewCategory = (e) => {
    name = e.target.name;
  };
  let handleSubmitFormCategory = (e) => {
    e.preventDefault();
  };
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
