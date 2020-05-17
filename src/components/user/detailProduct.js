import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { connect } from 'react-redux';
import ava from '../../asets/images/ava.jpeg';
import * as actions from '../../actions/index';
// import fbConfig from '../../config/fbConfig';
// import firebase from 'firebase';

function DetailProduct(props) {
  let history = useHistory();
  let product;
  const [content, setContent] = useState('');
  product = props.products.find(product => product.id === props.match.params.id);
  if (!product) return null;

  let listComment = props.comments.filter(comment => comment.id_product === product.id);
  let countComment = listComment.length;
  let renderComment;
  let handleInputContent = (e) => {
    setContent(e.target.value);
  }
  let handleAddComment = (event) => {
    if (event.key === 'Enter') {
      if (!userLogin) {
        alert('Please login before add product comment about this product!');
      } else {
        let check = 0;
        listComment.map(
          listComment => {
            if (listComment.id_user === props.userLogin.id && listComment.id_product === product.id) {
              check = check + 1;
            }
          }
        )
        if (check !== 0) {
          alert('You have already commented on this product!');
          setContent('You have already commented on this product!');
        }
        else {
          const newComment = { id_product: product.id, id_user: props.userLogin.id, name_user: props.userLogin.name, content: content }
          props.onAddComment(newComment);
          setContent('');
        }
      }
    }
  }
  if (!listComment) {
    renderComment = <p>No comment yet</p>
  } else {
    renderComment =
      listComment.map((comment, index) => (
        <li className="comment-item" key={index}>
          <img className="img-avatar" src={ava} />
          <ul className="comment-card">
            <li className="card-item">
              <h3 className="name-user">{comment.name_user}</h3>
            </li>
            <li className="cart-item">
              <p className="comment-detail"> {comment.content} </p>
            </li>
          </ul>
        </li>
      ))
  }
  let { userLogin } = props;
  let handleAddToCart = (event) => {
    let productToCart = {
      id_product: product.id,
      id_user: props.userLogin.id,
      name_product: product.name,
      brand_product: product.brand,
      image_product: product.image[0],
      price_product: product.price,
      quantity_product: 1,
    }
    if (!userLogin) {
      alert('Please login before add product to your cart!')
      history.push('/login');
    }
    else {
      props.onAddToCart(productToCart);
      history.push(`/${props.userLogin.id}/cart`);
      // alert('Add to cart successfully!');
    }
  }
  let renderBtn;
  if (product.quantity !== 0) {
    renderBtn = <button
      className="btn btn-add-to-card"
      onClick={handleAddToCart}
    >Add to cart</button>
  } else {
    renderBtn = <label className="label-out">Out of stock</label>
  }
  return (
    <section className="section-main-content">
      <div className="container">
        <div className="section-wrap">
          <div className="detail-top">
            <div className="col-4 detail-slide">
              <Carousel className="slide-img">
                <Carousel.Item className="slide-item">
                  <img
                    className="d-block w-100 img-detail"
                    src={product.image[0]}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-detail"
                    src={product.image[1]}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item className="slide-item">
                  <img
                    className="d-block w-100 img-detail"
                    src={product.image[2]}
                    alt="First slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="detail-left">
              <h3 className="product-name">{product.name}</h3>
              <h4 className="product-brand">{product.brand}</h4>
              <p className="span-bold">Size: <span className="span-highlight">{product.size}ml</span></p>
              <p className="span-bold">Quantity: <span className="span-highlight">{product.quantity}</span></p>
              <p className="product-price">Price: <span className="span-highlight">${product.price}</span></p>
              {/* {product.quantity > 0 && (<button
                className="btn btn-add-to-card"
                onClick={handleAddToCart}
              >Add to cart</button>)}
              {product.quantity = 0 && (
                <label>Out of stock</label>)} */}
              {renderBtn}
            </div>
          </div>
          <div className="div-wrap">
            <p className="div-second-title">Detail <i className="fa fa-info-circle span-highlight"></i></p>
            <p><span className="product-detail-item">Brand: </span><span className="product-brand-name">{product.brand}</span></p>
            <p><span className="product-detail-item">Origin: </span><span className="product-brand-name">{product.origin}</span></p>
            <p className="product-detail-item">Description:</p>
            <p className="product-detail-desciption">{product.description}</p>
          </div>
          <div className="share">
            <p className="normal-title">Share me</p>
            <div className="share-icon">
              <a href="#" className="share-link"><i className="fa fa-facebook-f"></i></a>
              <a href="#" className="share-link"><i className="fa fa-twitter"></i></a>
              <a href="#" className="share-link"><i className="fa fa-instagram"></i></a>
              <a href="#" className="share-link"><i className="fa fa-pinterest-p"></i></a>
            </div>
          </div>
          <div className="div-wrap">
            <p className="div-second-title">Comment<span className="span-highlight"> ({countComment})</span></p>
            <ul className="comment-list" id="js-comment-list">
              {renderComment}
            </ul>
            <div className="comment-box">
              <img className="img-avatar" src={ava} />
              <input className="input-comment" type="text"
                placeholder="Please comment something about this product" value={content} onChange={handleInputContent} onKeyPress={handleAddComment} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
const mapStateToProps = (state) => {
  return {
    users: state.users,
    products: state.products,
    userLogin: state.userLogin,
    comments: state.comments
  }
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddComment: (comment) => {
      dispatch(actions.addComment(comment));
    },
    onAddToCart: (productToCart) => {
      dispatch(actions.addToCart(productToCart));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct);
