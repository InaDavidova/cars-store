import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { login } from "../../services/authService";
import styles from "../common/css/Forms.module.css";

function Login() {
  const { userLogin } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await login("peter@abv.bg", "123456");
        userLogin(result);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  });

  return (
    <div className={styles.main}>
      <form className={styles.form}>
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
