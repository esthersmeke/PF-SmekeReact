import "./Cart.css";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const Cart = () => {
  const { cart, clearCart, totalQuantity, totalAmount } =
    useContext(CartContext);

  function sendOrder() {
    console.log("Items: ", cart);

    const selectedItems = cart.map((item) => ({
      title: item.title,
      price: item.price,
    }));

    const order = {
      buyer: {
        name: "María",
        phone: "555555",
        email: "me@mail.com",
      },
      items: selectedItems,
      total: totalAmount,
    };

    const db = getFirestore();

    const orderCollection = collection(db, "orders");

    console.log(order);

    addDoc(orderCollection, order).then(({ id }) =>
      console.log("ID de la orden: ", id)
    );
  }

  if (totalQuantity === 0) {
    return (
      <div>
        <h1>No items in the cart</h1>
        <Link to="/products" className="Option">
          Products
        </Link>
      </div>
    );
  }

  return (
    <div>
      {cart.map((p) => (
        <CartItem key={p.title} {...p} />
      ))}
      <h3>Total: ${totalAmount}</h3>
      <button onClick={() => clearCart()} className="Button">
        Clear Cart
      </button>
      <button className="btn-pay" onClick={sendOrder}>
        Checkout
      </button>
    </div>
  );
};
export default Cart;
