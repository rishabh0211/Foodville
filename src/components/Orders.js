import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import StyledOrders from "./styled/StyledOrders";
import OrderItem from "./OrderItem";
import { fetchOrders } from "../actions";

const Orders = ({ orders, fetchOrders }) => {

  useEffect(() => {
    fetchOrders();
  }, []);

  // stores the active index correponding to the order which is expanded
  const [activeIndex, setActiveIndex] = useState(-1);

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
        {orders && !!orders.length ?
          <>
            <p className="order-count">{orders.length} orders</p>
            <ul className="order-list">
              {orders.map((order, index) => (
                <OrderItem
                  order={order}
                  key={order._id + order.statuses.length}
                  index={index}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                />
              ))}
            </ul>
          </>
          :
          <p className="no-order-msg">You don't have any orders.</p>
        }
      </section>
    </StyledOrders>
  )
}

const mapStateToProps = state => {
  return {
    orders: state.orders
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOrders: () => dispatch(fetchOrders())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);