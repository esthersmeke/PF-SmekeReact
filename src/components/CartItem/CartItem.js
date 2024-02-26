import React, { useContext } from "react";
import "./CartItem.css";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ id, name, img, price, quantity }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="cart-item">
      <img src={img} alt={name} className="cart-item-img" />
      <div className="cart-item-details">
        <h3>{name}</h3>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
        <button onClick={() => removeItem(id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
