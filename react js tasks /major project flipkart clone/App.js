import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "Header";
import Products from "Products";
import Cart from "Cart";
import Todos from "Todos";
import AuthPage from "AuthPage";
import "App.css";

const App = () => {
  const [cart, setCart] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  // ✅ Load user from localStorage on refresh
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setCurrentUser(loggedInUser);
    }
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
    localStorage.setItem("cart", JSON.stringify([cart, product]));
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // ✅ Load cart items on refresh
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  return (
    <div>
      <Header cartCount={cart.length} currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Routes>
        <Route path="" element={<Products addToCart={addToCart} />} />
        <Route path="cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="todos" element={<Todos />} />
        <Route path="auth" element={<AuthPage setCurrentUser={setCurrentUser} />} />
        <Route path="testing" element={<h2 style={{ textAlign: "center" }}>🔧 Testing Page</h2>} />
      </Routes>
    </div>
  );
};

export default App;

