import React, { useState } from "react";
import 'auth.css';

export default function AuthPage() {
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate: only numbers, length 10, starts with 6–9
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!phoneRegex.test(number)) {
      setError("Enter a valid 10-digit mobile number starting with 6–9.");
      return;
    }

    setError("");
    alert("OTP sent to " + number);
  };

  return (
    <div className="auth-container">
      <h2>Register / Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Mobile Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button type="submit">Send OTP</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

