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
      <div className="subtotal-row">
        <p className="text">sub total</p>
        <p className="price">$144</p>
      </div>
      <button className="btn submit-btn">
        submit
      </button>
    </StyledCart>
  )
}

export default Cart;