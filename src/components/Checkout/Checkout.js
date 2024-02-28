// Checkout.js
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../index";

import CheckoutForm from "../CheckoutForm/CheckoutForm";
import {
  Timestamp,
  writeBatch,
  collection,
  addDoc,
  doc,
} from "firebase/firestore";

import "./Checkout.css"; // Importa Checkout.css desde el directorio actual

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");

  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      // Verificar si el total es un número válido
      if (isNaN(total)) {
        throw new Error("Total is not a valid number.");
      }

      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        // Asegúrate de que total sea un número válido antes de asignarlo
        total: total || 0, // Si total es undefined, asigna 0 como valor predeterminado
        date: Timestamp.fromDate(new Date()),
      };

      const batch = writeBatch(db);

      const ordersCollection = collection(db, "orders");
      const newOrderRef = doc(ordersCollection);

      batch.set(newOrderRef, objOrder); // Corrige el typo en objOrder

      cart.forEach((item) => {
        const productRef = doc(db, "products", item.id);

        batch.update(productRef, {
          stock: item.stock - item.quantity,
        });

        if (item.stock - item.quantity < 0) {
          throw new Error(`${item.name} is out of stock.`);
        }
      });
      await batch.commit();
      setOrderId(newOrderRef.id);
      clearCart();
    } catch (error) {
      console.error("Error processing order: ", error);
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Processing Order...</h1>;
  }

  if (orderId) {
    return <h1>Your order ID is: {orderId}</h1>;
  }

  console.log("Total en Checkout:", total);

  return (
    <div>
      <h1>Checkout</h1>
      {/* Pasa la prop total al componente CheckoutForm */}
      <CheckoutForm onConfirm={createOrder} total={total} />
    </div>
  );
};

export default Checkout;
