import React from "react";
import { connect } from "react-redux";
import StyledCart from "./styled/StyledCart";
import CartItem from "./CartItem";

const Cart = ({ cart }) => {
  return (
    <StyledCart>
      <h1 className="heading">Cart</h1>
      <p className="item-count">{cart.length} items</p>
      {!!cart.length ?
        <>
          <ul className="items-list">
            {cart.map(meal => (
              <CartItem meal={meal} key={meal._id} />
            ))}
          </ul>
          <div className="subtotal-row">
            <p className="text">sub total</p>
            <p className="price">$144</p>
          </div>
          <button className="btn submit-btn">
            place order
          </button>
        </>
        :
        <p>Your have an empty cart.</p>
      }
    </StyledCart>
  )
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);