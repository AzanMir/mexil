import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { cntxt } from "./context/Context";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useContext(cntxt);

  return isAuthenticated ? children : <Navigate to="/signup" replace />;
}

export default ProtectedRoute;
