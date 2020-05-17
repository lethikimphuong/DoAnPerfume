import * as types from '../constans/actionTypes';
var initialState = '';
var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_PRODUCT:
      return action.keyword;
    default:
      return state;
  }
};
export default myReducer;
