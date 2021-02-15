import restaurants from '../api/restaurants';
import { FETCH_RESTAURANTS } from './types';
import axios from 'axios';

export const fetchRestaurants = (zipCode) => async (dispatch) => {
  console.log('zip code in actions: ', zipCode);
  const response = await axios.get(
    `https://api.documenu.com/v2/restaurants/search/fields?zip_code=${zipCode}&exact=true&key=f465194f22a155ddadbf18e045e1a5ad`
  );

  const parsedResponse = response.data.data;

  console.log('parsed response', parsedResponse);

  dispatch({ type: FETCH_RESTAURANTS, payload: parsedResponse });
};
