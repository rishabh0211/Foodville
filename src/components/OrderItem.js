import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import moment from "moment";
import StyledOrderItem from "./styled/StyledOrderItem";

const OrderItem = ({ order, index, activeIndex, setActiveIndex }) => {

  const handleTopContainerClick = () => {
    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <StyledOrderItem>
      <div className="top-container" onClick={handleTopContainerClick}>
        <div className="left">
          <div className="restaurant">
            <img src="/Hotel.svg" alt="Restaurant" />
            <h3 className="name">{order.restaurant.name}</h3>
          </div>
          <ul className="details">
            <li className="detail-item">{moment(order.createdAt).format("DD/MM/yyyy")}</li>
            <li className="detail-item">{order.meals.length} items</li>
            <li className="detail-item">Total $ {order.totalAmount}</li>
          </ul>
        </div>
        <div className="right">
          <p className="status">{order.statuses[order.statuses.length - 1].status}</p>
          <MdKeyboardArrowDown className="icon" size={30} />
        </div>
      </div>
      {index === activeIndex && 
        <div className="bottom-container">
          <div className="status-container">
            <h3 className="detail-heading">status</h3>
            <ul className="status-list">
              <div className="timeline"></div>
              {order.statuses.map(status => (
                <li className="status-item" key={status.status}>
                  <p className="time">{moment(status.date).format("hh:mm a")}</p>
                  <p className="status">{status.status}</p>
                </li>
              ))}
            </ul>
            <button className="btn-secondary status-btn">cancel order</button>
          </div>
          <div className="bill-container">
            <h3 className="detail-heading">bill</h3>
            <ul className="bill-list">
              {order.meals.map(meal => (
                <li className="bill-item" key={meal._id}>
                  <p className="bill-item-name">{meal.name}</p>
                  <p className="bill-item-value">${meal.price * meal.quantity}</p>
                </li>
              ))}
              <li className="bill-item total">
                <p className="bill-item-name">Total</p>
                <p className="bill-item-value">${order.totalAmount}</p>
              </li>
            </ul>
          </div>
        </div>
      }
    </StyledOrderItem>
  )
}

export default OrderItem;