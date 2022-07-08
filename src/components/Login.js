import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Home from "./Home";
import Registration from "./Registration";

function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

  const [reg, setReg] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("localPassword")
      .replace(/"/g, "");
    let mail = localStorage.getItem("localEmail").replace(/"/g, "");
    

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }

  function handleClickReg() {
    setReg(!reg);
    window.location.reload(false);
  }

  return (
    <div className="login-style">
      {home ? (
        <form onSubmit={handleLogin}>
          <h3>Log In</h3>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Login
          </button>
           {/* {" "}
           {reg ? ( */}
          <p onClick={handleClickReg} className="forgot-password text-right">
                Not registered? {" "}Register.
              </p>
            {/* ) : (
              <Registration />
            )} */}

          {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info else keep trying.
            </Alert>
          )}
        </form>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default Login;