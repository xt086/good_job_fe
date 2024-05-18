import React, { useContext, ReactNode, useState } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";

interface ProtectRouteProps {
  children: ReactNode;
}

const ProtectRoute: React.FC<ProtectRouteProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

export default ProtectRoute;
