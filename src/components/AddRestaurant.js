import React, { useState } from "react";
import StyledAddRestaurant from "./styled/StyledAddRestaurant";

const AddRestaurant = ({ restaurant, isAdd, onCancelClick, onSubmitClick }) => {
  const [restaurantName, setRestaurantName] = useState(restaurant.name);
  const [description, setDescription] = useState(restaurant.description);
  const [error, setError] = useState('');

  /**
   * Handles the click on cancel button. Resets the state and closes the modal
   */
  const handleCancelClick = e => {
    setRestaurantName('');
    setDescription('');
    onCancelClick();
  };

  /**
   * Validates the name
   */
  const checkNameError = () => {
    if (!restaurantName) {
      setError("Restaurant Name is mandatory");
      return false;
    }
    if (restaurantName.length < 2 || restaurantName.length > 40) {
      setError("Restaurant Name should be between 2 and 40 characters");
      return false;
    }
    return true;
  };

  /**
   * Handles the form submit action.
   */
  const handleSubmit = e => {
    e.preventDefault();
    const isValid = checkNameError();
    if (isValid) {
      onSubmitClick({ restaurantName, description });
    }
  };

  const handleNameChange = e => {
    setError('');
    setRestaurantName(e.target.value);
  };

  const handleDescriptionChange = e => {
    setError('');
    setDescription(e.target.value);
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
            onChange={handleNameChange}
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
            onChange={handleDescriptionChange}
          />
          <label className="form-label" htmlFor="description">Description</label>
        </div>
        {error && <p className="err-msg">{error}</p>}
        <div className="btn-container">
          <button className="btn save-btn" type="submit">save</button>
          <button className="btn-secondary cancel-btn" type="button" onClick={handleCancelClick}>cancel</button>
        </div>
      </form>
    </StyledAddRestaurant>
  )
}

export default AddRestaurant;