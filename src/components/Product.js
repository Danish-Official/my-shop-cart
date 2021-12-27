import React from "react";

export default function Product(props) {
  return (
    <div className="row mt-3">
      <div className="col-5">
        <h2>
          {props.ProductEle.name}
          <span className="badge bg-secondary ms-2">
            ₹ {props.ProductEle.price}
          </span>
        </h2>
      </div>
      <div className="col-4">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic outlined example"
        >
          <button type="button" className="btn btn-outline-primary" onClick={() => props.decrQuantity(props.indx)}>
            -
          </button>
          <button type="button" className="btn btn-outline-primary">
            {props.ProductEle.quantity}
          </button>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => props.incrQuantity(props.indx)}
          >
            +
          </button>
        </div>
      </div>
      <div className="col">
        {"₹ " + props.ProductEle.quantity * props.ProductEle.price}
      </div>
      <button className="col-2 btn btn-danger" onClick={()=>{props.removeItem(props.indx)}}>Remove</button>
    </div>
  );
}
