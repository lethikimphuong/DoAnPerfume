import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
// import fbConfig from '../../config/fbConfig';
import firebase from 'firebase';
import * as actions from '../../actions/index';

function ProductAdd(props) {
  let history = useHistory();
  if (props.userLogin.role !== 0) {
    history.push('/');
  }
  const [nameProduct, setNameProduct] = useState('');
  const [sizeProduct, setSizeProduct] = useState('');
  const [brandProduct, setBrandProduct] = useState('');
  const [originProduct, setOriginProduct] = useState('');
  const [descriptionProduct, setDescriptionProduct] = useState('');
  const [priceProduct, setPriceProduct] = useState('');
  const [quantityProduct, setQuantityProduct] = useState('');
  let handleChangeInput = (event) => {
    switch (event.target.name) {
      case 'name':
        setNameProduct(event.target.value);
        break;
      case 'size':
        setSizeProduct(event.target.value);
        break;
      case 'brand':
        setBrandProduct(event.target.value);
        break;
      case 'origin':
        setOriginProduct(event.target.value);
        break;
      case 'description':
        setDescriptionProduct(event.target.value);
        break;
      case 'price':
        setPriceProduct(event.target.value);
        break;
      case 'quantity':
        setQuantityProduct(event.target.value);
        break;
      default:
        break;
    }
  }
  const [imageUp, setImageUp] = useState();
  const [imageUp1, setImageUp1] = useState();
  const [imageUp2, setImageUp2] = useState();
  const [imageProduct, setImageProduct] = useState();
  const [imageProduct1, setImageProduct1] = useState();
  const [imageProduct2, setImageProduct2] = useState();
  function handleChangeImage(event) {
    setImageProduct(event.target.files[0]);
    setImageUp(URL.createObjectURL(event.target.files[0]));
  }

  function handleChangeImage1(event) {
    setImageProduct1(event.target.files[0]);
    setImageUp1(URL.createObjectURL(event.target.files[0]));
  }
  function handleChangeImage2(event) {
    setImageProduct2(event.target.files[0]);
    setImageUp2(URL.createObjectURL(event.target.files[0]));
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!imageProduct || !imageProduct1 || !imageProduct2) {
      alert('Please input 3 image product!')
    } else if (!nameProduct) {
      alert('Please input name product!')
    } else if (!sizeProduct) {
      alert('Please input size product!')
    } else if (isNaN(sizeProduct) || parseInt(sizeProduct) < 0) {
      alert('Please input correct size product!');
    } else if (!originProduct) {
      alert('Please input origin product!')
    } else if (!brandProduct) {
      alert('Please input brand product!')
    } else if (!descriptionProduct) {
      alert('Please input description product!')
    } else if (!priceProduct) {
      alert('Please input price product!')
    } else if (isNaN(priceProduct) || parseInt(priceProduct) < 0) {
      alert('Please input correct price product!');
    } else if (!quantityProduct) {
      alert('Please input quantity product!')
    } else if (isNaN(quantityProduct) || parseInt(quantityProduct) < 0) {
      alert('Please input correct quantity product!');
    }
    else {
      let date = new Date();
      let dateOrder = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
      const newProduct = { name: nameProduct, size: sizeProduct, brand: brandProduct, origin: originProduct, image: [imageProduct, imageProduct1, imageProduct2], description: descriptionProduct, price: priceProduct, quantity: quantityProduct, date: dateOrder };
      var db = firebase.firestore();
      var newProductRef = db.collection('/products').doc();
      let i = [];
      newProduct.image.forEach(file => {
        var promise = new Promise(function (resolve, reject) {
          const uploadTask = firebase.storage().ref().child(`${file.name}`).put(file);
          uploadTask.on(
            firebase.storage.TaskEvent.STATE_CHANGED,
            snapshot => { },
            error => console.log(error.code),
            async () => {
              let downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
              resolve(downloadURL);
            }
          );
        });
        i.push(promise);
      })
      Promise.all(i).then(e => {
        newProductRef
          .set({
            name: newProduct.name,
            size: newProduct.size,
            brand: newProduct.brand,
            origin: newProduct.origin,
            image: e,
            description: newProduct.description,
            price: newProduct.price,
            quantity: parseInt(newProduct.quantity),
            date: newProduct.date
          });
        let newProductt = {
          id: newProductRef.id,
          name: newProduct.name,
          size: newProduct.size,
          brand: newProduct.brand,
          origin: newProduct.origin,
          image: e,
          description: newProduct.description,
          price: newProduct.price,
          quantity: parseInt(newProduct.quantity),
          date: newProduct.date
        };
        props.onAddProduct(newProductt);
      }
      );
      history.push("/admin/product/list");
    }
  }
  function handleReset() {
    setImageUp('');
    setImageUp1('');
    setImageUp2('');
    setSizeProduct('');
    setNameProduct('');
    setBrandProduct('');
    setDescriptionProduct('');
    setPriceProduct('');
    setQuantityProduct('');
  }
  return (
    <section className="section-new-product">
      <div className="container">
        <div className="section-wrap section-edit">
          <h3 className="section-title">Add new Product</h3>
          <div className="form-add">
            <div className="row form-item">
              <label className="">Product image: </label>
              <div className="row select-img-wrap">
                <div className="add-img-product">
                  <img className="col-6 img-product-form" src={imageUp} alt="Please chose image product!" />
                  <input className="inp-image" type="file" onChange={handleChangeImage} />
                </div>
                <div className="add-img-product">
                  <img className="col-6 img-product-form" src={imageUp1} alt="Please chose image product!" />
                  <input className="inp-image" type="file" onChange={handleChangeImage1} />
                </div>
                <div className="add-img-product">
                  <img className="col-6 img-product-form" src={imageUp2} alt="Please chose image product!" />
                  <input className="inp-image" type="file" onChange={handleChangeImage2} />
                </div>
              </div>
            </div>
            <div className="row form-item">
              <label className="col-25">Product name: </label>
              <input className="inp-item" type="text" placeholder="Product name" name="name" value={nameProduct} onChange={handleChangeInput}></input>
            </div>
            <div className="row form-item">
              <label className="col-3">Size: </label>
              <input className="inp-item" type="text" placeholder="Product size" name="size" value={sizeProduct} onChange={handleChangeInput}></input>
            </div>
            <div className="row form-item">
              <label className="col-3">Brand: </label>
              <input className="inp-item" type="text" placeholder="Product brand" name="brand" value={brandProduct} onChange={handleChangeInput}></input>
            </div>
            <div className="row form-item">
              <label className="col-3">Origin: </label>
              <input className="inp-item" type="text" placeholder="Origin product" name="origin" value={originProduct} onChange={handleChangeInput}></input>
            </div>
            <div className="row form-item">
              <label className="col-3">Description: </label>
              <textarea className="inp-item inp-description-product" type="text" placeholder="Description" name="description" value={descriptionProduct} onChange={handleChangeInput}></textarea>
            </div>
            <div className="row form-item">
              <label className="col-3">Price: </label>
              <input className="inp-item" type="text" placeholder="Product price" name="price" value={priceProduct} onChange={handleChangeInput}></input>
            </div>
            <div className="row form-item">
              <label className="col-3">Quantity: </label>
              <input className="inp-item" type="text" placeholder="Product quantity" name="quantity" value={quantityProduct} onChange={handleChangeInput}></input>
            </div>
            <div className="row form-item form-btn">
              <button className="btn btn-add-new-product" onClick={handleSubmit}>Submit</button>
              <button className="btn btn-reset-new-product" onClick={handleReset}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
const mapStateToProps = state => {
  return {
    products: state.products,
    userLogin: state.userLogin
  }
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddProduct: (product) => {
      dispatch(actions.addProduct(product));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductAdd);
