import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchProduct from './searchProduct';

class Menu extends Component {

  render() {
    return (
      <nav className="page-nav">
        <div className="container">
          <div className="nav-wrap">
            <ul className="nav-left">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/listProduct">Products</Link>
              </li>
              <li className="nav-item nav-dropdown">HOT Brand
                <ul className="nav-dropdown-list">
                  <li className="nav-dropdown-item"><Link to={`/Dior/ListProduct`}>Dior</Link></li>
                  <li className="nav-dropdown-item"><Link to={`/Chanel/ListProduct`}>Chanel</Link></li>
                  <li className="nav-dropdown-item"><Link to={`/Tom Ford/ListProduct`}>Tom Ford</Link></li>
                  <li className="nav-dropdown-item"><Link to={`/Calvin Klein/ListProduct`}>Calvin</Link></li>
                  <li className="nav-dropdown-item"><Link to={`/Burberry/ListProduct`}>Burberry</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/aboutUsDetail">About Us</Link>
              </li>
            </ul>
            <li className="icon-menu" >
              <i className="fa fa-bars nav-item nav-dropdown">
                <ul className="nav-dropdown-list">
                  <li className="nav-dropdown-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="nav-dropdown-item">
                    <Link to="/listProduct">Products</Link>
                  </li>
                  <li className="nav-dropdown-item nav-dropdown-lv2">HOT Brand
                <ul className="nav-dropdown-list-lv2">
                      <li className="nav-dropdown-item-lv2"><Link to={`/Dior/ListProduct`}>Dior</Link></li>
                      <li className="nav-dropdown-item-lv2"><Link to={`/Chanel/ListProduct`}>Chanel</Link></li>
                      <li className="nav-dropdown-item-lv2"><Link to={`/Tom Ford/ListProduct`}>Tom Ford</Link></li>
                      <li className="nav-dropdown-item-lv2"><Link to={`/Calvin Klein/ListProduct`}>Calvin Klein</Link></li>
                      <li className="nav-dropdown-item-lv2"><Link to={`/Burberry/ListProduct`}>Burberry</Link></li>
                    </ul>
                  </li>
                  <li className="nav-dropdown-item">
                    <Link to="/aboutUsDetail">About Us</Link>
                  </li>
                </ul>
              </i>
            </li>
            <SearchProduct />
          </div>
        </div>
      </nav>
    )
  }
}
export default Menu;
