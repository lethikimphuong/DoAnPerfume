import * as types from '../constans/actionTypes';
import fbConfig from '../config/fbConfig';
import firebase from 'firebase';

var arr = [];
var db = firebase.firestore();
db.collection('/products').get().then(function (snap) {
  snap.docs.map(item => {
    let obj = item.data();
    obj.id = item.id;
    arr.push(obj)
  })
});
var initialState = [];

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_PRODUCTS: 
      return action.products;
    case types.LIST_ALL_PRODUCT:
      console.log(state);
      return state;
    case types.LIST_PRODUCT_BY_BRAND:
      console.log(action.product);
      state = state.map((item) => {
        if (item.brand === action.product.brand) {
          return {
            ...item,
            name: action.product.name,
            size: action.product.size,
            image: action.product.image,
            brand: action.product.brand,
            origin: action.product.origin,
            description: action.product.description,
            price: action.product.price,
            quantity: action.product.quantity,
          };
        }
        return item;
      });
      return state;
    case types.ADD_PRODUCT:
      state.push(action.product);
      return [...state];
    case types.DELETE_PRODUCT:
      state = state.filter((item) => item.id !== action.id);
      db.collection('/products').doc(action.id).delete().then(function () {
        console.log("Document successfully deleted!");
      }).catch(function (error) {
        console.error("Error removing document: ", error);
      });
      return state;
    case types.EDIT_PRODUCT:
      state = state.map((item) => {
        if (item.id === action.product.id) {
          return {
            ...item,
            name: action.product.name,
            size: action.product.size,
            image: action.product.image,
            brand: action.product.brand,
            origin: action.product.origin,
            description: action.product.description,
            price: action.product.price,
            quantity: parseInt(action.product.quantity),
          };
        }
        return item;
      });
      return state;
    default:
      return state;
  }
};
export default myReducer;
