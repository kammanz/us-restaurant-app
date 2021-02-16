import { combineReducers } from 'redux';
import restaurantsReducer from './restaurantsReducer';
import isLoadingReducer from './isLoadingReducer';

export default combineReducers({
  restaurants: restaurantsReducer,
  isLoading: isLoadingReducer,
  // name: nameReducer,
  // address: addressReducer,
  // cuisines: cuisineReducer,
});
