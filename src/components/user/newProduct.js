import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function NewProduct(props) {
  let newProducts = props.newProducts;
  newProducts = newProducts.sort((a, b) => {
    if (a.date > b.date) return -1;
    else if (a.date < b.date) return 1;
    else return 0;
  })
  newProducts.length = 4;
  return (
    <section className="section-new-product">
      <div className="container">
        <div className="section-wrap">
          <h3 className="section-title">New product</h3>
          <ul className="row product-list">
            {
              newProducts.map((product, index) =>
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
          {/* <Link to="/listProduct"><button className="btn btn-see-more" name="btn-about" type="button">See all product</button></Link> */}
        </div>
      </div>
    </section>
  )
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
    newProducts: state.newProducts
  }
};
export default connect(mapStateToProps, null)(NewProduct);
