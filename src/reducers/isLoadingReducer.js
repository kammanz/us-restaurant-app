import { IS_LOADING } from '../actions/types';
export default (state = false, action) => {
  console.log('action.payload', action.payload);
  switch (action.type) {
    case IS_LOADING:
      return action.payload;
    default:
      return state;
  }
};
