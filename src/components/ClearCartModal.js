import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { hex2rgba } from "../utils";
import { setShowClearCartModal, addItemToCart } from "../actions";
import { media } from "../styles";

const StyledClearCartModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${(props) => hex2rgba(props.theme.colors.black, 0.5)};
  z-index: 11;

  .modal {
    background: ${(props) => props.theme.colors.white};
    padding: 4rem 8.4rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 80rem;
    width: calc(100% - 4rem);
    ${media.tablet`
      padding: 2rem;
    `}
  }

  .heading {
    font-size: 2rem;
    text-transform: capitalize;
  }

  .btn-container {
    display: flex;
    margin-top: 4rem;
  }

  .clear-btn {
    font-size: 1.2rem;
    font-weight: 600;
  }

  .cancel-btn {
    margin-left: 2rem;
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

const ClearCartModal = ({ mealToAddAfterClearCart, setShowClearCartModal, addItemToCart }) => {

  const handleCancelClick = () => {
    setShowClearCartModal(false);
  };

  const handleClearCart = () => {
    addItemToCart(mealToAddAfterClearCart, true);
    setShowClearCartModal(false);
  };

  return (
    <StyledClearCartModal>
      <div className="modal">
        <h3 className="heading">You cannot add items from multiple restaurants to the cart. Do you want to clear the cart and proceed?</h3>
        <div className="btn-container">
          <button className="btn clear-btn" onClick={handleClearCart}>yes, clear cart!</button>
          <button className="btn-secondary cancel-btn" onClick={handleCancelClick}>cancel</button>
        </div>
      </div>
    </StyledClearCartModal>
  )
}

const mapStateToProps = state => {
  return {
    mealToAddAfterClearCart: state.mealToAddAfterClearCart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setShowClearCartModal: showModal => dispatch(setShowClearCartModal(showModal)),
    addItemToCart: (meal, clearCart) => dispatch(addItemToCart(meal, clearCart))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClearCartModal);