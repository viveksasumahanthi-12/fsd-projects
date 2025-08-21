import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "auth.css";

const Register = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const existingUser = JSON.parse(localStorage.getItem("currentUser"));
    if (existingUser) {
      navigate("");
    }
  }, [navigate]);

  const handleRegister = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // 🔒 Validate phone number: exactly 10 digits
    if (!/^[6-9]\d{9}$/.test(phone)) {
      toast.error("⚠️ Enter a valid 10-digit phone number starting with 6-9");
      return;
    }

    if (users.find((u) => u.phone === phone)) {
      toast.error("⚠️ Phone number already exists. Try another.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("⚠️ Passwords do not match");
      return;
    }

    const newUser = { name, phone, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    toast.success("🎉 Registration successful! Please login.");
    navigate("login");
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleRegister} className="auth-box">
        <h2>Register</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

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

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

