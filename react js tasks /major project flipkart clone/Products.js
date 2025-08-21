import React, { useEffect, useState, useMemo } from "react";
import "./../productcard.css"; // keep as you already have

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => {
        if (!isMounted) return;
        setProducts(Array.isArray(data?.products) ? data.products : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
    return () => { isMounted = false; };
  }, []);

  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.category));
    return ["all", ...Array.from(set)];
  }, [products]);

  const shown = useMemo(() => {
    if (activeCategory === "all") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [products, activeCategory]);

  return (
    <div className="product-page">
      {/* Category Filter Bar */}
      <div className="category-bar">
        <h1 className="category-title">🛍️ Categories</h1>
        <div className="category-buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`cat-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="product-grid">
        {loading
          ? Array.from({ length: 12 }).map((_, i) => (
              <div className="product-card skeleton" key={i}>
                <div className="img-skel" />
                <div className="line-skel" />
                <div className="line-skel short" />
                <div className="btn-skel" />
              </div>
            ))
          : shown.map((product) => {
              const mrp = Math.round(product.price); // API price
              const off = Math.round(product.discountPercentage || 0);
              const discounted = Math.max(1, Math.round(mrp * (1 - off / 100)));

              return (
                <div className="product-card" key={product.id}>
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
            })}
      </div>
    </div>
  );
};

export default Products;
