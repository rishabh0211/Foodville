import React from "react";
import StyledFooter from "./styled/StyledFooter";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import theme from "../styles/theme";


const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">
        <div className="header">
          <h3 className="heading">food</h3>
          <h3 className="heading-light">ville</h3>
        </div>
        <p className="desc">Fast and safest food delivery service in the town</p>
        <div className="social-icons">
          <FiFacebook className="icon" size={24} color={theme.colors.darkGray} />
          <FiInstagram className="icon" size={24} color={theme.colors.darkGray} />
          <FiTwitter className="icon" size={24} color={theme.colors.darkGray} />
        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer;