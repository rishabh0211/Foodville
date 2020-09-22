import { actionTypes } from "../constants";

const getInitalState = () => ({
  user: {},
  orders: [],
  restaurants: [],
  cart: [],
  selectedRestaurant: {},
  isLoading: false,
  isAuthorized: false,
  userCreated: false,
  restaurantCreated: false,
  restaurantUpdated: false,
  cartRestaurantId: ''
});

let selectedRestaurant, meals;

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
    case actionTypes.LOGOUT_START:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.LOGOUT_SUCCESS:
      let initState = getInitalState();
      return {
        ...state,
        ...initState
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
      const restaurants = payload.restaurants.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0));
      return {
        ...state,
        restaurants,
        isLoading: false
      };
    case actionTypes.FETCH_RESTAURANT_START:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.FETCH_RESTAURANT_SUCCESS:
      payload.restaurant.meals = payload.restaurant.meals.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0));
      return {
        ...state,
        isLoading: false,
        selectedRestaurant: payload.restaurant
      };
    case actionTypes.ADD_ITEM_TO_CART:
      let cartRestaurantId = state.selectedRestaurant._id;
      meals = [...state.cart];
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
        cart: meals,
        cartRestaurantId
      };
    case actionTypes.REMOVE_ITEM_FROM_CART:
      let cart = JSON.parse(JSON.stringify(state.cart));
      cart = cart.map(item => {
        if (item._id === payload.item._id) {
          if (item.quantity === 1) {
            return null;
          } else {
            item.quantity--;
          }
        }
        return item;
      }).filter(item => !!item);
      return {
        ...state,
        cart
      };
    case actionTypes.CREATE_RESTAURANT_START:
      return {
        ...state,
        isLoading: true,
        restaurantCreated: false
      };
    case actionTypes.CREATE_RESTAURANT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        restaurantCreated: true,
        restaurants: [payload.restaurant, ...state.restaurants]
      };
    case actionTypes.UPDATE_RESTAURANT_START:
      return {
        ...state,
        isLoading: true,
        restaurantUpdated: false
      };
    case actionTypes.UPDATE_RESTAURANT_SUCCESS:
      return {
        ...state,
        restaurantUpdated: true,
        isLoading: false
      };
    case actionTypes.SET_RESTAURANT_CREATED_TO_FALSE:
      return {
        ...state,
        restaurantCreated: false
      };
    case actionTypes.DELETE_RESTAURANT_START:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.DELETE_RESTAURANT_SUCCESS:
      const list = state.restaurants.filter(res => res._id !== payload.restaurant._id);
      return {
        ...state,
        isLoading: false,
        restaurants: list
      };
    case actionTypes.ADD_MENU_ITEM_START:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.ADD_MENU_ITEM_SUCCESS:
      selectedRestaurant = JSON.parse(JSON.stringify(state.selectedRestaurant));
      selectedRestaurant.meals.push(payload.meal);
      selectedRestaurant.meals = selectedRestaurant.meals.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0));
      return {
        ...state,
        isLoading: false,
        selectedRestaurant
      };
    case actionTypes.UPDATE_MENU_ITEM_START:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.UPDATE_MENU_ITEM_SUCCESS:
      selectedRestaurant = JSON.parse(JSON.stringify(state.selectedRestaurant));
      selectedRestaurant.meals = selectedRestaurant.meals.map(meal => {
        if (meal._id === payload.meal._id) {
          return payload.meal;
        }
        return meal;
      });
      return {
        ...state,
        isLoading: false,
        selectedRestaurant
      };
    case actionTypes.DELETE_MENU_ITEM_START:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.DELETE_MENU_ITEM_SUCCESS:
      selectedRestaurant = JSON.parse(JSON.stringify(state.selectedRestaurant));
      selectedRestaurant.meals = selectedRestaurant.meals.filter(meal => meal._id !== payload.meal._id);
      return {
        ...state,
        isLoading: false,
        selectedRestaurant
      };
    case actionTypes.PLACE_ORDER_START:
      return {
        ...state,
        isLoading: true,
        orderPlaced: false
      };
    case actionTypes.PLACE_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        orderPlaced: true,
        cart: [],
        cartRestaurantId: '',
        orders: [payload.order, ...state.orders]
      };
    case actionTypes.SET_ORDER_PLACED_TO_FALSE:
      return {
        ...state,
        orderPlaced: false
      };
    case actionTypes.FETCH_ORDER_START:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.FETCH_ORDER_SUCCESS:
      payload.orders = payload.orders.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
      return {
        ...state,
        isLoading: false,
        orders: payload.orders
      };
    default:
      return state;
  }
};