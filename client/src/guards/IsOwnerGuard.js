import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { getCarById } from "../services/carsService";

const AuthGuard = ({ children }) => {
  const { user } = useContext(AuthContext);
  const { productId } = useParams();
  const [adData, setAdData] = useState(null);

  useEffect(() => {
    getCarById(productId)
      .then((data) => {
        setAdData(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [productId]);

  if (adData && user._id !== adData._ownerId) {
    return <Navigate to={`/details/${productId}`} replace />;
  }

  return children ? children : <Outlet />;
};

export default AuthGuard;
