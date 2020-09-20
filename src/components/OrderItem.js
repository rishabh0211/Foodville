import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import StyledOrderItem from "./styled/StyledOrderItem";

const OrderItem = () => {
  return (
    <StyledOrderItem>
      <div className="top-container">
        <div className="left">
          <div className="restaurant">
            <img src="/Hotel.svg" alt="Restaurant" />
            <h3 className="name">Belgian Waffles</h3>
          </div>
          <ul className="details">
            <li className="detail-item">18/09/2020</li>
            <li className="detail-item">3 items</li>
            <li className="detail-item">Total $ 432</li>
          </ul>
        </div>
        <div className="right">
          <p className="status">out for delivery</p>
          <MdKeyboardArrowDown className="icon" size={30} />
        </div>
      </div>
      <div className="bottom-container">
        <div className="status-container">
          <h3 className="detail-heading">status</h3>
          <ul className="status-list">
            <div className="timeline"></div>
            <li className="status-item">
              <p className="time">05:30 pm</p>
              <p className="status">order confirmed</p>
            </li>
            <li className="status-item">
              <p className="time">05:30 pm</p>
              <p className="status">order confirmed</p>
            </li>
            <li className="status-item">
              <p className="time">05:30 pm</p>
              <p className="status">order confirmed</p>
            </li>
          </ul>
          <button className="btn-secondary status-btn">cancel order</button>
        </div>
        <div className="bill-container">
          <h3 className="detail-heading">bill</h3>
          <ul className="bill-list">
            <li className="bill-item">
              <p className="bill-item-name">Burger House Veg Cheese Melt Burger</p>
              <p className="bill-item-value">$144</p>
            </li>
            <li className="bill-item">
              <p className="bill-item-name">Burger House Chicken Fillet Cheese Melt Burger Meal</p>
              <p className="bill-item-value">$144</p>
            </li>
            <li className="bill-item">
              <p className="bill-item-name">French French Fries</p>
              <p className="bill-item-value">$144</p>
            </li>
            <li className="bill-item total">
              <p className="bill-item-name">Total</p>
              <p className="bill-item-value">$432</p>
            </li>
          </ul>
        </div>
      </div>
    </StyledOrderItem>
  )
}

export default OrderItem;