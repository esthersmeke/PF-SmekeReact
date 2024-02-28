import cart from "./assets/cart.png";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="CartWidget">
      <img className="CartImg" src={cart} alt="cart-widget" />
      <span style={{ display: totalQuantity > 0 ? "block" : "none" }}>
        {totalQuantity}
      </span>
    </Link>
  );
};

export default CartWidget;
