import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import NavBar from "./components/navBar.jsx";
import TaskPage from "./pages/taskPage";
import NotFound from "./components/notfound";
import jwt_decode from "jwt-decode";

const Routers = () => {
  const [token, setToken] = useState(localStorage.getItem("Token") || null);
  const [loginUser, setLoginUser] = useState(null);

  useEffect(() => {
    if (token) {
      const decoded = jwt_decode(token);
      setLoginUser(decoded.user);
    }
  }, [token]);

  return (
    <div>
      <Router>
        <ToastContainer />
        <NavBar token={token} loginUser={loginUser} setToken={setToken} />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home setToken={setToken} />} />
          {token ? (
            <>
              <Route path="/task-page" element={<TaskPage />} />
            </>
          ) : (
            <>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </>
          )}
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;
