import React, { useEffect } from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import Menu from './menu';
import * as actions from '../../actions/index';
import { connect } from 'react-redux';
import firebase from 'firebase';

function PageAdmin(props) {
  useEffect(() => {
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

    return (
      <div>
        <Header />
        <Menu />
        {/* component con của nó */}
        {props.children} 
        <Footer />
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
    onSetUsers: (users) => {
      dispatch(actions.setUsers(users));
    },
    onSetOrders: (orders) => {
      dispatch(actions.setOrders(orders));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PageAdmin);
