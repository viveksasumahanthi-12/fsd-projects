import React from "react";
import "./../productcard.css";

const ProductCard = ({ product, addToCart }) => {
  if (!product) return null;

  const mrp = Math.round(product.price);
  const off = Math.round(product.discountPercentage || 0);
  const discounted = Math.max(1, Math.round(mrp * (1 - off / 100)));

  return (
    <div className="product-card">
      <img
        src={product.thumbnail}
        alt={product.title || "product"}
        loading="eager"
        decoding="sync"
        onError={(e) => {
          e.currentTarget.src =
            "https://via.placeholder.com/300x200?text=No+Image";
        }}
      />
      <h4 className="p-title">{product.title}</h4>
      <p className="p-desc">{product.description}</p>

      <div className="price-row">
        <span className="price">₹{discounted}</span>
        {off > 0 && (
          <>
            <span className="mrp">₹{mrp}</span>
            <span className="off">{off}% off</span>
          </>
        )}
      </div>

      <button className="btn add-btn" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
