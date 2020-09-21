import React from "react";
import StyledSwitch from "./styled/StyledSwitch";

const Switch = ({ quantity, handleMinusClick, handlePlusClick }) => {
  return (
    <StyledSwitch>
      <button className="minus-btn" onClick={handleMinusClick}></button>
      <p className="value">{quantity}</p>
      <button className="plus-btn" onClick={handlePlusClick}></button>
    </StyledSwitch>
  )
}

export default Switch;