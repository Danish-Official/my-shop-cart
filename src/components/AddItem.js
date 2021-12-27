import React, { Component } from "react";

export default class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {      //state as object
      productName: "",
      productPrice: 0,
    };
  }
  render() {
    return (
      <div>
        <form
          className="row m-4"
          onSubmit={(e) => { 
            e.preventDefault(); //prevents from reloading of page
            this.props.addItem(this.state.productName,Number(this.state.productPrice));
          }}
        >
          <div className="mb-3 col-4">
            <label htmlFor="Name" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              id="InputName"
              aria-describedby="emailHelp"
              name="productName"
              onChange={(e) => {
                this.setState({ productName: e.currentTarget.value });
              }}
              value={this.state.productName}
            />
          </div>
          <div className="col-4">
            <label htmlFor="Price" className="form-label">
              Product Price
            </label>
            <input
              type="Number"
              className="form-control"
              id="exampleInputPassword1"
              name="productPrice"
              onChange={(e) => {
                this.setState({ productPrice: Number(e.currentTarget.value) });
              }}
              value={this.state.productPrice}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary col-1"
            style={{
              height: "50px",
              position: "relative",
              top: "25px",
              marginLeft: "15px",
            }}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}
