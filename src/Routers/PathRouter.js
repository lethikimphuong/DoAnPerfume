import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AppRouter from './AppRouter';
import PageUser from '../components/user/pageUser';
import Login from '../components/common/login';
import Register from '../components/user/register';
import MainContent from '../components/user/mainContent';
import AboutUsDetail from '../components/user/aboutUsDetail';
import ListProduct from '../components/user/listProduct';
import DetailProduct from '../components/user/detailProduct';
import PageAdmin from '../components/admin/pageAdmin';
import MainAdmin from '../components/admin/mainAdmin';
import ProductList from '../components/admin/productList';
import ProductAdd from '../components/admin/productAdd';
import ProductEdit from '../components/admin/productEdit';
import UserInfo from '../components/user/userInfo';
import AdminInfo from '../components/admin/adminInfo';
import AccountList from '../components/admin/accountList';
import CartList from '../components/user/cartList';
import Pay from '../components/user/pay';
import OrdersManager from '../components/admin/ordersManager';
import HistoryUser from '../components/common/historyUser';
import CreateAccountAdmin from '../components/admin/createAccountAdmin';
import ListSearchProduct from '../components/user/listSearchProduct';

export default class componentName extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <AppRouter
            path='/'
            layout={PageUser}
            exact
            component={MainContent}
          >
          </AppRouter>
          <AppRouter
            path='/adminHome'
            layout={PageAdmin}
            exact
            component={MainAdmin}
          ></AppRouter>
          {/* <AppRouter
            path='/admin'
            layout={PageAdmin}
            exact
            component={ListProduct}
          ></AppRouter> */}
          <AppRouter
            path='/login'
            layout={PageUser}
            exact
            component={Login}
          >
          </AppRouter>
          <AppRouter
            path='/register'
            layout={PageUser}
            exact
            component={Register}
          >
          </AppRouter>
          <AppRouter
            path='/aboutUsDetail'
            layout={PageUser}
            exact
            component={AboutUsDetail}
          >
          </AppRouter>
          <AppRouter
            path='/listProduct'
            layout={PageUser}
            exact
            component={ListProduct}
          >
          </AppRouter>
          <AppRouter
            path='/:id/listProduct'
            layout={PageUser}
            exact
            component={ListProduct}
          ></AppRouter>
          <AppRouter
            path='/:id/detailProduct'
            layout={PageUser}
            exact
            component={DetailProduct}
          ></AppRouter>
          <AppRouter
            path='/:id/editAccount'
            layout={PageUser}
            exact
            component={UserInfo}
          ></AppRouter>
          <AppRouter
            path='/:id/cart'
            layout={PageUser}
            exact
            component={CartList}
          ></AppRouter>
          <AppRouter
            path='/:id/pay'
            layout={PageUser}
            exact
            component={Pay}
          ></AppRouter>
          <AppRouter
            path='/:id/editAdmin'
            layout={PageAdmin}
            exact
            component={AdminInfo}
          ></AppRouter>
          <AppRouter
            path='/admin/listAccount'
            layout={PageAdmin}
            exact
            component={AccountList}
          ></AppRouter>
          <AppRouter
            path='/admin/product/list'
            layout={PageAdmin}
            exact
            component={ProductList}
          ></AppRouter>
          <AppRouter
            path='/admin/product/add'
            layout={PageAdmin}
            exact
            component={ProductAdd}
          ></AppRouter>
          <AppRouter
            path='/admin/:id/edit'
            layout={PageAdmin}
            exact
            component={ProductEdit}
          ></AppRouter>
          <AppRouter
            path='/admin/orderManager'
            layout={PageAdmin}
            exact
            component={OrdersManager}
          ></AppRouter>
           <AppRouter
            path='/:id/history'
            layout={PageUser}
            exact
            component={HistoryUser}
          ></AppRouter>
          <AppRouter
            path='/:id/historyUser'
            layout={PageAdmin}
            exact
            component={HistoryUser}
          ></AppRouter>
          <AppRouter
            path='/listSearchProduct'
            layout={PageUser}
            exact
            component={ListSearchProduct}
          ></AppRouter>
          <AppRouter
            path='/createAccountAdmin'
            layout={PageAdmin}
            exact
            component={CreateAccountAdmin}
          ></AppRouter>
        </Switch>
      </Router>
    );
  }
}
