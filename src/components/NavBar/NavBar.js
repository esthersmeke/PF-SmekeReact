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
              to={`/category/clothing`}
              className={({ isActive }) =>
                isActive ? "ActiveOption" : "Option"
              }
            >
              CLOTHING
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/category/shoes`}
              className={({ isActive }) =>
                isActive ? "ActiveOption" : "Option"
              }
            >
              SHOES
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/category/sale`}
              className={({ isActive }) =>
                isActive ? "ActiveOption" : "Option"
              }
            >
              SALE
            </NavLink>
          </li>
        </ul>
      </div>

      <CartWidget className="bag-icon" />
    </nav>
  );
};

export default NavBar;
