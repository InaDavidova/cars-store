import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import styles from "../Header/Header.module.css";
import logo from "../../common/images/logo.png";

function Header() {
  const { user } = useContext(AuthContext);
  const setNavStyle = ({ isActive }) => {
    return isActive ? styles["activeLink"] : undefined;
  };

  return (
    <nav>
      <Link to={"/"}><img className={styles.logo} src={logo} alt="logo"/></Link>

      <ul>
        <li>
          <NavLink className={setNavStyle} to={"/"}>
            Home
          </NavLink>
        </li>
        
        <li>
          <NavLink className={setNavStyle} to={"/catalog"}>
            Catalog
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
