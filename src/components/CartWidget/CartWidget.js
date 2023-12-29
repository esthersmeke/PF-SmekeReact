import cart from "./assets/cart.png";

const CartWidget = () => {
  return (
    <div>
      <a href="/">
        <img src={cart} alt="cart-widget" />0
      </a>
    </div>
  );
};

export default CartWidget;
