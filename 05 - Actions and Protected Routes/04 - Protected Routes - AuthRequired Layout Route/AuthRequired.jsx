import { Navigate, Outlet } from "react-router-dom";

const AuthRequired = () => {
  // fake authentication
  // if the user is not login redirect to login route

  const isLoggedIn = false;
  if (!isLoggedIn) {
    return <Navigate to="/login">Home</Navigate>;
  }
  return <Outlet />;
};

export default AuthRequired;
