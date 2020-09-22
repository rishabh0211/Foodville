import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import StyledRestaurantsList from "./styled/StyledRestaurantsList";
import ListItem from "./ListItem";
import { getRestaurants, addRestaurant, updateRestaurant, setRestaurantCreatedToFalse, fetchDeleteRestaurant } from "../actions";
import { userTypes } from "../constants";
import AddRestaurant from "./AddRestaurant";

const RestaurantsList = ({ user, getRestaurants, restaurants, addRestaurant, restaurantCreated, updateRestaurant, restaurantUpdated, setRestaurantCreatedToFalse, fetchDeleteRestaurant }) => {
  const history = useHistory();
  const [showAddRestaurant, setShowAddRestaurant] = useState(false);
  const [showEditRestaurant, setShowEditRestaurant] = useState(false);
  const [restaurantToEdit, setRestaurantToEdit] = useState({});

  useEffect(() => {
    getRestaurants();
  }, []);

  useEffect(() => {
    if (restaurantCreated) {
      const id = restaurants[0]._id;
      history.push(`/restaurant/${id}`);
      setRestaurantCreatedToFalse();
    }
  }, [restaurantCreated]);

  useEffect(() => {
    if (restaurantUpdated) {
      setShowAddRestaurant(false);
      setShowEditRestaurant(false);
      setRestaurantToEdit({});
    }
  }, [restaurantUpdated]);

  const onCancelClick = () => {
    setShowAddRestaurant(false);
    setShowEditRestaurant(false);
    setRestaurantToEdit({});
  };

  const onSubmitClick = ({ restaurantName, description }) => {
    const reqObj = {
      name: restaurantName,
      description: description,
    };
    if (showAddRestaurant) {
      reqObj.owner = user._id;
      addRestaurant(reqObj);
    } else {
      updateRestaurant(restaurantToEdit._id, reqObj);
    }
  };

  const editRestaurant = restaurant => {
    setShowEditRestaurant(true);
    setRestaurantToEdit(restaurant);
  };

  const deleteRestaurant = (restaurant) => {
    fetchDeleteRestaurant(restaurant);
  };

  return (
    <StyledRestaurantsList isRestaurantOwner={user.type !== userTypes.CUSTOMER}>
      {!showAddRestaurant && !showEditRestaurant &&
        <>
          <div className="header">
            <h1 className="section-heading">{
              user.type === userTypes.CUSTOMER ? "Explore from the best in town" : "My Restaurants"
            }</h1>
            {user.type === userTypes.RESTAURANT &&
              <button className="btn add-btn" onClick={() => setShowAddRestaurant(true)}>add</button>
            }
          </div>
          {restaurants && !!restaurants.length &&
            <ul className="list-container">
              {restaurants.map(restaurant => (
                <Link className="list-item-container" to={`/restaurant/${restaurant._id}`} key={restaurant._id}>
                  <ListItem
                    restaurant={restaurant}
                    editRestaurant={editRestaurant}
                    deleteRestaurant={deleteRestaurant}
                  />
                </Link>
              ))}
            </ul>
          }
        </>
      }
      {!!(showAddRestaurant || showEditRestaurant) &&
        <AddRestaurant
          onCancelClick={onCancelClick}
          onSubmitClick={onSubmitClick}
          isAdd={showAddRestaurant}
          restaurant={restaurantToEdit} />
      }
    </StyledRestaurantsList>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
    restaurants: state.restaurants,
    restaurantCreated: state.restaurantCreated,
    restaurantUpdated: state.restaurantUpdated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRestaurants: () => dispatch(getRestaurants()),
    addRestaurant: restaurant => dispatch(addRestaurant(restaurant)),
    updateRestaurant: (id, restaurant) => dispatch(updateRestaurant(id, restaurant)),
    setRestaurantCreatedToFalse: () => dispatch(setRestaurantCreatedToFalse()),
    fetchDeleteRestaurant: restaurant => dispatch(fetchDeleteRestaurant(restaurant))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsList);