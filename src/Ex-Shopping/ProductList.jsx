import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList({ products, onGetProduct, onAddToCart }) {
  const handleGetProduct = (product) => {
    onGetProduct(product);
  };

  return (
    <div className="row">
      {products.map((value) => {
        return (
          <div key={value.id} className="col-md-4">
            <ProductItem
              product={value}
              onGetProduct={handleGetProduct}
              onAddToCart={onAddToCart}
            />
          </div>
        );
      })}
    </div>
  );
}
