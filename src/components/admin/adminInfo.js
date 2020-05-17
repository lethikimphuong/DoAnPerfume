import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

function AdminInfo(props) {
  let history = useHistory();
  if(props.userLogin.role === 1){
    history.push('/');
  }
  const user = props.userLogin;
  const [name, setName] = useState(user.name);
  const [address, setAddress] = useState(user.address);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const React = require('react');

  let handleChangeInput = (event) => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'address':
        setAddress(event.target.value)
        break;
      case 'phoneNumber':
        setPhoneNumber(event.target.value)
        break;
      default:
        break;
    }
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert('Please input your name!')
    } else if (!address) {
      alert('Please input your address!')
    } else if (!phoneNumber) {
      alert('Please input your phone number!')
    } else if (isNaN(phoneNumber)) {
      alert('Please input correct number phone!');
    } else {
      const newAccount = { id: user.id, name: name, address: address, phoneNumber: phoneNumber }
      props.onEditAccount(newAccount);
      // history.push('/admin/product/list');
      history.push('/adminHome');
    }
  }
  return (
    <section className="section-new-product">
      <div className="container">
        <div className="section-wrap section-info">
          <h3 className="section-title">Your Profile</h3>
          <form className="form-wrap">
            <div className="row form-item">
              <label className="col-3">Your name: </label>
              <input className="inp-add-product inp-item" type="text" placeholder="Your name" name="name" value={name} onChange={handleChangeInput}></input>
            </div>
            <div className="row form-item">
              <label className="col-3">Address: </label>
              <input className="inp-add-product inp-item" type="text" placeholder="Address" name="address" value={address} onChange={handleChangeInput}></input>
            </div>
            <div className="row form-item">
              <label className="col-3">Phone number</label>
              <input className="inp-add-product inp-item" maxLength="10" type="text" placeholder="Phone number" name="phoneNumber" value={phoneNumber} onChange={handleChangeInput}></input>
            </div>
            <div className="row form-add-item form-btn">
              <button className="btn btn-add-new-product" onClick={handleSubmit}>Save your info</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
const mapStateToProps = (state) => {
  return {
    userLogin: state.userLogin
  }
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onEditAccount: (account) => {
      dispatch(actions.editAccount(account));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminInfo);
