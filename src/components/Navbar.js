import React, { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import StyledNavbar, { StyledBurgerContainer } from "./styled/StyledNavbar";
import { logoutUser } from "../actions";
import { userTypes } from "../constants";

const Navbar = ({ user, logoutUser, isAuthorized }) => {
  const history = useHistory();
  const [menuOpen, setMenuOpen] = useState(false);
  const [noAnim, setNoAnim] = useState(true);
  const menu = React.createRef();

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!isAuthorized) {
      history.push("/");
    }
  }, [isAuthorized]);

  /**
   * Handles the click event outside of the navbar on mobile. Closes the navbar if clicked outside
   */
  const handleClickOutside = useCallback(e => {
    if (menu && menu.current && !menu.current.contains(e.target)) {
      closeMenu();
    }
  }, [menu]);

  /**
   * Closes the nav menu on mobile
   */
  const closeMenu = () => {
    window.removeEventListener("click", handleClickOutside);
    setMenuOpen(false);
  };

  /**
   * Handles the click on burger icon. Opens/closes nav menu
   */
  const handleBurgerClick = () => {
    setNoAnim(false);
    if (menuOpen) {
      return closeMenu();
    }
    setMenuOpen(true);
  };

  /**
   * Handles the click on logout link on nav menu on mobile
   */
  const onMobLogoutClick = () => {
    closeMenu();
    logoutUser();
  };

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
        {isAuthorized &&
          <>
            <StyledBurgerContainer
              className={`burger-container ${menuOpen ? 'active' : ''} ${noAnim ? 'no-anim' : ''}`}
              onClick={handleBurgerClick}
            >
              <div className="line-1" ></div>
              <div className="line-2" ></div>
              <div className="line-3" ></div>
            </StyledBurgerContainer>
            <aside className={`mobile-links-container ${menuOpen && 'active'}`}>
              <ul ref={menu} className="nav-list mobile-links">
                <li className="nav-item">
                  <Link to="/orders" onClick={closeMenu}>orders</Link>
                </li>
                <li className="nav-item">
                  <Link to="/restaurants" onClick={closeMenu}>restaurants</Link>
                </li>
                {user.type === userTypes.CUSTOMER && 
                  <li className="nav-item">
                    <Link to="/cart" onClick={closeMenu}>cart</Link>
                  </li>
                }
                <li className="nav-item" onClick={onMobLogoutClick}>
                  logout
                </li>
              </ul>
            </aside>
          </>
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