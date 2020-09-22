import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import StyledCart from "./styled/StyledCart";
import CartItem from "./CartItem";
import { placeOrder, setOrderPlacedToFalse } from "../actions";

const Cart = ({ cart, orderPlaced, cartRestaurantId, placeOrder, setOrderPlacedToFalse }) => {
  const history = useHistory();
  useEffect(() => {
    if (orderPlaced) {
      setOrderPlacedToFalse(false);
      history.push("/orders");
    }
  }, [orderPlaced]);

  const getTotalAmount = () => {
    return cart.reduce((acc, val) => acc + (val.quantity * val.price), 0);
  };

  const handlePlaceOrder = () => {
    const cartObj = cart.map(({ _id, quantity }) => {
      return { _id, quantity };
    });
    const reqObj = {
      restaurantId: cartRestaurantId,
      meals: cartObj
    };
    placeOrder(reqObj);
  };

  return (
    <StyledCart>
      <h1 className="heading">Cart</h1>
      <p className="item-count">{cart.length} items</p>
      {!!cart.length ?
        <>
          <ul className="items-list">
            {cart.map(meal => (
              <CartItem meal={meal} key={meal._id + meal.quantity} />
            ))}
          </ul>
          <div className="subtotal-row">
            <p className="text">sub total</p>
            <p className="price">${getTotalAmount()}</p>
          </div>
          <button className="btn submit-btn" onClick={handlePlaceOrder}>
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
    cart: state.cart,
    cartRestaurantId: state.cartRestaurantId,
    orderPlaced: state.orderPlaced
  };
};

const mapDispatchToProps = dispatch => {
  return {
    placeOrder: reqOdbj => dispatch(placeOrder(reqOdbj)),
    setOrderPlacedToFalse: () => dispatch(setOrderPlacedToFalse())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);