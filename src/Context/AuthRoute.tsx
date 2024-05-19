import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

interface AuthRouteProps {
  element: React.ReactNode;
}

const AuthRoute: React.FC<AuthRouteProps> = ({ element }) => {
  const { user } = useAuth();
  const storedUser = localStorage.getItem("user");

  if (user || storedUser) {
    return <Navigate to="/" />;
  }

  return <>{element}</>;
};

export default AuthRoute;
