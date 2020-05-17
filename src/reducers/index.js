import { combineReducers } from 'redux';
import products from './products';
import sort from './sort';
import search from './search';
import users from './users';
import userLogin from './userLogin';
import comments from './comments';
import cart from './cart';
import orders from './orders';
import newProducts from './newProducts';

const myReducer = combineReducers({
  products: products,
  sort: sort,
  search: search,
  users: users,
  userLogin: userLogin,
  comments: comments,
  cart: cart,
  orders: orders,
  newProducts: newProducts
})
export default myReducer;
