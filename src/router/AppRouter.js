import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Loader from "../components/Loader";

const RestaurantsList = lazy(() => import(/* webpackPrefetch: true */ "../components/RestaurantsList"));
const Restaurant = lazy(() => import(/* webpackPrefetch: true */ "../components/Restaurant"));
const Orders = lazy(() => import(/* webpackPrefetch: true */ "../components/Orders"));
const Login = lazy(() => import("../components/Login"));
const Cart = lazy(() => import("../components/Cart"));

const AppRouter = () => {
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

export default AppRouter
