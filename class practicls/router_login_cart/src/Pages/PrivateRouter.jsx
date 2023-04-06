import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { loginwrapper } from "../App";

function PrivateRouter({ children }) {
  const { isLogin } = useContext(loginwrapper);

  if (isLogin) {
    return <div>{children}</div>;
  } else {
    return <Navigate to="/login" />;
  }
}

export default PrivateRouter;
