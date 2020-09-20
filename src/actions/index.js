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