import React from "react";
import { Link } from "react-router-dom";
import StyledOrders from "./styled/StyledOrders";
import OrderItem from "./OrderItem";

const Orders = () => {
  return (
    <StyledOrders>
      <header className="header">
        <ul className="bread-crumb">
          <li>
            <Link className="bread-crumb-item" to="/">Home</Link>
          </li>
          <li className="bread-crumb-item">
            Orders
          </li>
        </ul>
      </header>
      <section className="middle-section">
        <h1 className="heading">Orders</h1>
        <p className="order-count">5 orders</p>
        <ul className="order-list">
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </ul>
      </section>
    </StyledOrders>
  )
}

export default Orders;