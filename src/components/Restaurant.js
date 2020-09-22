import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import StyledRestaurant from "./styled/StyledRestaurant";
import MenuItem from "./MenuItem";
import Cart from "./Cart";
import { getRestaurant, addMenuItem, updateMealItem, fetchDeleteMenuItem } from "../actions";
import { userTypes } from "../constants";
import AddItemModal from "./AddItemModal";

const Restaurant = ({ user, selectedRestaurant, getRestaurant, addMenuItem, updateMealItem, fetchDeleteMenuItem }) => {

  const { restaurantId } = useParams();
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [mealToEdit, setMealToEdit] = useState(null);

  useEffect(() => {
    getRestaurant(restaurantId);
  }, []);

  const handleSaveMenuItem = ({ menuName, price }) => {
    const reqObj = {
      price,
      name: menuName
    };
    if (mealToEdit) {
      updateMealItem(mealToEdit._id, reqObj);
    } else {
      reqObj.restaurantId = selectedRestaurant._id;
      reqObj.ownerId = user._id;
      addMenuItem(reqObj);
    }
    // temp -- to be handled from store
    setShowAddItemModal(false);
    setMealToEdit(null);
  };

  const handleCancelItem = () => {
    setShowAddItemModal(false);
    setMealToEdit(null);
  };

  const onEditClick = meal => {
    setMealToEdit(meal);
    setShowAddItemModal(true);
  };

  const onDeleteClick = id => {
    fetchDeleteMenuItem(id);
  };

  return (
    <StyledRestaurant>
      <header className="header">
        <div className="inner-container">
          <ul className="bread-crumb">
            <li className="bread-crumb-item">
              <Link to="/restaurants">Home</Link>
            </li>
            <li className="bread-crumb-item">{selectedRestaurant.name}</li>
          </ul>
          <div className="name-container">
            <img className="image" src="/Hotel.svg" alt="Restaurant" />
            <h1 className="name">{selectedRestaurant.name}</h1>
          </div>
          <p className="desc">{selectedRestaurant.description}</p>
        </div>
      </header>
      <section className="middle-section">
        {selectedRestaurant.meals &&
          <div className="menu-container">
            <div className="menu-header">
              <h1 className="heading">Menu</h1>
              <button className="btn" onClick={() => setShowAddItemModal(true)}>add item</button>
            </div>
            <p className="item-count">{selectedRestaurant.meals.length} items</p>
            {selectedRestaurant.meals && !!selectedRestaurant.meals.length &&
              <ul className="menu-list">
                {selectedRestaurant.meals.map(meal => (
                  <MenuItem
                    meal={meal}
                    key={meal._id}
                    onEditClick={onEditClick}
                    onDeleteClick={onDeleteClick}
                  />
                ))}
              </ul>
            }
          </div>
        }
        {user.type === userTypes.CUSTOMER &&
          <div className="cart-container">
            <Cart />
          </div>
        }
      </section>
      {showAddItemModal &&
        <AddItemModal
          handleSaveMenuItem={handleSaveMenuItem}
          handleCancelItem={handleCancelItem}
          mealToEdit={mealToEdit}
        />
      }
    </StyledRestaurant>
  )
}

const mapStateToProps = state => {
  return {
    selectedRestaurant: state.selectedRestaurant,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRestaurant: restaurantId => dispatch(getRestaurant(restaurantId)),
    addMenuItem: mealObj => dispatch(addMenuItem(mealObj)),
    updateMealItem: (id, mealObj) => dispatch(updateMealItem(id, mealObj)),
    fetchDeleteMenuItem: (id) => dispatch(fetchDeleteMenuItem(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);