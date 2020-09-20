import React from "react";
import StyledSwitch from "./styled/StyledSwitch";

const Switch = () => {
  return (
    <StyledSwitch>
      <button className="minus-btn"></button>
      <p className="value">1</p>
      <button className="plus-btn"></button>
    </StyledSwitch>
  )
}

export default Switch;