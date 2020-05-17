import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

function Register(props) {
  let history = useHistory();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  let handleChangeInput = (event) => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'address':
        setAddress(event.target.value);
        break;
      case 'phoneNumber':
        setPhoneNumber(event.target.value);
        break;
      case 'username':
        setUsername(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      case 'rePassword':
        setRePassword(event.target.value);
        break;
      default:
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      alert('Please input your name!');
    } else if (props.users.find(user => user.username === username)) {
      alert('Username already exists!');
    } else if (!address) {
      alert('Please input your address!');
    } else if (!phoneNumber) {
      alert('Please input your phone number!');
    } else if (isNaN(phoneNumber)) {
      alert('Please input correct number phone!');
    } else if (!username) {
      alert('Please input username!');
    } else if (!password) {
      alert('Please input password!');
    } else if (!rePassword) {
      alert('Please input repassword!');
    }
    else {
      if (password !== rePassword) {
        alert('Please input corect repassword!');
      } else {
        const newAccount = { name: name, address: address, phoneNumber: phoneNumber, username: username, password: password, rePassword: rePassword };
        props.onCreateAccount(newAccount);
        history.push("/login");
      }
    }
  }
  function handleReset() {
    setName('');
    setAddress('');
    setPhoneNumber('');
    setUsername('');
    setPassword('');
    setRePassword('');
  }
  return (
    <section className="section-main-content">
      <div className="container">
        <div className="section-wrap">
          <h3 className="section-title">Register</h3>
          <form className="form form-register">
            <div className="row form-item">
              <label className="col-3">Name: </label>
              <input className="inp-item" type="text" placeholder="your name" name="name" value={name} onChange={handleChangeInput}></input>
              <i className="fa fa-user-plus"></i>
            </div>
            <div className="row form-item">
              <label className="col-3">Address:</label>
              <input className="inp-item" type="text" placeholder="your address" name="address" value={address} onChange={handleChangeInput}></input>
              <i className="fa fa-map-marker"></i>
            </div>
            <div className="row form-item">
              <label className="col-3">Phone number: </label>
              <input className="inp-item" maxLength="10" type="text" placeholder="your phone number" name="phoneNumber" value={phoneNumber} onChange={handleChangeInput}></input>
              <i className="fa fa-phone"></i>
            </div>
            <div className="row form-item">
              <label className="col-3">Username:</label>
              <input className="inp-item" type="text" placeholder="username" name="username" value={username} onChange={handleChangeInput}></input>
              <i className="fa fa-envelope"></i>
            </div>
            <div className="row form-item">
              <label className="col-3">Password:</label>
              <input className="inp-item" type="password" placeholder="password" name="password" value={password} onChange={handleChangeInput}></input>
              <i className="fa fa-lock"></i>
            </div>
            <div className="row form-item">
              <label className="col-3">Repassword: </label>
              <input className="inp-item" type="password" placeholder="repassword" name="rePassword" value={rePassword} onChange={handleChangeInput}></input>
              <i className="fa fa-lock"></i>
            </div>
            <div className="row form-item form-btn">
              <button className="btn btn-add-new-product" id="js-btn-submit" onClick={handleSubmit}>Submit</button>
              <button className="btn btn-reset-new-product" onClick={handleReset}>Reset</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
const mapStateToProps = state => {
  return {
    users: state.users
  }
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onCreateAccount: (account) => {
      dispatch(actions.createAccount(account));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);
