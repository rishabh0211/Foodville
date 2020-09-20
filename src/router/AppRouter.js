import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
// import Login from "../components/Login";
import Loader from "../components/Loader";

const RestaurantsList = lazy(() => import("../components/RestaurantsList"));
const Restaurant = lazy(() => import("../components/Restaurant"));
const Orders = lazy(() => import("../components/Orders"));
const Login = lazy(() => import("../components/Login"));

const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/restaurants" component={RestaurantsList} />
        <Route path="/restaurant/:restaurantId" component={Restaurant} />
        <Route path="/orders" component={Orders} />
        <Route />
      </Switch>
    </Suspense>
  )
}

export default AppRouter
