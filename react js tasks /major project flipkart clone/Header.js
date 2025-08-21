import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import "../header.css";

const Header = ({ cartCount, currentUser, setCurrentUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      localStorage.removeItem("loggedInUser");
      setCurrentUser(null);
      navigate("/auth"); // redirect to login/register page
    }
  };

  return (
    <header className="header">
      {/* Left: Logo */}
      <div className="logo">
        <Link to="/">Vivek Flipkart Clone</Link>
      </div>

      {/* Center: Nav Links */}
      <nav className="nav-links">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/todos" className="nav-item">Todos</Link>
        <Link to="/testing" className="nav-item">Testing</Link>
      </nav>

      {/* Right: Search + User + Cart */}
      <div className="header-right">
        <div className="search-box">
          <input type="text" placeholder="Search products..." />
          <button>Search</button>
        </div>

        {currentUser ? (
          <div className="user-section">
            <FaUser className="user-icon" />
            <span className="user-name">Hello, {currentUser.name}</span>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        ) : (
          <div className="auth-links">
            <Link to="/auth" className="nav-item">Login</Link>
            <Link to="/auth" className="nav-item">Register</Link>
          </div>
        )}

        <Link to="/cart" className="cart-link">
          <FaShoppingCart className="cart-icon" />
          <span className="cart-text">Cart</span>
          <span className="cart-count">{cartCount}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
