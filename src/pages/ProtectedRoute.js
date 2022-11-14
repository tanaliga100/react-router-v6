import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  if (!props.user) {
    return <Navigate to="/login" />;
  }
  return <div>{props.children}</div>;
};

export default ProtectedRoute;
