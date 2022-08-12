import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const RouteGuard = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to={"/login"} replace />;
  }

  return children ? children : <Outlet />;
};

export default RouteGuard;
