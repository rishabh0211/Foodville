import React from "react";
import StyledListItem from "./styled/StyledListItem";

const ListItem = ({ restaurant }) => {
  return (
    <StyledListItem>
      <div className="header-row">
        <img src="/Hotel.svg" alt="Restaurant" />
        <h3 className="name">{restaurant.name}</h3>
      </div>
      <p className="desc">{restaurant.description}</p>
    </StyledListItem>
  )
}

export default ListItem;