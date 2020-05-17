import * as types from '../constans/actionTypes';
import fbConfig from '../config/fbConfig';
import firebase from 'firebase';

var arr = [];
var list;
var db = firebase.firestore();
var storageRef = firebase.storage().ref();
db.collection('/comments').get().then(function (snap) {
  list = snap.docs;
  render();
});
function render() {
  list.map(item => {
    let obj = item.data();
    obj.id = item.id;
    arr.push(obj)
  })
}
// var initialState = arr;
var initialState = [];

function randomId() {
  return Math.floor(Math.random() * 10) + ""
    + Math.floor(Math.random() * 10) + ""
    + Math.floor(Math.random() * 10) + ""
    + Math.floor(Math.random() * 10);
}

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_COMMENTS:
      return action.comments;
    case types.LIST_COMMENT:
      return state;
    case types.ADD_COMMENT:
      var newComment = {
        id: parseInt(randomId()),
        id_product: action.comment.id_product,
        id_user: action.comment.id_user,
        name_user: action.comment.name_user,
        content: action.comment.content,
      };
      state.push(newComment);
      // localStorage.setItem('comments', JSON.stringify(state));
      db.collection('/comments').add(newComment)
        .then(function (docRef) {
          return docRef.get();
        })
        .then(function (snap) {
          list.push(snap);
          render();
        })
      return [...state];
    default:
      return state;
  }
};
export default myReducer;
