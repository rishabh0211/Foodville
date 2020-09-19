import React from "react";
import { Link } from "react-router-dom";
import StyledRestaurantsList from "./styled/StyledRestaurantsList";
import ListItem from "./ListItem";

const RestaurantsList = () => {
  return (
    <StyledRestaurantsList>
      <h1 className="section-heading">Explore from the best in town</h1>
      <ul className="list-container">
        <Link className="list-item-container" to="/restaurant/:akjshdkhaksd">
          <ListItem />
        </Link>
        <Link className="list-item-container" to="/restaurant/:akjshdkhaksd">
          <ListItem />
        </Link>
        <Link className="list-item-container" to="/restaurant/:akjshdkhaksd">
          <ListItem />
        </Link>
        <Link className="list-item-container" to="/restaurant/:akjshdkhaksd">
          <ListItem />
        </Link>
        <Link className="list-item-container" to="/restaurant/:akjshdkhaksd">
          <ListItem />
        </Link>
        <Link className="list-item-container" to="/restaurant/:akjshdkhaksd">
          <ListItem />
        </Link>
        <Link className="list-item-container" to="/restaurant/:akjshdkhaksd">
          <ListItem />
        </Link>
        <Link className="list-item-container" to="/restaurant/:akjshdkhaksd">
          <ListItem />
        </Link>
      </ul>
    </StyledRestaurantsList>
  )
}

export default RestaurantsList;