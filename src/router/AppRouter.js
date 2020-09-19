import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const RestaurantsList = lazy(() => import("../components/RestaurantsList"));
const Restaurant = lazy(() => import("../components/Restaurant"));

const AppRouter = () => {
  return (
    <Suspense fallback={<h3>Loading....</h3>}>
      <Switch>
        <Route path="/" exact component={RestaurantsList} />
        <Route path="/restaurant/:restaurantId" component={Restaurant}/>
        <Route />
        <Route />
        <Route />
      </Switch>
    </Suspense>
  )
}

export default AppRouter
