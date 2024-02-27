import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Checkout = () => {
  const { cart, totalAmount } = useContext(CartContext);

  return (
    <div>
      <h1>Checkout</h1>
      <div>
        <h2>Order Summary</h2>
        <ul style={{ listStyleType: "none" }}>
          {cart.map((item) => (
            <li key={item.id}>
              <h4>{item.name}</h4>
              <span> ${item.price}</span>
              <span> Quantity: {item.quantity}</span>
            </li>
          ))}
        </ul>
        <h3>Total: ${totalAmount}</h3>
      </div>
      <div>
        <button>Place Order</button>
      </div>
    </div>
  );
};

export default Checkout;
