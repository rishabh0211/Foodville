import React from "react";
import StyledLogin from "./styled/StyledLogin";

const Login = () => {
  return (
    <StyledLogin>
      <div className="login-section" hidden>
        <h1 className="heading">login</h1>
        <form className="form" autoComplete="off">
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="email"
              id="email"
              placeholder="Email" />
            <label className="form-label" htmlFor="email">Email</label>
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              name="password"
              id="password"
              placeholder="Password" />
            <label className="form-label" htmlFor="password">Password</label>
          </div>
          <button className="btn login-btn">login</button>
          <p className="signup-text">New to Foodville? <p className="signup-link">Signup</p></p>
        </form>
      </div>
      <div className="signup-section">
        <h1 className="heading">Sign up</h1>
        <form className="form" autoComplete="off">
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="email"
              id="email"
              placeholder="Email" />
            <label className="form-label" htmlFor="email">Email</label>
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              name="password"
              id="password"
              placeholder="Password" />
            <label className="form-label" htmlFor="password">Password</label>
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="Confirm Password" />
            <label className="form-label" htmlFor="confirm-password">Confirm Password</label>
          </div>
          <button className="btn login-btn">submit</button>
          <p className="signup-text">Already a member? <p className="signup-link">Login</p></p>
        </form>
      </div>
    </StyledLogin>
  )
}

export default Login;