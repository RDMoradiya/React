import React, { useContext } from "react";
import "./Login.css";
import { loginwrapper } from "../App";

function Login() {
  const {
    isLogin,
    enteredUserName,
    setEnteredUserName,
    enteredPassword,
    setEnteredPassword,
    submitHandler,
  } = useContext(loginwrapper);

  return (
    <>
      <div className="container p-5">
        <div className="login">
          <form onSubmit={submitHandler}>
            <div className="control">
              <label htmlFor="username">Username :-</label>
              <input
                type="text"
                value={enteredUserName}
                onChange={(e) => setEnteredUserName(e.target.value)}
              />
            </div>
            <div className="control">
              <label htmlFor="password">Password :-</label>
              <input
                type="password"
                value={enteredPassword}
                onChange={(e) => setEnteredPassword(e.target.value)}
              />
            </div>
            <div className="actions">
              {isLogin ? (
                <button
                  className="btn w-25"
                  style={{ background: "rgb(48, 101, 162)", color: "white" }}
                >
                  Logout
                </button>
              ) : (
                <button
                  className="btn w-25"
                  style={{ background: "rgb(48, 101, 162)", color: "white" }}
                >
                  Login
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
