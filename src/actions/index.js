// import restaurants from '../api/restaurants';
import {
  FETCH_RESTAURANTS,
  IS_LOADING_RESTAURANTS,
  FILTER_RESTAURANTS,
} from './types';
import axios from 'axios';

export const fetchRestaurants = (zipCode) => async (dispatch) => {
  dispatch({ type: IS_LOADING_RESTAURANTS });
  const response = await axios.get(
    `https://api.documenu.com/v2/restaurants/search/fields?zip_code=${zipCode}&exact=true&key=f465194f22a155ddadbf18e045e1a5ad`
  );
  const parsedResponse = response.data.data;
  dispatch({ type: FETCH_RESTAURANTS, payload: parsedResponse });
};

export const filterRestaurants = (name) => (dispatch) => {
  dispatch({ type: FILTER_RESTAURANTS, payload: name });
};
