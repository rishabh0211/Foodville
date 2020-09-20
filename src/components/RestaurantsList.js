import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import StyledRestaurantsList from "./styled/StyledRestaurantsList";
import ListItem from "./ListItem";
import { getRestaurants } from "../actions";

const RestaurantsList = ({ user, getRestaurants, restaurants }) => {

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <StyledRestaurantsList>
      <h1 className="section-heading">Explore from the best in town</h1>
      {restaurants && !!restaurants.length &&
        <ul className="list-container">
          {restaurants.map(restaurant => (
            <Link className="list-item-container" to={`/restaurant/${restaurant._id}`} key={restaurant._id}>
              <ListItem restaurant={restaurant} />
            </Link>
          ))}
        </ul>
      }
    </StyledRestaurantsList>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
    restaurants: state.restaurants
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRestaurants: () => dispatch(getRestaurants())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsList);