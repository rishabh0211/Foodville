import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import StyledMenuItem from "./styled/StyledMenuItem";
import { addItemToCart, removeItemFromCart } from "../actions";
import Switch from "./Switch";

const MenuItem = ({ meal, addItemToCart, cart, removeItemFromCart }) => {
  const [quantity, setQuantity] = useState(0);
  const [isMealPresentInCart, setIsMealPresentInCart] = useState(false);

  useEffect(() => {
    setIsMealPresentInCart(checkMealPresentInCart());
  }, [cart]);

  const handleAddClick = () => {
    addItemToCart(meal);
  };

  const checkMealPresentInCart = () => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i]._id === meal._id) {
        setQuantity(cart[i].quantity);
        return true;
      }
    }
    return false;
  };

  const handleMinusClick = () => {
    removeItemFromCart(meal);
  };

  return (
    <StyledMenuItem>
      <h3 className="name">{meal.name}</h3>
      <p className="price">${meal.price}</p>
      <div className="btn-container">
        {isMealPresentInCart ?
          <Switch quantity={quantity} handleMinusClick={handleMinusClick} handlePlusClick={handleAddClick}/>
          :
          <button className="btn-add" onClick={handleAddClick}>add</button>
        }
      </div>
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
    addItemToCart: item => dispatch(addItemToCart(item)),
    removeItemFromCart: item => dispatch(removeItemFromCart(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);