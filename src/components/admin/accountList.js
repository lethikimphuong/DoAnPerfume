import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

function AccountList(props) {
  let history = useHistory();
  if(props.userLogin.role === 1){
    history.push('/');
  }
  var users = props.users.filter((item) => item.role !== 0);
  let orders = props.orders;
  let countBill = 0;
  let totalMoneyAll = 0;
  const [keyword, setKeyword] = useState('');
  const handleChangeInput = (e) => {
    setKeyword(e.target.value);
  }
  const handleSort = (sortBy, sortValue) => {
    props.onSort({
      by: sortBy,
      value: sortValue
    });
  }
  if (keyword !== '') {
    users = users.filter((user) => { return user.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1; })
  }
  // count for user
  let arrUser = users.map(item => {
    let count = 0;
    let totalMoney = 0;
    orders.map(order => {
      if (order.id_user === item.id) {
        count += 1;
        totalMoney += order.total;
      }
    })
    return { user: item, count: count, total: totalMoney };
  })
  const countUser = users.length;
  arrUser.map(item => {
    countBill += item.count;
    totalMoneyAll += item.total
  })
  if (props.sortAccount.by === 'name') {
    arrUser = arrUser.sort((a, b) => {
      if (a.name > b.name) return 1;
      else if (a.name < b.name) return -1;
      else return 0;
    })
  }
  if (props.sortAccount.by === 'quantity') {
    arrUser = arrUser.sort((a, b) => {
      if (a.count > b.count) return 1;
      else if (a.count < b.count) return -1;
      else return 0;
    })
  }
  let countUsers = arrUser.length;
  return (
    <section className="section-main-content">
      <div className="container">
        <div className="section-wrap">
          {/* <h3 className="section-title">User Management</h3> */}
          <div className="section-title-wrap"><h3 className="section-title">User Management </h3><h3 className="count-product"> ({countUsers})</h3></div>

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
                  <button className={(props.sortAccount.by === 'name' && props.sortAccount.value === 1) ? 'dropdown-item-btn dropdown-item-btn-select' : 'dropdown-item-btn'}>Sort By Name: A-Z</button>
                </li>
                <li className="dropdown-item" onClick={() => handleSort('quantity', 1)}>
                  <button className={(props.sortAccount.by === 'quantity' && props.sortAccount.value === 1) ? 'dropdown-item-btn dropdown-item-btn-select' : 'dropdown-item-btn'}>Sort By Bill</button>
                </li>
              </ul>
            </li>
          </div>
          <table className="tb-product">
            <thead className="thead">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Phone number</th>
                <th>Count bill</th>
                <th>Total bill</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {arrUser.map((item, index) => (
                <tr key={index}>
                  <td className="td-user-tt">{index + 1}</td>
                  <td className="td-user-name">{item.user.name}</td>
                  <td className="td-user-address">{item.user.address}</td>
                  <td className="td-user-phone">{item.user.phoneNumber}</td>
                  <td className="td-user-phone">{item.count}</td>
                  <td className="td-user-phone">${item.total}</td>
                  <td className="td-user-action">
                    <Link
                      to={`/${item.user.id}/historyUser`}
                      className="btn btn-edit"
                    >
                      See history
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="td-total">Total</td>
                <td>{countUser}</td>
                <td></td>
                <td></td>
                <td>{countBill}</td>
                <td>${totalMoneyAll}</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    orders: state.orders,
    sortAccount: state.sort,
    userLogin: state.userLogin
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

export default connect(mapStateToProps, mapDispatchToProps)(AccountList);
