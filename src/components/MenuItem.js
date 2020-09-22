import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import StyledMenuItem from "./styled/StyledMenuItem";
import { addItemToCart, removeItemFromCart } from "../actions";
import Switch from "./Switch";
import { userTypes } from "../constants";
import theme from "../styles/theme";

const MenuItem = ({ user, meal, addItemToCart, cart, removeItemFromCart, onEditClick, onDeleteClick }) => {
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

  const handleEditClick = e => {
    e.preventDefault();
    onEditClick(meal);
  };

  const handleDeleteClick = e => {
    e.preventDefault();
    onDeleteClick(meal._id);
  };

  return (
    <StyledMenuItem>
      <div className="left">
        <h3 className="name">{meal.name}</h3>
        <p className="price">${meal.price}</p>
        {user.type === userTypes.CUSTOMER &&
          <div className="btn-container">
            {isMealPresentInCart ?
              <Switch quantity={quantity} handleMinusClick={handleMinusClick} handlePlusClick={handleAddClick} />
              :
              <button className="btn-add" onClick={handleAddClick}>add</button>
            }
          </div>
        }
      </div>
      {user.type === userTypes.RESTAURANT &&
        <div className="right">
          <FiEdit
            className="icon"
            size={20}
            color={theme.colors.darkGray}
            onClick={handleEditClick}
          />
          <AiOutlineDelete
            className="icon"
            size={22}
            color={theme.colors.darkGray}
            onClick={handleDeleteClick}
          />
        </div>
      }
    </StyledMenuItem>
  )
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: item => dispatch(addItemToCart(item)),
    removeItemFromCart: item => dispatch(removeItemFromCart(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);