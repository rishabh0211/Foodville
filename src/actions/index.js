import * as actions from "../constants/actionTypes";

const getActionObj = (type, payload) => ({ type, payload });

export const getRestaurants = () => {
  return dispatch => {
    dispatch(getActionObj(actions.FETCH_RESTAURANTS_START));
    return fetch(`${actions.API_ENDPOINT}/api/restaurants`)
      .then(res => res.json)
      .then(restaurants => {
        dispatch(getActionObj(actions.FETCH_RESTAURANTS_SUCCESS, { restaurants }));
      });
  };
};