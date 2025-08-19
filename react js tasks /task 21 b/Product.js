import React from "react";

const Product = ({ product }) => {
  return (
    <div className="product-container">
      <p><strong>Name:</strong> {product.name}</p>
      <p><strong>Price:</strong> ₹{product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Stock:</strong> {product.stock}</p>
    </div>
  );
};

export default Product;
