import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import StyledRestaurant from "./styled/StyledRestaurant";
import MenuItem from "./MenuItem";
import Cart from "./Cart";
import { getRestaurant } from "../actions";

const Restaurant = ({ selectedRestaurant, getRestaurant }) => {

  const { restaurantId } = useParams();

  useEffect(() => {
    getRestaurant(restaurantId);
  }, []);

  return (
    <StyledRestaurant>
      <header className="header">
        <div className="inner-container">
          <ul className="bread-crumb">
            <li className="bread-crumb-item">Home</li>
            <li className="bread-crumb-item">{selectedRestaurant.name}</li>
          </ul>
          <div className="name-container">
            <img className="image" src="/Hotel.svg" alt="Restaurant" />
            <h1 className="name">{selectedRestaurant.name}</h1>
          </div>
          <p className="desc">{selectedRestaurant.description}</p>
        </div>
      </header>
      <section className="middle-section">
        {selectedRestaurant.meals &&
          <div className="menu-container">
            <h1 className="heading">Menu</h1>
            <p className="item-count">{selectedRestaurant.meals.length} items</p>
            {selectedRestaurant.meals && !!selectedRestaurant.meals.length &&
              <ul className="menu-list">
                {selectedRestaurant.meals.map(meal => (
                  <MenuItem meal={meal} key={meal._id} />
                ))}
              </ul>
            }
          </div>
        }
        <div className="cart-container">
          <Cart />
        </div>
      </section>
    </StyledRestaurant>
  )
}

const mapStateToProps = state => {
  return {
    selectedRestaurant: state.selectedRestaurant
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRestaurant: restaurantId => dispatch(getRestaurant(restaurantId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);