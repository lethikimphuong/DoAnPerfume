import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

function CartList(props) {
  let listProduct = props.products;
  let products = props.cart.filter(product => product.id_user === props.match.params.id);
  products.map(product => {
    listProduct.map(pr => {
      if (product.id_product === pr.id) {
        if (product.quantity_product > pr.quantity) {
          return product.quantity_product = pr.quantity;
        }
      }
    })
  });
  products = products.filter((item) => item.quantity_product !== 0);

  let message;
  if (products.length === 0) {
    message = <p className="normal-title">Nothing in your cart</p>
  } else {
    message = <p className="normal-title"><span className="span-highlight">{products.length}</span> product in your cart</p>;
  }
  // let totalMoney = 0;
  // let countQuantity = 0;
  // for (var i = 0; i < products.length; i++) {
  //   totalMoney += parseInt(products[i].quantity_product) * parseInt(products[i].price_product);
  //   countQuantity += parseInt(products[i].quantity_product);
  // }
  // for (var i = 0; i < products.length; i++) {
  //   console.log(products[i].quantity_product);

  // }
  // console.log(countQuantity);

  let handelIncreaseProductCart = (e) => {
    props.onIncreaseProductCart(e.target.value);
  }
  let handelReduceProductCart = (e) => {
    props.onReduceProductCart(e.target.value);
  }
  let handleDeleteProduct = (e) => {
    props.onDeleteProductCart(e.target.value);
  }
  // let renderQuantity;

  return (
    <section className="section-new-product">
      <div className="container">
        <div className="section-wrap">
          <h3 className="section-title">Your Cart</h3>
          <div className="">
            {message}
          </div>
          <table className="tb-product">
            <thead className="thead">
              <tr>
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Brand</th>
                <th className="th-quantity">Quantity</th>
                <th className="th-price">Price</th>
                <th className="th-w15"></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td className="td-product-tt">{index + 1}</td>
                  <td className="">
                    <img className="td-product-img" src={product.image_product} />
                  </td>
                  <td className="">{product.name_product}</td>
                  <td className="">{product.brand_product}</td>
                  {/* {renderQuantity} */}
                  <td className="td-quantity">
                    <button
                      type="button"
                      className="btn btn-update-quantity"
                      value={product.id}
                      onClick={handelReduceProductCart}>
                      -
                    </button>
                    {product.quantity_product}
                    <button
                      type="button"
                      className="btn btn-update-quantity"
                      value={product.id}
                      onClick={handelIncreaseProductCart}>
                      +
                    </button>
                  </td>
                  <td className="td-center">${product.price_product}</td>
                  <td className="td-product-action">
                    <Link
                      to={`/${product.id}/pay`}
                      className="btn btn-edit"
                    >
                      Buy
                      {/* <i class="fa fa-shopping-cart"></i> */}
                    </Link>
                    <button
                      type="button"
                      className="btn btn-delete"
                      value={product.id}
                      onClick={handleDeleteProduct}
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* <tfoot>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td className="td-total"><span className="span-bold">Total</span></td>
                <td className="td-center">{countQuantity}</td>
                <td className="td-center"><span className="span-highlight">{totalMoney}</span></td>
                <td></td>
              </tr>
            </tfoot> */}
          </table>
          <button className="bt-margin-top">
            <Link
              to={`/id/pay`}
              className="btn btn-edit">
              Buy All
                    </Link>
          </button>
        </div>
      </div>
    </section >
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    cart: state.cart,
    userLogin: state.userLogin
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteProductCart: (id) => {
      dispatch(actions.deleteProductCart(id));
    },
    onIncreaseProductCart: (id) => {
      dispatch(actions.increaseQuantityProductCart(id));
    },
    onReduceProductCart: (id) => {
      dispatch(actions.reduceQuantityProductCart(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
