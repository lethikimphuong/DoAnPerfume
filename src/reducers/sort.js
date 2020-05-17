import * as types from '../constans/actionTypes';
var initialState = {
  by: '',
  value: 1, //1 tang, -1 giam
};
var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SORT_PRODUCT:
      return {
        by: action.sort.by,
        value: action.sort.value,
      };
    default:
      return state;
  }
};
export default myReducer;
