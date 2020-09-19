import React from "react";
import StyledRestaurantsList from "./styled/StyledRestaurantsList";
import ListItem from "./ListItem";

const RestaurantsList = () => {
  return (
    <StyledRestaurantsList>
      <h1 className="section-heading">Explore from the best in town</h1>
      <ul className="list-container">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </ul>
    </StyledRestaurantsList>
  )
}

export default RestaurantsList;