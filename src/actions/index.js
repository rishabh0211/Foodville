import { actionTypes, API_ENDPOINT } from "../constants";

const getActionObj = (type, payload) => ({ type, payload });

export const login = (payload) => {
  return dispatch => {
    dispatch(getActionObj(actionTypes.LOGIN_START));
    return fetch(`${API_ENDPOINT}/api/auth/signin`, {
      method: "POST",
      body: JSON.stringify(payload),
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(res => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw Error("Not logged in");
        }
      })
      .then(user => {
        dispatch(getActionObj(actionTypes.LOGIN_SUCCESS, { user }));
      }).catch(err => {
        console.log(err.message ? err.message : err);
      });
  };
};

export const signup = payload => {
  return dispatch => {
    dispatch(getActionObj(actionTypes.SIGNUP_START));
    return fetch(`${API_ENDPOINT}/api/auth/signup`, {
      method: "POST",
      body: JSON.stringify(payload),
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(res => {
        if (res.status === 201) {
          return res.json();
        } else {
          throw Error("User not created!");
        }
      })
      .then(() => {
        dispatch(getActionObj(actionTypes.SIGNUP_SUCCESS));
      });
  };
};

export const logoutUser = () => {
  return dispatch => {
    dispatch(getActionObj(actionTypes.LOGOUT_START));
    return fetch(`${API_ENDPOINT}/api/auth/signout`, {
      mode: "cors",
      credentials: "include",
    }).then(res => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw Error("Not logged in ");
      }
    })
      .then(() => {
        dispatch(getActionObj(actionTypes.LOGOUT_SUCCESS));
      }).catch(err => {
        console.log(err.message ? err.message : err);
      });
  };
};

export const checkLogin = () => {
  return dispatch => {
    return fetch(`${API_ENDPOINT}/api/auth/checkLogin`, {
      mode: "cors",
      credentials: "include",
    }).then(res => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw Error("Not logged in ");
      }
    })
      .then(user => {
        dispatch(getActionObj(actionTypes.LOGIN_SUCCESS, { user }));
      }).catch(err => {
        console.log(err.message ? err.message : err);
      });
  };
};

export const getRestaurants = () => {
  return dispatch => {
    dispatch(getActionObj(actionTypes.FETCH_RESTAURANTS_START));
    return fetch(`${API_ENDPOINT}/api/restaurants`, {
      mode: "cors",
      credentials: "include",
    })
      .then(res => res.json())
      .then(restaurants => {
        dispatch(getActionObj(actionTypes.FETCH_RESTAURANTS_SUCCESS, { restaurants }));
      });
  };
};

export const getRestaurant = (restaurantId) => {
  return dispatch => {
    dispatch(getActionObj(actionTypes.FETCH_RESTAURANT_START));
    return fetch(`${API_ENDPOINT}/api/restaurant/${restaurantId}`, {
      mode: "cors",
      credentials: "include",
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw Error("Could not find the restaurant");
        }
      })
      .then(restaurant => {
        dispatch(getActionObj(actionTypes.FETCH_RESTAURANT_SUCCESS, { restaurant }));
      })
      .catch(e => {
        console.log(e);
      });
  };
};

export const addItemToCart = item => {
  return getActionObj(actionTypes.ADD_ITEM_TO_CART, { item });
};

export const removeItemFromCart = item => {
  return getActionObj(actionTypes.REMOVE_ITEM_FROM_CART, { item });
};

