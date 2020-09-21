import React from "react";
import StyledMenuItem from "./styled/StyledMenuItem";

const MenuItem = ({ meal }) => {
  return (
    <StyledMenuItem>
      <h3 className="name">{meal.name}</h3>
      <p className="price">${meal.price}</p>
      <button className="btn-add">add</button>
    </StyledMenuItem>
  )
}

export default MenuItem;