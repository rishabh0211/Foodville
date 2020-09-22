import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import StyledAddRestaurant from "./styled/StyledAddRestaurant";

const AddRestaurant = ({ restaurant, isAdd, onCancelClick, onSubmitClick }) => {
  const [restaurantName, setRestaurantName] = useState(restaurant.name);
  const [description, setDescription] = useState(restaurant.description);

  /**
   * Handles the click on cancel button. Resets the state and closes the modal
   */
  const handleCancelClick = e => {
    setRestaurantName('');
    setDescription('');
    onCancelClick();
  };

  /**
   * Handles the form submit action.
   */
  const handleSubmit = e => {
    e.preventDefault();
    onSubmitClick({ restaurantName, description });
  };

  return (
    <StyledAddRestaurant>
      <h1 className="heading">{isAdd ? "Add" : "Edit"} Restaurant</h1>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="resName"
            id="resName"
            placeholder="Restaurant Name"
            value={restaurantName}
            onChange={e => setRestaurantName(e.target.value)}
          />
          <label className="form-label" htmlFor="resName">Restaurant Name</label>
        </div>
        <div className="form-group textarea">
          <textarea
            className="form-control"
            type="text"
            name="description"
            id="description"
            placeholder="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <label className="form-label" htmlFor="description">Description</label>
        </div>
        <div className="btn-container">
          <button className="btn save-btn" type="submit">save</button>
          <button className="btn-secondary cancel-btn" type="button" onClick={handleCancelClick}>cancel</button>
        </div>
      </form>
    </StyledAddRestaurant>
  )
}

export default AddRestaurant;