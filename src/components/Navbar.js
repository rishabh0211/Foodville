import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import StyledNavbar from "./styled/StyledNavbar";

const Navbar = ({ user }) => {
  return (
    <StyledNavbar>
      <div className="nav-container">
        <Link to="/" className="logo">
          <h1 className="logo__text">FOOD</h1>
          <h3 className="logo__text-light">VILLE</h3>
        </Link>
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
          <li className="nav-item nav-login">logout</li>
        </ul>
      </div>
    </StyledNavbar>
  )
}

const mapDispatchToProps = dispatch => {
  return {

  };
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);