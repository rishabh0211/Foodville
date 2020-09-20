import React from "react";
import StyledLogin from "./styled/StyledLogin";

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      showLogin: true
    };
  }

  resetState = () => {
    this.setState({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  toggleSection = () => {
    this.resetState();
    this.setState({
      showLogin: !this.state.showLogin
    });
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleLogin = e => {
    e.preventDefault();

  };

  handleSignup = e => {
    e.preventDefault();

  };

  render() {
    const { showLogin, email, password, confirmPassword, name } = this.state;

    return (
      <StyledLogin>
        <div className="login-section" hidden={!showLogin}>
          <h1 className="heading">login</h1>
          <form className="form" autoComplete="off" onSubmit={this.handleLogin}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={this.handleInputChange}
              />
              <label className="form-label" htmlFor="email">Email</label>
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={this.handleInputChange}
              />
              <label className="form-label" htmlFor="password">Password</label>
            </div>
            <button className="btn login-btn" type="submit">login</button>
            <p className="signup-text">New to Foodville? <p className="signup-link" onClick={this.toggleSection}>Signup</p></p>
          </form>
        </div>
        <div className="signup-section" hidden={showLogin}>
          <h1 className="heading">Sign up</h1>
          <form className="form" autoComplete="off" onSubmit={this.handleSignup}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="username"
                id="username"
                placeholder="Name"
                value={name}
                onChange={this.handleInputChange}
              />
              <label className="form-label" htmlFor="username">Name</label>
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={this.handleInputChange}
              />
              <label className="form-label" htmlFor="email">Email</label>
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={this.handleInputChange}
              />
              <label className="form-label" htmlFor="password">Password</label>
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={this.handleInputChange}
              />
              <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
            </div>
            <button className="btn login-btn" type="submit">submit</button>
            <p className="signup-text">Already a member? <p className="signup-link" onClick={this.toggleSection}>Login</p></p>
          </form>
        </div>
      </StyledLogin>
    )
  }
}

export default Login;