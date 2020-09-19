import React from "react";
import styled from "styled-components";

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

const CartItem = () => {
  return (
    <StyledCartItem>
      <p className="name">Burger House Veg Cheese Melt Burger</p>
      <div className="switch">Switch</div>
      <p className="price">$144</p>
    </StyledCartItem>
  )
}

export default CartItem;