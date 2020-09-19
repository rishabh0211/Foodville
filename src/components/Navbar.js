import React from "react";
import StyledNavbar from "./styled/StyledNavbar";

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className="nav-container">
        <div className="logo">
          <h1 className="logo__text">FOOD</h1>
          <h3 className="logo__text-light">VILLE</h3>
        </div>
        <ul className="nav-options">
          <li className="nav-item">Sign Up</li>
          <li className="nav-item nav-login">Login</li>
        </ul>
      </div>
    </StyledNavbar>
  )
}

export default Navbar;