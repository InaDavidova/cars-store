import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { login } from "../../services/authService";
import styles from "../../common/css/Forms.module.css";

function Login() {
  const { userLogin } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function inputChangeHandler(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[inputName] = inputValue;
    setLoginData(newLoginData);

    setError(null);
  }

  async function onSubmitFormHandler(e) {
    e.preventDefault();
    try {
      if (!loginData.email || !loginData.password) {
        throw new Error("Both fields are requred!");
      }
      const result = await login(loginData.email.trim(), loginData.password.trim());
      userLogin(result);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div className={styles.main}>
      <form className={styles.form} onSubmit={onSubmitFormHandler}>
        <h1>Login</h1>

        <label>
          Email *
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            value={loginData.email}
            onChange={inputChangeHandler}
          />
        </label>

        <label>
          Password *
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            value={loginData.password}
            onChange={inputChangeHandler}
          />
        </label>

        {error && <p className={styles.error}>{error}</p>}

        <button>Log In</button>

        <p>
          Don't have an account?
          <Link to={"/register"}> Sign up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
