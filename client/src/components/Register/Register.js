import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { register } from "../../services/authService";
import styles from "../../common/css/Forms.module.css";

function Register() {
  const { userLogin } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    repass: "",
  });

  function inputChangeHandler(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[inputName] = inputValue;
    setRegisterData(newRegisterData);

    setError(null);
  }

  async function onSubmitFormHandler(e) {
    e.preventDefault();
    try {
      if (!registerData.email || !registerData.password || !registerData.repass) {
        throw new Error("All fields are requred!");
      }

      if (registerData.password !== registerData.repass) {
        throw new Error("Passwords don't match!");
      }

      const result = await register(registerData.email.trim(), registerData.password.trim());
      userLogin(result);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div className={styles.main}>
      <form className={styles.form} onSubmit={onSubmitFormHandler}>
        <h1>Register</h1>

        <label>
          Email *
          <input
            type="text"
            placeholder="Email"
            id="email"
            name="email"
            value={registerData.email}
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
            value={registerData.password}
            onChange={inputChangeHandler}
          />
        </label>

        <label>
          Repeat Password *
          <input
            type="password"
            placeholder="Repeat Password"
            id="repass"
            name="repass"
            value={registerData.repass}
            onChange={inputChangeHandler}
          />
        </label>

        {error && <p className={styles.error}>{error}</p>}

        <button>Register</button>

        <p>
          Already have an account?
          <Link to={"/login"}> Sign In</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
