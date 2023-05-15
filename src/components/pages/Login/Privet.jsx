import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Privet({ children }) {
  const { isLogin } = useSelector((state) => state.login);

  if (isLogin) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default Privet;
