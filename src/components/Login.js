import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import StyledLogin from "./styled/StyledLogin";
import { login, checkLogin, signup } from "../actions";
import { userTypes } from "../constants";

const Login = ({ login, isAuthorized, userCreated, signup }) => {
  const history = useHistory();
  useEffect(() => {
    if (isAuthorized) {
      history.push('/restaurants');
    }
  }, [isAuthorized]);

  const [inputState, setInputState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    isRestaurant: ""
  });
  const [showLogin, setShowLogin] = useState(true);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (userCreated) {
      resetState();
      setShowNotification(true);
      setShowLogin(true);
    }
  }, [userCreated]);

  const resetState = () => {
    setInputState({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      isRestaurant: ""
    });
  };

  const toggleSection = () => {
    resetState();
    setShowLogin(!showLogin);
  };

  const handleInputChange = e => {
    let { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      value = checked;
    }
    setInputState(prevState => (
      {
        ...prevState,
        [name]: value
      }
    ));
  };

  const handleLogin = e => {
    e.preventDefault();
    login({
      email: inputState.email,
      password: inputState.password
    });
  };

  const handleSignup = e => {
    e.preventDefault();
    const { username, email, password, isRestaurant } = inputState;
    signup({
      name: username,
      email,
      password,
      type: isRestaurant ? userTypes.RESTAURANT : userTypes.CUSTOMER
    });
  };

  return (
    <StyledLogin>
      <div className="login-section" hidden={!showLogin}>
        {showNotification && <p className="success-msg">User successfully created! Login.</p>}
        <h1 className="heading">login</h1>
        <form className="form" autoComplete="off" onSubmit={handleLogin}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              value={inputState.email}
              onChange={handleInputChange}
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
              value={inputState.password}
              onChange={handleInputChange}
            />
            <label className="form-label" htmlFor="password">Password</label>
          </div>
          <button className="btn login-btn" type="submit">login</button>
          <div className="signup-text">New to Foodville? <p tabIndex="1" className="signup-link" onClick={toggleSection}>Signup</p></div>
        </form>
      </div>
      <div className="signup-section" hidden={showLogin}>
        <h1 className="heading">Sign up</h1>
        <form className="form" autoComplete="off" onSubmit={handleSignup}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="username"
              id="username"
              placeholder="Name"
              value={inputState.name}
              onChange={handleInputChange}
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
              value={inputState.email}
              onChange={handleInputChange}
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
              value={inputState.password}
              onChange={handleInputChange}
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
              value={inputState.confirmPassword}
              onChange={handleInputChange}
            />
            <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
          </div>
          <div className="checkbox-group">
            <input
              className="checkbox-input"
              type="checkbox"
              name="isRestaurant"
              id="isRestaurant"
              checked={inputState.isRestaurant}
              onChange={handleInputChange}
            />
            <label className="checkbox-label" htmlFor="isRestaurant">Register as Restaurnt Owner?</label>
          </div>
          <button className="btn login-btn" type="submit">submit</button>
          <div className="signup-text">Already a member? <p tabIndex="1" className="signup-link" onClick={toggleSection}>Login</p></div>
        </form>
      </div>
    </StyledLogin>
  )
}

const mapStateToProps = state => {
  return {
    isAuthorized: state.isAuthorized,
    userCreated: state.userCreated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (credentails) => dispatch(login(credentails)),
    signup: (credentails) => dispatch(signup(credentails))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);