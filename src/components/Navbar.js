import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import StyledNavbar from "./styled/StyledNavbar";
import { logoutUser } from "../actions";

const Navbar = ({ user, logoutUser, isAuthorized }) => {
  const history = useHistory();
  useEffect(() => {
    if (!isAuthorized) {
      history.push("/");
    }
  }, [isAuthorized]);

  return (
    <StyledNavbar>
      <div className="nav-container">
        <Link to="/" className="logo">
          <h1 className="logo__text">FOOD</h1>
          <h3 className="logo__text-light">VILLE</h3>
        </Link>
        {isAuthorized &&
          <ul className="nav-options">
            <li className="nav-item main">
              <Link to="/orders">
                orders
          </Link>
            </li>
            <li className="nav-item main">
              <Link to="/restaurants">
                restaurants
          </Link>
            </li>
            <li className="nav-item name">{user.name}</li>
            <li className="nav-item nav-login" onClick={logoutUser}>logout</li>
          </ul>
        }
      </div>
    </StyledNavbar>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser())
  };
};

const mapStateToProps = state => {
  return {
    user: state.user,
    isAuthorized: state.isAuthorized,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);