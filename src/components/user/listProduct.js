import React from 'react';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/index';
import { connect } from 'react-redux';
// import firebase from 'firebase';

function ListProduct(props) {
  let arrProduct = props.products;
  if (props.match.params.id) {
    arrProduct = props.products.filter(product => product.brand === props.match.params.id);
  } else {
    arrProduct = props.products;
  }
  let countProducts = arrProduct.length;
  return (
    <section className="section-new-product">
      <div className="container">
        <div className="section-wrap">
          <div className="section-title-wrap"><h3 className="section-title">List product {props.match.params.id}</h3><h3 className="count-product"> ({countProducts})</h3></div>
          <ul className="row product-list">
            {
              arrProduct.map((product, index ) =>
                (<li className="col-3 product-item" key={index}>
                  <div className="product-wrap">
                    <img className="product-img" alt="abc" src={product.image[0]} />
                    <div className="product-card">
                      <h5 className="product-name">{product.name}</h5>
                      <p className="product-desc">{product.description}</p>
                      <p className="product-price-wrap">Price: <span className="span-bold">${product.price}</span></p>
                      <Link
                        to={`/${product.id}/detailProduct`}
                        className="btn btn-add"
                      >
                        Detail
                    </Link>
                    </div>
                  </div>
                </li>)
              )
            }
          </ul>
        </div>
      </div>
    </section>
  )
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
    keyword: state.search
  }
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onSearch: (keyword) => {
      dispatch(actions.search(keyword));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);
