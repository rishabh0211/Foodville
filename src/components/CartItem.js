import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Switch from "./Switch";
import { removeItemFromCart, addItemToCart } from "../actions";

const StyledCartItem = styled.li`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2rem;

  &:not(:first-child) {
    margin-top: 2.4rem;
  }

  .name {
    grid-column: 1 / span 3;
  }

  .price {
    text-align: right;
  }

  .subtotal-row {
    grid-column: 1 / span 5;
    display: flex;
    justify-content: space-between;
  }
`;

const CartItem = ({ meal, removeItemFromCart, addItemToCart }) => {

  const handleMinusClick = () => {
    removeItemFromCart(meal);
  };

  const handleAddClick = () => {
    addItemToCart(meal);
  };

  return (
    <StyledCartItem>
      <p className="name">{meal.name}</p>
      <Switch quantity={meal.quantity} handleMinusClick={handleMinusClick} handlePlusClick={handleAddClick} />
      <p className="price">${meal.price * meal.quantity}</p>
    </StyledCartItem>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: item => dispatch(addItemToCart(item)),
    removeItemFromCart: item => dispatch(removeItemFromCart(item))
  };
};

export default connect(null, mapDispatchToProps)(CartItem);