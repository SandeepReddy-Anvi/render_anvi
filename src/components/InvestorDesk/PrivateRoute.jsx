import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const token = localStorage.getItem("investorToken");
  return token ? children : <Navigate to="/investors/login" />;
}
