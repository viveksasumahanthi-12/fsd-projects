import React from "react";
import "cart.css";

const Cart = ({ cart, removeFromCart }) => {
  // ✅ Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-container">
      <h2>🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <div className="cart-details">
                <h5>{item.title}</h5>
                <p>Price: ₹{item.price}</p>
              </div>

              <div className="cart-actions">
                <button
                  className="remove"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
                <button className="buy">Buy Now</button>
              </div>
            </div>
          ))}

          {/* ✅ Total Price */}
          <div className="cart-total">
            <h3>Total: ₹{totalPrice}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

