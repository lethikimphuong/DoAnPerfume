import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

function OrdersManager(props) {
  // let history = useHistory();
  let orders = props.orders;
  let countQuantity = 0;
  let totalMoney = 0;
  const [keyword, setKeyword] = useState('');
  const handleChangeInput = (e) => {
    setKeyword(e.target.value);
  }
  if (keyword !== '') {
    orders = orders.filter((order) => { return order.name_user.toLowerCase().indexOf(keyword.toLowerCase()) !== -1; })
  }
  const handleSort = (sortBy, sortValue) => {
    props.onSort({
      by: sortBy,
      value: sortValue
    });
  }
  if (props.sortOrder.by === 'name') {
    orders = orders.sort((a, b) => {
      if (a.name_user > b.name_user) return 1;
      else if (a.name_user < b.name_user) return -1;
      else return 0;
    })
  }
  if (props.sortOrder.by === 'quantity') {
    orders = orders.sort((a, b) => {
      if (a.quantity > b.quantity) return 1;
      else if (a.quantity < b.quantity) return -1;
      else return 0;
    })
  }
  if (props.sortOrder.by === 'day') {
    orders = orders.sort((a, b) => {
      if (a.date > b.date) return -1;
      else if (a.date < b.date) return 1;
      else return 0;
    })
  }
  for (var i = 0; i < orders.length; i++) {
    countQuantity += parseInt(orders[i].quantity);
    totalMoney += parseInt(orders[i].total);
  }
  let countOrders = 0;
  countOrders = orders.length;
  return (
    <section className="section-new-product">
      <div className="container">
        <div className="section-wrap">
          {/* <h3 className="section-title">Order Management</h3> */}
          <div className="section-title-wrap"><h3 className="section-title">Order Management </h3><h3 className="count-product"> ({countOrders})</h3></div>
          <div className="div-search-wrap">
            <div className="search-wrap">
              <input
                className="inp-search"
                type="text"
                placeholder="Input user name"
                value={keyword}
                onChange={handleChangeInput}
              />
            </div>
            <li className="dropdown">
              <span>Sort By</span>
              <i className="fa fa-caret-up"></i>
              <ul className="dropdown-list">
                <li className="dropdown-item" onClick={() => handleSort('name', 1)}>
                  <button className={(props.sortOrder.by === 'name' && props.sortOrder.value === 1) ? 'dropdown-item-btn dropdown-item-btn-select' : 'dropdown-item-btn'}>Sort By Name: A-Z</button>
                </li>
                <li className="dropdown-item" onClick={() => handleSort('quantity', 1)}>
                  <button className={(props.sortOrder.by === 'quantity' && props.sortOrder.value === 1) ? 'dropdown-item-btn dropdown-item-btn-select' : 'dropdown-item-btn'}>Sort By Quantity</button>
                </li>
                <li className="dropdown-item" onClick={() => handleSort('day', 1)}>
                  <button className={(props.sortOrder.by === 'day' && props.sortOrder.value === 1) ? 'dropdown-item-btn dropdown-item-btn-select' : 'dropdown-item-btn'}>Sort By Day</button>
                </li>
              </ul>
            </li>
          </div>
          <table className="tb-product">
            <thead className="thead">
              <tr>
                <th></th>
                <th>Customer name:</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Day</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td className="td-product-tt">{index + 1}</td>
                  <td className="">
                    {order.name_user}
                  </td>
                  <td className="">
                    {order.product.map((item, index) =>
                      <div key={index}>
                        <span>{item.name_product}</span>
                        <span>({item.quantity_product})</span>
                      </div>
                    )}
                  </td>
                  <td className="">{order.quantity}</td>
                  <td className="">${order.total}</td>
                  <td className="">{order.date}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td></td>
                <td className="td-total">Total</td>
                <td>{countQuantity}</td>
                <td>${totalMoney}</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section >
  );
}

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
    sortOrder: state.sort
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSearch: (keyword) => {
      dispatch(actions.search(keyword));
    },
    onSort: (sort) => { //sort.by sort.value
      dispatch(actions.sortProduct(sort));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrdersManager);
