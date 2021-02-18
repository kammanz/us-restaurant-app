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
      const filteredByName = state.restaurants.filter((restaurant) => {
        const lowerCaseStr = restaurant.restaurant_name.toLowerCase();

        return lowerCaseStr.includes(action.payload);
      });

      const theseRestsHaveCuisinesArray = state.restaurants.filter(
        (restaurant) => {
          return restaurant.cuisines.length > 1;
        }
      );

      const filteredByCuisine = theseRestsHaveCuisinesArray.filter(
        (restaurant) => {
          return restaurant.cuisines.map((cuisine) => {
            const lowerCaseCuisine = cuisine.toLowerCase();
            if (lowerCaseCuisine.includes(action.payload)) {
              return restaurant;
            }
            return null;
          });
        }
      );

      return {
        ...state,
        filteredRestaurants: filteredByName || filteredByCuisine,
      };
    default:
      return state;
  }
};
