import {actionTypes} from "../constants";

const getInitalState = () => ({
  user: {},
  orders: [],
  restaurants: [],
  cart: [],
  isLoading: false,
  isAuthorized: false
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
    default:
      return state;
  }
};