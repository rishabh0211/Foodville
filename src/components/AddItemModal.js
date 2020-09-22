import React, { useState } from "react";
import StyledAddItemModal from "./styled/StyledAddItemModal";

const AddItemModal = ({ mealToEdit, handleSaveMenuItem, handleCancelItem }) => {

  const [menuName, setMenuName] = useState(mealToEdit ? mealToEdit.name : "");
  const [price, setPrice] = useState(mealToEdit ? mealToEdit.price : "");
  const [description, setDescription] = useState(mealToEdit ? mealToEdit.description : "");

  const handleSubmit = e => {
    e.preventDefault();
    handleSaveMenuItem({ menuName, price, description });
  };

  const onCancelClick = () => {
    setMenuName('');
    setPrice('');
    handleCancelItem();
  };

  return (
    <StyledAddItemModal>
      <div className="modal">
        <h1 className="heading">{mealToEdit ? "edit" : "add"} menu item</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="menuName"
              id="menuName"
              placeholder="Menu Name"
              value={menuName}
              onChange={e => setMenuName(e.target.value)}
            />
            <label className="form-label" htmlFor="menuName">Menu Name</label>
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="description"
              id="description"
              placeholder="Description"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <label className="form-label" htmlFor="description">description</label>
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="number"
              name="price"
              id="price"
              placeholder="Selling Price"
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
            <label className="form-label" htmlFor="price">Selling Price</label>
          </div>
          <div className="btn-container">
            <button className="btn save-btn" type="submit">save</button>
            <button className="btn-secondary cancel-btn" type="button" onClick={onCancelClick}>cancel</button>
          </div>
        </form>
      </div>
    </StyledAddItemModal>
  )
}

export default AddItemModal;