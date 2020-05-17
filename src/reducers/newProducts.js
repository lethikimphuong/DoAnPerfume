import * as types from '../constans/actionTypes';
import fbConfig from '../config/fbConfig';
import firebase from 'firebase';

var arr = [];
var db = firebase.firestore();
var storageRef = firebase.storage().ref();
db.collection('/products').get().then(function (snap) {
  snap.docs.map(item => {
    let obj = item.data();
    obj.id = item.id;
    arr.push(obj)
  })
});
// var initialState = arr;
var initialState = [];

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_PRODUCT_NEW:
      return action.newProducts;
    default:
      return state;
  }
};
export default myReducer;
