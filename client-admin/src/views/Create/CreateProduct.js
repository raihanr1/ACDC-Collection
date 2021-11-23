import "./index.css";
import React from "react";
class Create extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null,
      description: null,
      price: null,
      mainImg: null,
      CategoryId: null,
      category: [],
    };
  }
  componentDidMount = () => {
    fetch("http://localhost:3000/Category", {
      method: "GET",
    })
      .then((response) => {
        if (response.status !== 200) {
          throw response;
        }

        // console.log(response.data, ">>>data");
        return response.json();
      })
      .then((data) => {
        console.log(data, ">>>>");
        this.setState({
          category: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleChangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleChangeDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
  };
  handleChangePrice = (e) => {
    this.setState({
      price: e.target.value,
    });
  };
  handleChangeMainImg = (e) => {
    this.setState({
      mainImg: e.target.value,
    });
  };
  handleChangeCategoryId = (e) => {
    this.setState({
      CategoryId: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      name: this.state.name,
      price: this.state.price,
      mainImg: this.state.mainImg,
      CategoryId: this.state.CategoryId,
    };
    if (!obj.CategoryId) {
      obj.CategoryId = this.state.category[0].id;
    }
    console.log(obj, "asupp");
  };
  render() {
    let category = this.state.category.map((el) => {
      return (
        <option key={el.id} value={el.id}>
          {el.name}
        </option>
      );
    });
    return (
      <div>
        <h3>Create New Product</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label> <br></br>
          <input
            type="text"
            name="name"
            onChange={this.handleChangeName}
          ></input>{" "}
          <br></br>
          <label>Description</label> <br></br>
          <input
            type="text"
            onChange={this.handleChangeDescription}
          ></input>{" "}
          <br></br>
          <label>Price</label> <br></br>
          <input type="number" onChange={this.handleChangePrice}></input>{" "}
          <br></br>
          <label>Image URL</label> <br></br>
          <input type="text" onChange={this.handleChangeMainImg}></input>{" "}
          <br></br>
          <label>Category</label> <br></br>
          <select onChange={this.handleChangeCategoryId}>{category}</select>
          <br></br>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

export default Create;
