import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { login, register } from "../../services/authService";

function Login() {
  const { userLogin } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const result = await login("peter@abv.bg", "123456");
      console.log(result);
      userLogin(result);
      navigate("/");
    }
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  });

  return <form>Login page</form>;
}

export default Login;
