import React, { useEffect } from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import Menu from '../user/menu';
import * as actions from '../../actions/index';
import { connect } from 'react-redux';
import firebase from 'firebase';

function PageUser(props) {

  useEffect(
    () => {
      var db = firebase.firestore();
      db.collection('/products').get()
        .then(function (snap) {
          const arr = snap.docs.map(item => {
            let obj = item.data();
            obj.id = item.id;
            return obj;
          });
          props.onSet(arr);
        });
    }, []);

  useEffect(
    () => {
      var db = firebase.firestore();
      db.collection('/products').get()
        .then(function (snap) {
          const arr = snap.docs.map(item => {
            let obj = item.data();
            obj.id = item.id;
            return obj;
          });
          props.onSetNewProduct(arr);
        });
    }, []);

  useEffect(
    () => {
      var db = firebase.firestore();
      db.collection('/carts').get()
        .then(function (snap) {
          const arr = snap.docs.map(item => {
            let obj = item.data();
            obj.id = item.id;
            return obj;
          });
          props.onSetCarts(arr);
        });
    }, []);

  useEffect(
    () => {
      var db = firebase.firestore();
      db.collection('/users').get()
        .then(function (snap) {
          const arr = snap.docs.map(item => {
            let obj = item.data();
            // obj.id = item.id;
            return obj;
          });
          props.onSetUsers(arr);
        });
    }, []);

  useEffect(
    () => {
      var db = firebase.firestore();
      db.collection('/orders').get()
        .then(function (snap) {
          const arr = snap.docs.map(item => {
            let obj = item.data();
            // obj.id = item.id;
            return obj;
          });
          props.onSetOrders(arr);
        });
    }, []);

  useEffect(
    () => {
      var db = firebase.firestore();
      db.collection('/comments').get()
        .then(function (snap) {
          const arr = snap.docs.map(item => {
            let obj = item.data();
            // obj.id = item.id;
            return obj;
          });
          props.onSetComments(arr);
        });
    }, []);

  return (
    <div>
      <Header></Header>
      <Menu></Menu>
      {props.children}
      <Footer></Footer>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
  }
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onSet: (products) => {
      dispatch(actions.setProducts(products));
    },
    onSetNewProduct: (newProducts) => {
      dispatch(actions.setNewProducts(newProducts));
    },
    onSetUsers: (users) => {
      dispatch(actions.setUsers(users));
    },
    onSetCarts: (carts) => {
      dispatch(actions.setCarts(carts));
    },
    onSetOrders: (orders) => {
      dispatch(actions.setOrders(orders));
    },
    onSetComments: (comments) => {
      dispatch(actions.setComments(comments));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PageUser);
