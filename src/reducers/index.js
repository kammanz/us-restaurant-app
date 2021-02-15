import { combineReducers } from 'redux';
import restaurantsReducer from './restaurantsReducer';

export default combineReducers({
  restaurants: restaurantsReducer,
  // name: nameReducer,
  // address: addressReducer,
  // cuisines: cuisineReducer,
});
