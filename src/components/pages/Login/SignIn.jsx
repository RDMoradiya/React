import React from "react";
import "./SignIn.css";

function SignIn() {
  return (
    <>
      <div className="container p-0">
        <div className="row">
          <div className="signin-form col-auto col-12 col-md-6 m-auto">
            <div className="main">
              {/* log in */}
              <input type="checkbox" id="chk" aria-hidden="true" />
              <div className="login p-md-4">
                <form className="form p-md-3">
                  <label htmlFor="chk" aria-hidden="true">
                    Log in
                  </label>
                  <input
                    className="input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required=""
                  />
                  <input
                    className="input"
                    type="password"
                    name="pswd"
                    placeholder="Password"
                    required=""
                  />
                  <button>Log in</button>
                </form>
              </div>
              {/* sign up */}
              <div className="register p-4">
                <form className="form m-2">
                  <label htmlFor="chk" aria-hidden="true">
                    Register
                  </label>
                  <input
                    className="input"
                    type="text"
                    name="txt"
                    placeholder="Username"
                    required=""
                  />
                  <input
                    className="input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required=""
                  />
                  <input
                    className="input"
                    type="password"
                    name="pswd"
                    placeholder="Password"
                    required=""
                  />
                  <button>Register</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
