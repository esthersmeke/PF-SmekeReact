import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  totalQuantity: 0, // Agregar totalQuantity al contexto
  clearCart: () => {}, // Agregar clearCart al contexto
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0); // Estado para mantener el totalQuantity

  console.log(cart);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
      setTotalQuantity((prevTotal) => prevTotal + quantity); // Actualiza totalQuantity
      console.log("Cart Qty: " + totalQuantity);
    } else {
      alert("The product has already been added");
      // Màs bien lo que tendrìa que hacer es si ya hay, sumar la cantidad a los que ya estàn en el carrito
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
    console.log("Cart Qty: " + totalQuantity);
  };

  const clearCart = () => {
    setCart([]);
    setTotalQuantity(0); // Reinicia totalQuantity
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  return (
    <CartContext.Provider
      value={{ cart, totalQuantity, addItem, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
