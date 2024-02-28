import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  cart: [],
  totalQuantity: 0, // Agregar totalQuantity al contexto
  clearCart: () => {}, // Agregar clearCart al contexto
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0); // Estado para mantener el totalQuantity
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // Calcula el total de artículos y el monto total cada vez que cambia el carrito
    const newTotalQuantity = cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
    const newTotalAmount = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotalQuantity(newTotalQuantity);
    setTotalAmount(newTotalAmount);
  }, [cart]);

  const addItem = (item, quantity) => {
    setCart((prev) => [...prev, { ...item, quantity }]);
    setTotalQuantity((prevTotal) => prevTotal + quantity); // Actualiza totalQuantity
    console.log("Cart Qty: " + totalQuantity);
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setTotalQuantity(totalQuantity - 1);
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
      value={{
        cart,
        totalQuantity,
        totalAmount,
        addItem,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
