import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, totalQuantity, totalAmount } =
    useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div>
        <h1>No items in the cart</h1>
        <Link to="/" className="Option">
          Products
        </Link>
      </div>
    );
  }

  return (
    <div>
      {cart.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}
      <h3>Total: ${totalAmount}</h3>
      <button onClick={() => clearCart()} className="Button">
        Clear Cart
      </button>
      <Link to="/checkout" className="Option">
        Checkout
      </Link>
    </div>
  );
};
export default Cart;
