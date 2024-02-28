import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Argá
      </Link>
      <div className="Categories">
        <ul>
          <li>
            <NavLink
              to={`/`}
              className={({ isActive }) =>
                isActive ? "ActiveOption" : "Option"
              }
            >
              HOME
            </NavLink>
          </li>

          <li>
            <NavLink
              to={`/products`}
              className={({ isActive }) =>
                isActive ? "ActiveOption" : "Option"
              }
            >
              PRODUCTS
            </NavLink>
          </li>
        </ul>
      </div>

      <CartWidget className="bag-icon" />
    </nav>
  );
};

export default NavBar;
