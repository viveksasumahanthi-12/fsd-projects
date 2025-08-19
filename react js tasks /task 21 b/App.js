import React, { useState } from "react";
import Product from "./components/Product";

function App() {
  // List of products (initially one)
  const [products, setProducts] = useState([
    { name: "Laptop", price: 50000, category: "Electronics", stock: 10 },
  ]);

  // Update existing product
  const [updateIndex, setUpdateIndex] = useState(null);
  const [updateData, setUpdateData] = useState({});

  // Add new product form data
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
  });

  // Toggle update form
  const handleUpdateClick = (index) => {
    setUpdateIndex(index);
    setUpdateData({ ...products[index] });
  };

  // Update product in list
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const updatedProducts = [...products];
    updatedProducts[updateIndex] = {
      ...updateData,
      price: Number(updateData.price),
      stock: Number(updateData.stock),
    };
    setProducts(updatedProducts);
    setUpdateIndex(null);
  };

  // Handle input change for update form
  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdateData({ ...updateData, [name]: value });
  };

  // Handle input change for new product form
  const handleNewChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  // Add new product to list
  const handleNewSubmit = (e) => {
    e.preventDefault();
    setProducts([
      ...products,
      {
        ...newProduct,
        price: Number(newProduct.price),
        stock: Number(newProduct.stock),
      },
    ]);
    setNewProduct({ name: "", price: "", category: "", stock: "" });
  };

  return (
    <div className="app-container">
      <h1>Product Inventory</h1>

      {products.map((prod, index) => (
        <div key={index} className="product-wrapper">
          <Product product={prod} />
          <button
            className="update-btn"
            onClick={() => handleUpdateClick(index)}
          >
            Update Product
          </button>

          {updateIndex === index && (
            <form className="product-form" onSubmit={handleUpdateSubmit}>
              <input
                type="text"
                name="name"
                value={updateData.name}
                onChange={handleUpdateChange}
                placeholder="Product Name"
                required
              />
              <input
                type="number"
                name="price"
                value={updateData.price}
                onChange={handleUpdateChange}
                placeholder="Price"
                required
              />
              <input
                type="text"
                name="category"
                value={updateData.category}
                onChange={handleUpdateChange}
                placeholder="Category"
                required
              />
              <input
                type="number"
                name="stock"
                value={updateData.stock}
                onChange={handleUpdateChange}
                placeholder="Stock"
                required
              />
              <button type="submit">Save Update</button>
            </form>
          )}
        </div>
      ))}

      <h2>Add New Product</h2>
      <form className="product-form" onSubmit={handleNewSubmit}>
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleNewChange}
          placeholder="Product Name"
          required
        />
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleNewChange}
          placeholder="Price"
          required
        />
        <input
          type="text"
          name="category"
          value={newProduct.category}
          onChange={handleNewChange}
          placeholder="Category"
          required
        />
        <input
          type="number"
          name="stock"
          value={newProduct.stock}
          onChange={handleNewChange}
          placeholder="Stock"
          required
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default App;
