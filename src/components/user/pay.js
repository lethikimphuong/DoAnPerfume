import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

function Pay(props) {
  const user = props.userLogin;
  let products = [];
  let id_cart = [];
  let totalMoney = 0;
  let countQuantity = 0;
  let productBuy = [];
  // buy all
  if (props.match.params.id === 'id') {
    products = props.cart.filter(product => product.id_user === props.userLogin.id);
    products = products.filter((item) => item.quantity_product !== 0);
  } else {// buy 1
    products = props.cart.filter(product => product.id === props.match.params.id);
  }
  const [name, setName] = useState(user.name);
  const [address, setAddress] = useState(user.address);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);

  products.map(item => {
    totalMoney += parseInt(item.quantity_product) * parseInt(item.price_product);
    countQuantity += parseInt(item.quantity_product);
    let ob = { id_product: item.id_product, name_product: item.name_product, quantity_product: item.quantity_product };
    productBuy.push(ob);
    id_cart.push(item.id);
  })
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
  // let order = {
  //   id_cart: id_cart,
  //   name_user: name,
  //   id_user: props.userLogin.id,
  //   address: address,
  //   phoneNumber: phoneNumber,
  //   product_buy: productBuy,
  //   quantity: countQuantity,
  //   total: totalMoney + 1.5
  // }
  function handleSubmit(e) {
    let date = new Date();
    let dateOrder = date.getFullYear()+'/'+ (date.getMonth()+1) +'/'+ date.getDate() +' '+ date.getHours()+':'+ date.getMinutes()+':'+ date.getSeconds();
    let order = {
      id_cart: id_cart,
      name_user: name,
      id_user: props.userLogin.id,
      address: address,
      phoneNumber: phoneNumber,
      product_buy: productBuy,
      quantity: countQuantity,
      total: totalMoney + 1.5,
      date: dateOrder
    }
    e.preventDefault();
    props.onCreateOrder(order);
    alert('Order success!');
  }
  return (
    <section className="section-new-product">
      <div className="container">
        <div className="section-wrap">
          <h3 className="section-title">Your order infomation</h3>
          <div className="order-wrap">
            <form className="col-50">
              <div className="row form-item">
                <label className="col-4">Recipient's name: </label>
                <input className="inp-add-product col-10-4 span-line" type="text" placeholder="Your name" name="name" value={name} onChange={handleChangeInput}></input>
              </div>
              <div className="row form-item">
                <label className="col-4">Address: </label>
                <textarea className="inp-add-product textarea-pay col-10-4 span-line" type="text" placeholder="Address" name="address" value={address} onChange={handleChangeInput}></textarea>
              </div>
              <div className="row form-item">
                <label className="col-4">Phone number</label>
                <input className="inp-add-product col-10-4 span-line" maxLength="10" type="text" placeholder="Phone number" name="phoneNumber" value={phoneNumber} onChange={handleChangeInput}></input>
              </div>
              <div className="row form-item">
                <label className="col-4">Payment methods</label>
                <span className="span-bold span-method-pay col-10-4 span-line">Payment on delivery <i className="fa fa-money"></i></span>
              </div>
            </form>
            <div className="col-50 left">
              <div className="pay-list">
                {products.map((product, index) => (
                  <ul className="pay-row" key={index}>
                    <li className="stt">{index + 1}</li>
                    <li className="pay-img">
                      <img src={product.image_product} />
                    </li>
                    <li className="pay-name">{product.name_product}</li>
                    <li className="pay-brand">{product.brand_product}</li>
                    <li className="pay-quantity">
                      {product.quantity_product}
                    </li>
                    <li className="span-center">${product.price_product}</li>
                  </ul>
                ))}
              </div>
              <div className="space-center">
                <span>Quantity:</span>
                <span className="span-line">{countQuantity}</span>
              </div>
              <div className="space-center">
                <span>Temporary fee:</span>
                <span className="span-line">${totalMoney}</span>
              </div>
              <div className="space-center">
                <span>Transport fee:</span>
                <span className="span-line">$1.5</span>
              </div>
              <div className="space-center total">
                <span className="span-bold">Total:</span>
                <span className="span-line span-highlight">${totalMoney + 1.5}</span>
              </div>
            </div>
          </div>
          <div className="row display-end">
            <button className="btn " onClick={handleSubmit}>Order</button>
          </div>
        </div>
      </div>
    </section>
  )
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    userLogin: state.userLogin
  }
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onCreateOrder: (order) => {
      dispatch(actions.createOrder(order));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Pay);
