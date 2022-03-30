import React from "react";
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

const Routers = ({token}) => {
  return (
    <div>
      <Router>
      <ToastContainer />
      <NavBar token={token}/>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;
