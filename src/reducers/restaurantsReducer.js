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
      console.log('filtered list 2');
      const filteredRestaurants = state.restaurants.filter((restaurant) => {
        console.log('in filter 4, action.payload', action.payload);
        return restaurant.restaurant_name.includes(action.payload);
      });

      console.log('reducer, filteredRestaurants: ', filteredRestaurants);

      return { ...state, filteredRestaurants: filteredRestaurants };
    // return {
    //   ...state,
    //   filteredRestaurants: state.restaurants.filter((restaurant) => {
    //     return restaurant.restaurant_name.includes(action.payload);
    //   }),
    // };
    default:
      return state;
  }
};
