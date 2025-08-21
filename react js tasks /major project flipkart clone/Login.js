import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "auth.css";

const Login = ({ setUser }) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const existingUser = JSON.parse(localStorage.getItem("currentUser"));
    if (existingUser) {
      navigate("");
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (!/^[6-9]\d{9}$/.test(phone)) {
      toast.error("⚠️ Enter a valid 10-digit phone number");
      return;
    }

    const existing = users.find(
      (u) => u.phone === phone && u.password === password
    );

    if (existing) {
      setUser(existing);
      localStorage.setItem("currentUser", JSON.stringify(existing));
      toast.success(`🎉 Hello, ${existing.name}! Welcome to Vivek Flipkart Clone`);
      navigate("/");
    } else {
      toast.error("❌ Invalid phone number or password");
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleLogin} className="auth-box">
        <h2>Login</h2>

        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
          required
          maxLength="10"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

