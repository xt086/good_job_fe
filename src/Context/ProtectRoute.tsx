import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

interface PrivateRouteProps {
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { user } = useAuth();
  const storedUser = localStorage.getItem("user");
  if (!storedUser && !user) {
    return <Navigate to="/dangnhap" />;
  }

  return <>{element}</>;
};

export default PrivateRoute;
