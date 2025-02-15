import { Navigate } from "react-router-dom";
import { useEffect, useRef } from "react";

const PrivateRoute = ({ element }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const hasAlerted = useRef(false);

  useEffect(() => {
    if (!isLoggedIn && !hasAlerted.current) {
      alert("You have to login to view this page!");
      hasAlerted.current = true;
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return element;
};

export default PrivateRoute;