export const addRestaurant = restaurant => {
  return dispatch => {
    dispatch(getActionObj(actionTypes.CREATE_RESTAURANT_START));
    return fetch(`${API_ENDPOINT}/api/restaurant`, {
      method: "POST",
      body: JSON.stringify(restaurant),
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(res => {
        if (res.status === 201) {
          return res.json();
        } else {
          throw Error("User not created!");
        }
      })
      .then(restaurant => {
        dispatch(getActionObj(actionTypes.CREATE_RESTAURANT_SUCCESS, { restaurant }));
      });
  };
};

export const updateRestaurant = (restaurantId, reqObj) => {
  return dispatch => {
    dispatch(getActionObj(actionTypes.UPDATE_RESTAURANT_START));
    return fetch(`${API_ENDPOINT}/api/restaurant/${restaurantId}`, {
      method: "POST",
      body: JSON.stringify(reqObj),
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(res => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw Error("Restaurant not updated!");
        }
      })
      .then(restaurant => {
        dispatch(getActionObj(actionTypes.UPDATE_RESTAURANT_SUCCESS, { restaurant }));
        dispatch(getRestaurants());
      }).catch(e => {
        console.log(e);
      });
  };
};

export const setRestaurantCreatedToFalse = () => {
  return getActionObj(actionTypes.SET_RESTAURANT_CREATED_TO_FALSE);
};

export const fetchDeleteRestaurant = restaurant => {
  return dispatch => {
    dispatch(getActionObj(actionTypes.DELETE_RESTAURANT_START));
    return fetch(`${API_ENDPOINT}/api/restaurant/${restaurant._id}`, {
      method: "DELETE",
      mode: "cors",
      credentials: "include",
    })
      .then(res => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw Error("Restaurant not deleted!");
        }
      })
      .then(restaurant => {
        dispatch(getActionObj(actionTypes.DELETE_RESTAURANT_SUCCESS, { restaurant }));
      })
      .catch(e => {
        console.log(e);
      });
  };
};

export const addMenuItem = reqPayload => {
  return dispatch => {
    dispatch(getActionObj(actionTypes.ADD_MENU_ITEM_START));
    return fetch(`${API_ENDPOINT}/api/meal`, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      body: JSON.stringify(reqPayload),
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(res => {
        if (res.status === 201) {
          return res.json();
        } else {
          throw Error("Meal not created!");
        }
      })
      .then(meal => {
        dispatch(getActionObj(actionTypes.ADD_MENU_ITEM_SUCCESS, { meal }));
      })
      .catch(e => {
        console.log(e);
      });
  };
};

export const updateMealItem = (mealId, reqPayload) => {
  return dispatch => {
    dispatch(getActionObj(actionTypes.UPDATE_MENU_ITEM_START));
    return fetch(`${API_ENDPOINT}/api/meal/${mealId}`, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      body: JSON.stringify(reqPayload),
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(res => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw Error("Meal not updated!");
        }
      })
      .then(meal => {
        dispatch(getActionObj(actionTypes.UPDATE_MENU_ITEM_SUCCESS, { meal }));
      })
      .catch(e => {
        console.log(e);
      });
  };
};

export const fetchDeleteMenuItem = mealId => {
  return dispatch => {
    dispatch(getActionObj(actionTypes.DELETE_MENU_ITEM_START));
    return fetch(`${API_ENDPOINT}/api/meal/${mealId}`, {
      method: "DELETE",
      mode: "cors",
      credentials: "include",
    })
      .then(res => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw Error("Meal not deleted!");
        }
      })
      .then(meal => {
        dispatch(getActionObj(actionTypes.DELETE_MENU_ITEM_SUCCESS, { meal }));
      })
      .catch(e => {
        console.log(e);
      });
  };
};

export const placeOrder = reqPayload => {
  return dispatch => {
    dispatch(getActionObj(actionTypes.PLACE_ORDER_START));
    return fetch(`${API_ENDPOINT}/api/order`, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      body: JSON.stringify(reqPayload),
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(res => {
        if (res.status === 201) {
          return res.json();
        } else {
          throw Error("Meal not deleted!");
        }
      })
      .then(order => {
        dispatch(getActionObj(actionTypes.PLACE_ORDER_SUCCESS, { order }));
      })
      .catch(e => {
        console.log(e);
      });
  };
};

export const setOrderPlacedToFalse = () => {
  return getActionObj(actionTypes.SET_ORDER_PLACED_TO_FALSE);
};

export const fetchOrders = () => {
  return dispatch => {
    dispatch(getActionObj(actionTypes.FETCH_ORDER_START));
    return fetch(`${API_ENDPOINT}/api/orders`, {
      mode: "cors",
      credentials: "include",
    })
      .then(res => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw Error("Cannot get order!");
        }
      })
      .then(orders => {
        dispatch(getActionObj(actionTypes.FETCH_ORDER_SUCCESS, { orders }));
      })
      .catch(e => {
        console.log(e);
      });
  }
};