import * as types from '../constans/actionTypes';
import fbConfig from '../config/fbConfig';
import firebase from 'firebase';
var arr = [];
var db = firebase.firestore();
var storageRef = firebase.storage().ref();
db.collection('/carts').get().then(function (snap) {
  snap.docs.map(item => {
    let obj = item.data();
    obj.id = item.id;
    arr.push(obj)
  })
  // arr.map(item => {
  //   var fileName = item.image_product;
  //   var spaceRef = storageRef.child(fileName);
  //   spaceRef.getDownloadURL().then((url) => {
  //     item.image_product = url;
  //   })
  // })
});
// var initialState = arr;
var initialState = [];

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CARTS:
      return action.carts;
    case types.ADD_TO_CART:
      var newQuantityAdd;
      var findId = -1;
      var findIndex = -1;
      var idProduct;
      state.find((product, index) => {
        if (product.id_product === action.productToCart.id_product && product.id_user === action.productToCart.id_user) {
          idProduct = product.id_product;
          findId = product.id;
          newQuantityAdd = product.quantity_product+1;
          return findIndex = index;
        }
      });
      if (findId !== -1) {
        console.log(idProduct);
        console.log(newQuantityAdd);
        var productFind = db.collection('/products').doc(idProduct);
        productFind.get().then(function (snap) {
          console.log(snap.data().quantity);
          if (newQuantityAdd > snap.data().quantity) {
            alert('Not enough to add your cart!');
          } else {
            var productAdd = db.collection('/carts').doc(findId);
            productAdd.update({
              quantity_product: newQuantityAdd
            })
          }
        })
        state[findIndex].quantity_product += 1;
      } else {
        var newCartRef = db.collection('/carts').doc();
        var setDoc = newCartRef
          .set({
            id: newCartRef.id,
            id_product: action.productToCart.id_product,
            id_user: action.productToCart.id_user,
            name_product: action.productToCart.name_product,
            brand_product: action.productToCart.brand_product,
            image_product: action.productToCart.image_product,
            price_product: action.productToCart.price_product,
            quantity_product: action.productToCart.quantity_product
          })
          .then(ref => {
            //...
          });
        var newProductToCart = {
          id: newCartRef.id,
          id_product: action.productToCart.id_product,
          id_user: action.productToCart.id_user,
          name_product: action.productToCart.name_product,
          brand_product: action.productToCart.brand_product,
          image_product: action.productToCart.image_product,
          price_product: action.productToCart.price_product,
          quantity_product: action.productToCart.quantity_product
        };
        state.push(newProductToCart);
      }
      return [...state];
    case types.INCREASE_QUANTITY_PRODUCT_CART:
      var check;
      state.map(product => {
        if (product.id === action.id) {
          let newQuantityIn = product.quantity_product + 1;
          var productFind = db.collection('/products').doc(product.id_product);
          productFind.get().then(function (snap) {
            check = snap.data().quantity;
            newQuantityIn = product.quantity_product;
            if (newQuantityIn <= snap.data().quantity) {
              var productIn = db.collection('/carts').doc(action.id);
              productIn.update({
                quantity_product: newQuantityIn
              })
            }
            else {
              alert('Not enough products left!');
              // newQuantityIn = newQuantityIn - 2;
            }
          })
          return product.quantity_product = newQuantityIn;
        }
      })
      return [...state];
    case types.REDUCE_QUANTITY_PRODUCT_CART:
      let quantityReduce;
      state.map(product => {
        if (product.id === action.id) {
          if (parseInt(product.quantity_product) === 1) {
            console.log(product.id);
            state = state.filter((item) => item.id !== action.id);
            db.collection('/carts').doc(action.id).delete().then(function () {
              console.log("Document successfully deleted!");
            }).catch(function (error) {
              console.error("Error removing document: ", error);
            });
          }
          else {
            quantityReduce = product.quantity_product - 1;
            var findProduct = db.collection('/carts').doc(action.id);
            findProduct.update({
              quantity_product: quantityReduce
            })
            return product.quantity_product = product.quantity_product - 1;
          }
        }
      });
      return [...state];
    case types.DELETE_PRODUCT_CART:
      state = state.filter((item) => item.id !== action.id);
      db.collection('/carts').doc(action.id).delete().then(function () {
        console.log("Document successfully deleted!");
      }).catch(function (error) {
        console.error("Error removing document: ", error);
      });
      return state;
    default:
      return state;
  }
};
export default myReducer;
