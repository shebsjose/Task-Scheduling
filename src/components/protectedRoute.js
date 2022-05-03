import { useEffect, useState } from "react";
import { BrowserRouter as Route, Navigate } from "react-router-dom";
const ProtectedRoute = ({ component: Component, ...restOfProps }) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("Token"));
    setToken(token);
  }, []);
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        token ? <Component {...props} /> : <Navigate replace to="/home" />
      }
    />
  );
};

export default ProtectedRoute;
