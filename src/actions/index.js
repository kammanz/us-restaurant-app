// import restaurants from '../api/restaurants';
import { FETCH_RESTAURANTS, IS_LOADING } from './types';
import axios from 'axios';

export const fetchRestaurants = (zipCode, isLoading) => async (dispatch) => {
  console.log('zip code in actions: ', zipCode);
  dispatch({ type: IS_LOADING, payload: isLoading });
  const response = await axios.get(
    `https://api.documenu.com/v2/restaurants/search/fields?zip_code=${zipCode}&exact=true&key=f465194f22a155ddadbf18e045e1a5ad`
  );

  console.log('response', response);

  const parsedResponse = response.data.data;

  console.log('parsed response', parsedResponse);

  dispatch({ type: FETCH_RESTAURANTS, payload: parsedResponse });
  dispatch({ type: IS_LOADING, payload: false });
};
