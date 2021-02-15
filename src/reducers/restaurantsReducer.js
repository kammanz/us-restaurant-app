import { FETCH_RESTAURANTS } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_RESTAURANTS:
      console.log('state and payload', [...state, action.payload]);
      return action.payload;
    default:
      return state;
  }
};
