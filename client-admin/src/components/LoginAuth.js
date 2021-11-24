import { Navigate } from "react-router-dom";

export default function LoginAuth({ children }) {
  if (localStorage.getItem("access_token")) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}
