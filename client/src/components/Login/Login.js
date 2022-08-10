import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { login } from "../../services/authService";
import styles from "../Login/Login.module.css";

function Login() {
  const { userLogin } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const result = await login("peter@abv.bg", "123456");
      userLogin(result);
      navigate("/");
    }
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div className={styles.main}>
      <form>
        <h1>Login</h1>

        <label>
          Username
          <input type="text" placeholder="Username" id="username" />
        </label>

        <label>
          Password
          <input type="password" placeholder="Password" id="password" />
        </label>

        <button>Log In</button>
      </form>
    </div>
  );
}

export default Login;
