import React from "react";
import styled from "styled-components";
import Switch from "./Switch";

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

const CartItem = ({ meal }) => {
  return (
    <StyledCartItem>
      <p className="name">{meal.name}</p>
      <Switch />
      <p className="price">${meal.price * meal.quantity}</p>
    </StyledCartItem>
  )
}

export default CartItem;