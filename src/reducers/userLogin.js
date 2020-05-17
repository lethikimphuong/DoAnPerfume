import * as types from '../constans/actionTypes';

var initialState = '';

let getUserLogin = JSON.parse(sessionStorage.getItem('userLogin'));
if (getUserLogin) {
  initialState = getUserLogin;
} else {
  initialState = initialState;
}

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGOUT:
      state = ''
      sessionStorage.setItem('userLogin', JSON.stringify(state));
      return state;
    case types.EDIT_ACCOUNT:
      // console.log(action.account.id);
      state = {
        ...state,
        name: action.account.name,
        address: action.account.address,
        phoneNumber: action.account.phoneNumber
      }
    sessionStorage.setItem('userLogin', JSON.stringify(state));
    return state;
    default:
      return state;
  }
};
export default myReducer;
