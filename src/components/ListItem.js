import React from "react";
import StyledListItem from "./styled/StyledListItem";

const ListItem = () => {
  return (
    <StyledListItem>
      <div className="header-row">
        <img src="/Hotel.svg" alt="Restaurant" />
        <h3 className="name">Belgian Waffles</h3>
      </div>
      <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </StyledListItem>
  )
}

export default ListItem;