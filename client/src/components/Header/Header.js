import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import styles from "../Header/Header.module.css";

function Header() {
  const { user } = useContext(AuthContext);
  console.log(user, "user");
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

        {!user && (
          <>
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
          </>
        )}

        {user && (
          <>
            <li>
              <NavLink className={setNavStyle} to={"/my-ads"}>
                My Ads
              </NavLink>
            </li>
            <li>
              <NavLink className={setNavStyle} to={"/logout"}>
                Logout
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Header;
