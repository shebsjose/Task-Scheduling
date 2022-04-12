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
import TaskPage from "./pages/taskPage";
import ProtectedRoute from "./components/protectedRoute";
import NotFound from "./components/notfound";

const Routers = ({ token }) => {
  return (
    <div>
        <Router>
          <ToastContainer />
          <NavBar token={token} />
          <Routes>
              
                <Route path="/" element={<Navigate replace to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/not-found" element={<NotFound/>} />
                <Route path="/task-page" element={<TaskPage/>} />
                {/* <ProtectedRoute exact path="" element={<TaskPage />} /> */}
          </Routes>
        </Router>
    </div>
  );
};

export default Routers;
