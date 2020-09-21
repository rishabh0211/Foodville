import { actionTypes } from "../constants";

const getInitalState = () => ({
  user: {},
  orders: [],
  restaurants: [],
  cart: [],
  selectedRestaurant: {},
  isLoading: false,
  isAuthorized: false,
  userCreated: false
});

export default (state = getInitalState(), { type, payload }) => {
  switch (type) {
    case actionTypes.LOGIN_START:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload.user,
        isAuthorized: true
      };
    case actionTypes.SIGNUP_START:
      return {
        ...state,
        isLoading: false
      };
    case actionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        userCreated: true
      };
    case actionTypes.FETCH_RESTAURANTS_START:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.FETCH_RESTAURANTS_SUCCESS:
      return {
        ...state,
        restaurants: payload.restaurants,
        isLoading: false
      };
    case actionTypes.FETCH_RESTAURANT_START:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.FETCH_RESTAURANT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        selectedRestaurant: payload.restaurant
      };
    case actionTypes.ADD_ITEM_TO_CART:
      const meals = [...state.cart];
      let found = false;
      for (let i = 0; i < meals.length; i++) {
        if (meals[i]._id === payload.item._id) {
          meals[i].quantity++;
          found = true;
          break;
        }
      }
      if (!found) {
        meals.push({ ...payload.item, quantity: 1 });
      }
      return {
        ...state,
        cart: meals
      };
    default:
      return state;
  }
};