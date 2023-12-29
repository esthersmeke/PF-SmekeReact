import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Argá
      </a>
      <ul>
        <li>
          <a href="/shop">Shop</a>
        </li>
        <li>
          <a href="/aboutUs">About Us</a>
        </li>
        <li>
          <a href="/journal">Journal</a>
        </li>
      </ul>
      {/* <h3>Ecommerce</h3>
      <div>
        <button>Celulares</button>
        <button>Tablets</button>
        <button>Notebooks</button>
      </div>*/}
      <CartWidget className="bag-icon" />
    </nav>
  );
};

export default NavBar;
