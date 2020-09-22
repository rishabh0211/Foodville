import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import StyledLogin from "./styled/StyledLogin";
import { login, signup } from "../actions";
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
  // stores which section to show
  const [showLogin, setShowLogin] = useState(true);
  // flag to show/hide user created message
  const [showNotification, setShowNotification] = useState(false);
  // stores the error to be displayed
  const [error, setError] = useState('');

  useEffect(() => {
    if (userCreated) {
      resetState();
      setShowNotification(true);
      setShowLogin(true);
    }
  }, [userCreated]);

  /**
   * resets the state
   */
  const resetState = () => {
    setInputState({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      isRestaurant: ""
    });
    setError("");    
  };

  /**
   * Funtion to toggle the section between login and signup
   */
  const toggleSection = () => {
    resetState();
    setShowLogin(!showLogin);
  };

  /**
   * Handles the input change
   */
  const handleInputChange = e => {
    setError('');
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

  /**
   * Handles the login form submit
   */
  const handleLogin = e => {
    e.preventDefault();
    login({
      email: inputState.email,
      password: inputState.password
    });
  };

  /**
   * Validates name field
   */
  const checkNameError = () => {
    if (!inputState.username || inputState.username.length < 2) {
      setError('Name should be atleat 2 characters long');
      return false;
    }
    return true;
  };

  /**
   * Validates email field
   */
  const checkEmailError = () => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const valid = regex.test(inputState.email);
    if (!valid) {
      setError('Provide a valid mail id');
    }
    return valid;
  };

  /**
   * Validates password and confirm password
   */
  const checkPasswordError = () => {
    if (inputState.password.length < 7) {
      setError("Password should be greater than 6 characters");
      return false;
    }
    if (inputState.password !== inputState.confirmPassword) {
      setError("Password and confirm password do not match");
      return false;
    }
    return true;
  };

  /**
   * Handles the singup form submit
   */
  const handleSignup = e => {
    e.preventDefault();
    const isValid = checkNameError() && checkEmailError() && checkPasswordError();
    if (isValid) {
      const { username, email, password, isRestaurant } = inputState;
      signup({
        name: username,
        email,
        password,
        type: isRestaurant ? userTypes.RESTAURANT : userTypes.CUSTOMER
      });
    }
  };

  return (
    <StyledLogin>
      <div className="login-section" hidden={!showLogin}>
        {showNotification && <p className="success-msg">User successfully created! Login.</p>}
        {/* LOGIN SECTION */}
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
          {error && <p className="err-msg">{error}</p>}
          <button className="btn login-btn" type="submit">login</button>
          <div className="signup-text">New to Foodville? <p tabIndex="0" className="signup-link" onClick={toggleSection}>Signup</p></div>
        </form>
      </div>
      {/* SIGNUP SECTION */}
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
              value={inputState.username}
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
            <label className="checkbox-label" htmlFor="isRestaurant">Register as Restaurant Owner?</label>
          </div>
          {error && <p className="err-msg">{error}</p>}
          <button className="btn login-btn" type="submit">submit</button>
          <div className="signup-text">Already a member? <p tabIndex="0" className="signup-link" onClick={toggleSection}>Login</p></div>
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