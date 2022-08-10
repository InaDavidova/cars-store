import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { register } from "../../services/authService";
import styles from "../Login/Login.module.css"

function Register() {
  const { userLogin } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await register("azpppeteer@abv.bg", "123456");
        delete result.password;

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
        <h1>Register</h1>

        <label>
          Username
          <input type="text" placeholder="Username" id="username" />
        </label>

        <label>
          Password
          <input type="password" placeholder="Password" id="password" />
        </label>

        <label>
          Password
          <input type="password" placeholder="Repeat Password" id="repass" />
        </label>

        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;
