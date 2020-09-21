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
    default:
      return state;
  }
};