import React from "react";
import { connect } from "react-redux";
import StyledMenuItem from "./styled/StyledMenuItem";
import { addItemToCart } from "../actions";

const MenuItem = ({ meal, addItemToCart }) => {

  const handleAddClick = () => {
    addItemToCart(meal);
  };

  return (
    <StyledMenuItem>
      <h3 className="name">{meal.name}</h3>
      <p className="price">${meal.price}</p>
      <button className="btn-add" onClick={handleAddClick}>add</button>
    </StyledMenuItem>
  )
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: item => dispatch(addItemToCart(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);