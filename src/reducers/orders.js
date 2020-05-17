import * as types from '../constans/actionTypes';
import fbConfig from '../config/fbConfig';
import firebase from 'firebase';

var arr = [];
var db = firebase.firestore();
db.collection('/orders').get().then(function (snap) {
  snap.docs.map(item => {
    let obj = item.data();
    obj.id = item.id;
    arr.push(obj)
  })
});
var initialState = arr;
// var initialState = [];

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ORDERS:
      return action.orders;
    case types.CREATE_ORDER:
      var newOrderRef = db.collection('/orders').doc();
      console.log('newOrderRef id:', newOrderRef.id);
      // var setDoc = newOrderRef
      newOrderRef
        .set({
          id: newOrderRef.id,
          id_cart: action.order.id_cart,
          product: action.order.product_buy,
          id_user: action.order.id_user,
          name_user: action.order.name_user,
          address: action.order.address,
          phoneNumber: action.order.phoneNumber,
          quantity: action.order.quantity,
          total: action.order.total,
          date: action.order.date
        })
        .then(ref => {
          //...
        });
      //delete cart after pay
      action.order.id_cart.map(item =>
        db.collection('/carts').doc(item).delete().then(function () {
          console.log("Document successfully deleted!");
          window.location.href = "/";
        }).catch(function (error) {
          console.error("Error removing document: ", error);
        })
      )
      //update quantity product after pay
      action.order.product_buy.map(item => {
        var productFind = db.collection('/products').doc(item.id_product);
        productFind.get().then(function (doc) {
          if (doc.exists) {
            productFind.update({
              quantity: parseInt(doc.data().quantity) - parseInt(item.quantity_product)
            })
              .then(function () {
                console.log("Document successfully updated!");
              })
              .catch(function (error) {
                console.error("Error updating document: ", error);
              });
          } else {
            console.log("No such document!");
          }
        }).catch(function (error) {
          console.log("Error getting document:", error);
        });
      })
      return [...state];
    default:
      return state;
  }
};
export default myReducer;
