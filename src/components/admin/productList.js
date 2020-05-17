import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import ProductSort from './productSort';
import ProductSearch from './productSearch';
import * as actions from '../../actions/index';

function ProductList(props) {
  let history = useHistory();
  if (props.userLogin.role !== 0) {
    history.push('/');
  }
  var products = props.products;
  if (products.length === 0) return null;
  let countQuantity = 0;
  for (var i = 0; i < products.length; i++) {
    countQuantity += parseInt(products[i].quantity);
  }
  function handleDeleteProduct(e) {
    e.preventDefault();
    const id = e.target.value;
    props.onDeleteProduct(id);
  }
  if (props.sortProduct.by === 'name') {
    products = props.products.sort((a, b) => {
      if (a.name > b.name) return 1;
      else if (a.name < b.name) return -1;
      else return 0;
    })
  }
  if (props.sortProduct.by === 'quantity') {
    products = props.products.sort((a, b) => {
      if (a.quantity > b.quantity) return 1;
      else if (a.quantity < b.quantity) return -1;
      else return 0;
    })
  }
  if (props.sortProduct.by === 'brand') {
    products = props.products.sort((a, b) => {
      if (a.brand > b.brand) return 1;
      else if (a.brand < b.brand) return -1;
      else return 0;
    })
  }
  if (props.sortProduct.by === 'day') {
    products = products.sort((a, b) => {
      if (a.date > b.date) return -1;
      else if (a.date < b.date) return 1;
      else return 0;
    })
  }
  if (props.keyword !== '') {
    products = products.filter((product) => { return product.name.toLowerCase().indexOf(props.keyword.toLowerCase()) !== -1; })
  }
  let countProducts = 0;
  countProducts = products.length;
  return (
    <section className="section-new-product">
      <div className="container">
        <div className="section-wrap section-product-manager">
          {/* <h3 className="section-title">Product Management</h3> */}
          <div className="section-title-wrap"><h3 className="section-title">Product Management </h3><h3 className="count-product"> ({countProducts})</h3></div>
          <button className="btn btn-add-new-product">
            <Link to="/admin/product/add">Add new product</Link>
          </button>
          <div className="div-search-wrap">
            <ProductSearch />
            <ProductSort />
          </div>
          <table className="tb-product">
            <thead className="thead">
              <tr>
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Date create</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td className="td-product-tt">{index + 1}</td>
                  <td className="">
                    <img className="td-product-img" src={product.image[0]} />
                  </td>
                  <td className="">{product.name}</td>
                  <td className="">{product.brand}</td>
                  <td className="">${product.price}</td>
                  <td className="">{product.quantity}</td>
                  <td className="">{product.date}</td>
                  <td className="td-product-action">
                    <Link
                      to={`/admin/${product.id}/edit`}
                      className="btn btn-edit"
                    >
                      <span>Edit</span>
                      <i className="fa fa-edit"></i>
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
            <tfoot>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="td-total"><span className="span-bold">Total</span></td>
                <td><span className="span-bold">{countQuantity}</span></td>
                <td></td>
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
    products: state.products,
    sortProduct: state.sort,
    keyword: state.search,
    userLogin: state.userLogin
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onListProduct: () => {
      dispatch(actions.listAllProduct());
    },
    onDeleteProduct: (id) => {
      dispatch(actions.deleteProduct(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
