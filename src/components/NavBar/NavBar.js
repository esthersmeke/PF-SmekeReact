import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Argá
        {/* <a href="/" className="site-title">
          Argá
        </a> */}
      </Link>
      <div className="Categories">
        <NavLink
          to={`/category/celular`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Celulares
        </NavLink>
      </div>
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

      <CartWidget className="bag-icon" />
    </nav>
  );
};

export default NavBar;
