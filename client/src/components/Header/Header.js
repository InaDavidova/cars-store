import { Link, NavLink } from "react-router-dom";
import styles from "../Header/Header.module.css";

function Header() {
  const setNavStyle = ({ isActive }) => {
    return isActive ? styles["activeLink"] : undefined;
  };

  return (
    <nav>
      <Link to={"/"}>MotoShop</Link>

      <ul>
        <li>
          <NavLink className={setNavStyle} to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={setNavStyle} to={"/login"}>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink className={setNavStyle} to={"/register"}>
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
