import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Site Name
      </a>
      <ul>
        <li>
          <a href="/celulares">Celulares</a>
        </li>
        <li>
          <a href="/tablets">Tablets</a>
        </li>
        <li>
          <a href="/notebooks">Notebooks</a>
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
