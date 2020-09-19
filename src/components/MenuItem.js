import React from "react";
import StyledMenuItem from "./styled/StyledMenuItem";

const MenuItem = () => {
  return (
    <StyledMenuItem>
      <h3 className="name">Burger House Veg Cheese Melt Burger</h3>
      <p className="price">$144</p>
      <button className="btn-add">add</button>
    </StyledMenuItem>
  )
}

export default MenuItem;