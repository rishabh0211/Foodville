import React, { lazy, Suspense, useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Loader from "../components/Loader";
import { checkLogin } from "../actions";

const RestaurantsList = lazy(() => import(/* webpackPrefetch: true */ "../components/RestaurantsList"));
const Restaurant = lazy(() => import(/* webpackPrefetch: true */ "../components/Restaurant"));
const Orders = lazy(() => import(/* webpackPrefetch: true */ "../components/Orders"));
const Login = lazy(() => import("../components/Login"));
const Cart = lazy(() => import("../components/Cart"));

const AppRouter = ({ isAuthorized, checkLogin }) => {

  useEffect(() => {
    if (!isAuthorized) {
      checkLogin();
    }
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/restaurants" component={RestaurantsList} />
        <Route path="/restaurant/:restaurantId" component={Restaurant} />
        <Route path="/orders" component={Orders} />
        <Route path="/cart" component={Cart} />
        <Route />
      </Switch>
    </Suspense>
  )
}

const mapStateToProps = state => {
  return {
    isAuthorized: state.isAuthorized
  }
}

const mapDispatchToProps = dispatch => {
  return {
    checkLogin: () => dispatch(checkLogin())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
