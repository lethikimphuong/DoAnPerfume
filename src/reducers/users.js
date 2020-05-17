import * as types from '../constans/actionTypes';
import fbConfig from '../config/fbConfig';
import firebase from 'firebase';

var arr = [];
var db = firebase.firestore();
db.collection('/users').get().then(function (snap) {
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
    case types.SET_USER:
      return action.users;
    case types.LIST_ALL_USER:
      return state;
    case types.CREATE_ACCOUNT:
      var newUserRef = db.collection('/users').doc();
      console.log('newUserRef id:', newUserRef.id);
      // var setDoc = newUserRef
      newUserRef
        .set({
          id: newUserRef.id,
          role: 1,
          name: action.account.name,
          address: action.account.address,
          phoneNumber: action.account.phoneNumber,
          username: action.account.username,
          password: action.account.password,
          rePassword: action.account.rePassword
        })
        .then(ref => {
          //...
        });
      var newAccount = {
        id: newUserRef.id,
        role: 1,
        name: action.account.name,
        address: action.account.address,
        phoneNumber: action.account.phoneNumber,
        username: action.account.username,
        password: action.account.password,
        rePassword: action.account.rePassword,
      };
      state.push(newAccount);
      // db.collection('/users').add(newAccount)
      //   .then(function (docRef) {
      //     return docRef.get();
      //   })
      //   .then(function (snap) {
      //   })
      return [...state];
    case types.CREATE_ACCOUNT_ADMIN:
      var newUserRef = db.collection('/users').doc();
      console.log('newUserRef id:', newUserRef.id);
      // var setDoc = newUserRef
      newUserRef
        .set({
          id: newUserRef.id,
          role: 0,
          name: action.account.name,
          address: action.account.address,
          phoneNumber: action.account.phoneNumber,
          username: action.account.username,
          password: action.account.password,
          rePassword: action.account.rePassword
        })
        .then(ref => {
          //...
        });
      var newAccount = {
        id: newUserRef.id,
        role: 1,
        name: action.account.name,
        address: action.account.address,
        phoneNumber: action.account.phoneNumber,
        username: action.account.username,
        password: action.account.password,
        rePassword: action.account.rePassword,
      };
      state.push(newAccount);
      return [...state];
    case types.EDIT_ACCOUNT:
      state = state.map((user) => {
        if (user.id === action.account.id) {
          return {
            ...user,
            name: action.account.name,
            address: action.account.address,
            phoneNumber: action.account.phoneNumber
          };
        }
        return user;
      });
      var user = db.collection('/users').doc(action.account.id);
      user.update({
        name: action.account.name,
        address: action.account.address,
        phoneNumber: action.account.phoneNumber
      })
        .then(function () {
          console.log("Document successfully updated!");
        })
        .catch(function (error) {
          console.error("Error updating document: ", error);
        });
      return state;
    default:
      return state;
  }
};
export default myReducer;
