import { Navigate } from "react-router-dom";

export default function RequireAuth({ children }) {
  if (
    !localStorage.getItem("access_token") ||
    localStorage.getItem("access_token") === "undefined"
  ) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
}
