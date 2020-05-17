import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Slide from '../common/slide';
import imgLogo from '../../asets/images/logo.png';
import * as actions from '../../actions/index';

function Header(props) {
  let onHandleLogout = () => {
    props.onLogout();
  }
  // let products = props.cart.filter(product => product.id_user === props.userLogin.id);
  // let countQuantity = products.length;
  // console.log(products.length);
  // let countQuantity = 0;
  let renderLogo;
  let renderAccount;
  if (props.userLogin !== '' && props.userLogin.role === 1) {
    renderAccount =
      <ul className="account">
        <li>
          <ul className="account-wrap">
            <li className="user-name nav-dropdown">(<span className="span-highlight">{props.userLogin.name}</span>
              <ul className="nav-dropdown-list">
                <li className="nav-dropdown-item"><Link to={`/${props.userLogin.id}/editAccount`}><span>Info </span> <i className="fa fa-edit"></i></Link></li>
                <li className="nav-dropdown-item"><Link to={`/${props.userLogin.id}/history`}><span>History </span> <i className="fa fa-history"></i></Link></li>
              </ul>
            </li>
            <li className="cart">
              <Link to={`/${props.userLogin.id}/cart`}><i className="fa fa-shopping-cart"></i></Link>
              {/* <span className="cart-number" id="js-count">{countQuantity}</span> */}
              )
            </li>
            <li className="account-item left-10"><Link to="/login" onClick={onHandleLogout}><span>Logout</span><i className="fa fa-sign-out"></i></Link></li>
          </ul>
        </li>
      </ul>;
    renderLogo =
      <div className="page-title">
        <Link className="logo" to="/">
          <img src={imgLogo} alt="logo" />
        </Link>
        <span className="page-title-text"><Link className="logo" to="/">The Perfume</Link></span>
      </div>
  } else if (props.userLogin !== '' && props.userLogin.role === 0) {
    renderAccount =
      <ul className="account">
        <li className="account-item"><Link to="/login" onClick={onHandleLogout}><span>Logout</span><i className="fa fa-sign-out"></i></Link></li>
        <li className="account-item user-name"><Link to={`/${props.userLogin.id}/editAdmin`}>({props.userLogin.name})</Link></li>
      </ul>;
    renderLogo =
      <div className="page-title">
        <Link className="logo" to="/adminHome">
          <img src={imgLogo} alt="logo" />
        </Link>
        <span className="page-title-text"><Link className="logo" to="/adminHome">The Perfume</Link></span>
      </div>
  }
  else {
    renderAccount =
      <ul className="account">
        <li className="account-item account-item-left">
          <Link to="/register">Register</Link>
        </li>
        <li><Link to="/login">Login <i className="fa fa-sign-in"></i></Link></li>
      </ul>
    renderLogo =
      <div className="page-title">
        <Link className="logo" to="/">
          <img src={imgLogo} alt="logo" />
        </Link>
        <span className="page-title-text"><Link className="logo" to="/">The Perfume</Link></span>
      </div>
  }
  return (

    <header>
      <Slide />
      <section className="header-top">
        <div className="container">
          <div className="header-top-wrap">
            <div className="header-top-item">
              <a className="web-link" href=""><i className="fa fa-facebook-f"></i></a>
              <a className="web-link" href=""><i className="fa fa-google"></i></a>
              <a className="web-link" href=""><i className="fa fa-youtube"></i></a>
            </div>
            <div className="header-top-item">
              {renderLogo}
              {/* <div className="page-title">
                {renderLogo}
                <span className="page-title-text"><a href="#">The Perfume</a></span>
              </div> */}
              <span className="page-des shining-text">Your perfume is your message</span>
            </div>
            <div className="header-top-item">
              {renderAccount}
            </div>
          </div>
        </div>
      </section>
      {/* <Menu /> */}
    </header>
  )
}

const mapStateToProps = (state) => {
  return {
    userLogin: state.userLogin,
    cart: state.cart
  }
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onLogout: () => {
      dispatch(actions.logout());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
