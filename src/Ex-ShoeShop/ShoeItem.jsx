import React from "react";

export default function ShoeItem({ product }) {
  console.log(product);
  return (
    <div className="card">
      <img src={product.image} className="card-img" alt="product" />
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-text">{product.price}$</p>
        <button className="btn btn-dark">Add to Cart</button>
      </div>
    </div>
  );
}
