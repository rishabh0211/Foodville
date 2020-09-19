import React from "react";
import StyledCart from "./styled/StyledCart";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <StyledCart>
      <h1 className="heading">Cart</h1>
      <p className="item-count">8 items</p>
      <ul className="items-list">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </ul>
    </StyledCart>
  )
}

export default Cart;