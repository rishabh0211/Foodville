import * as actions from "../constants/actionTypes";

const getInitalState = () => ({
  user: {},
  orders: [],
  restaurants: [],
  cart: [],
  isLoading: false
});

export default (state = getInitalState(), action) => {
  switch(action.type) {
    case actions.FETCH_RESTAURANTS_START:
      return {
        ...state,
        isLoading: true
      };
    case actions.FETCH_RESTAURANTS_SUCCESS: 
      return {
        ...state,
        restaurants: action.restaurants,
        isLoading: false
      };
    default: 
      return state;
  }
};