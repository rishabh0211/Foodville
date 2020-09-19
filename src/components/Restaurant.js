import React from "react";
import { useParams } from "react-router-dom";
import StyledRestaurant from "./styled/StyledRestaurant";
import MenuItem from "./MenuItem";

const Restaurant = () => {

  const { restaurantId } = useParams();

  return (
    <StyledRestaurant>
      <header className="header">
        <div className="inner-container">
          <ul className="bread-crumb">
            <li className="bread-crumb-item">Home</li>
            <li className="bread-crumb-item">Name</li>
          </ul>
          <div className="name-container">
            <img className="image" src="/Hotel.svg" alt="Restaurant" />
            <h1 className="name">Burger House</h1>
          </div>
          <p className="desc">American, Continental, Fast Food, Beverages</p>
        </div>
      </header>
      <section className="middle-section">
        <div className="menu-container">
          <h1 className="heading">Menu</h1>
          <p className="item-count">8 items</p>
          <ul className="menu-list">
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
          </ul>
        </div>
        <div className="cart-container">
          <h1 className="heading">Cart</h1>
          <p className="item-count">8 items</p>
        </div>
      </section>
    </StyledRestaurant>
  )
}

export default Restaurant;