// src/components/ProtectedRoute.js
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import routesConfig from "./routesConfig.js";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("authToken");
  const email = localStorage.getItem("userEmail");
  const location = useLocation();

  const matchedRoute = routesConfig.find((r) => r.path === location.pathname);
  const isAllowed = matchedRoute?.allowedEmails.includes(email);

  if (!token || !isAllowed) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
