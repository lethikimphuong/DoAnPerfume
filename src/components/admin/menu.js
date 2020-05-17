import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Menu extends Component {

  render() {
    return (
      <nav className="page-nav">
        <div className="container">
          <div className="nav-wrap">
            <ul className="nav-left">
              <li className="nav-item">
                <Link to="/adminHome">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/product/list">Product Management</Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/listAccount">User Management</Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/orderManager">Order Management</Link>
              </li>
              <li className="nav-item">
                <Link to="/createAccountAdmin">Create New Admin Account</Link>
              </li>
            </ul>
            <li className="icon-menu" >
              <i className="fa fa-bars nav-item nav-dropdown">
                <ul className="nav-dropdown-list">
                  <li className="nav-dropdown-item">
                    <Link to="/adminHome">Home</Link>
                  </li>
                  <li className="nav-dropdown-item">
                    <Link to="/admin/product/list">Product Management</Link>
                  </li>
                  <li className="nav-dropdown-item">
                    <Link to="/admin/listAccount">User Management</Link>
                  </li>
                  <li className="nav-dropdown-item">
                    <Link to="/admin/orderManager">Order Management</Link>
                  </li>
                  <li className="nav-dropdown-item">
                    <Link to="/createAccountAdmin">Create New Admin Account</Link>
                  </li>
                </ul>
              </i>
            </li>
          </div>
        </div>
      </nav>
    )
  }
}
export default Menu;
