import {
  FETCH_RESTAURANTS,
  IS_LOADING_RESTAURANTS,
  FILTER_RESTAURANTS,
} from '../actions/types';

export default (
  state = { restaurants: [], filteredRestaurants: [], isLoading: false },
  action
) => {
  switch (action.type) {
    case IS_LOADING_RESTAURANTS:
      return { ...state, isLoading: true };
    case FETCH_RESTAURANTS:
      return { restaurants: action.payload, isLoading: false };
    case FILTER_RESTAURANTS:
      const filteredRestaurants = state.restaurants.filter((restaurant) => {
        const lowerCaseStr = restaurant.restaurant_name.toLowerCase();
        return lowerCaseStr.includes(action.payload);
      });
      return { ...state, filteredRestaurants: filteredRestaurants };
    default:
      return state;
  }
};
