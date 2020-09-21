import React from "react";
import { connect } from "react-redux";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import StyledListItem from "./styled/StyledListItem";
import { userTypes } from "../constants";
import theme from "../styles/theme";

const ListItem = ({ user, restaurant, editRestaurant }) => {

  const handleEditClick = e => {
    e.preventDefault();
    editRestaurant(restaurant);
  };

  const handleDeleteClick = e => {
    e.stopPropagation();
  };

  return (
    <StyledListItem isRestaurantOwner={user.type !== userTypes.CUSTOMER}>
      <div className="left">
        <div className="header-row">
          <img src="/Hotel.svg" alt="Restaurant" />
          <h3 className="name">{restaurant.name}</h3>
        </div>
        <p className="desc">{restaurant.description}</p>
      </div>
      <div className="right icon-container">
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
    </StyledListItem>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);