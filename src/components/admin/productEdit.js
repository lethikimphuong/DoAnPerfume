import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
// import fbConfig from '../../config/fbConfig';
import firebase from 'firebase';
import * as actions from '../../actions/index';

function ProductEdit(props) {
  let history = useHistory();
  if (props.userLogin.role !== 0) {
    history.push('/');
  }
  let product = props.products.find(item => item.id === props.match.params.id);

  let [nameProduct, setNameProduct] = useState('');
  let [sizeProduct, setSizeProduct] = useState('');
  let [brandProduct, setBrandProduct] = useState('');
  let [originProduct, setOriginProduct] = useState('');
  let [descriptionProduct, setDescriptionProduct] = useState('');
  let [priceProduct, setPriceProduct] = useState('');
  let [quantityProduct, setQuantityProduct] = useState('');
  let [imageProduct, setImageProduct] = useState('');
  let [imageProduct1, setImageProduct1] = useState('');
  let [imageProduct2, setImageProduct2] = useState('');
  let [imageUp, setImageUp] = useState('');
  let [imageUp1, setImageUp1] = useState('');
  let [imageUp2, setImageUp2] = useState('');

  let [imagePUT, setImagePUT] = useState('');
  let [imagePUT1, setImagePUT1] = useState('');
  let [imagePUT2, setImagePUT2] = useState('');

  useEffect(() => {
    if (!product) return;
    setNameProduct(product.name);
    setSizeProduct(product.size)
    setBrandProduct(product.brand);
    setOriginProduct(product.origin);
    setDescriptionProduct(product.description);
    setPriceProduct(product.price);
    setQuantityProduct(product.quantity);
    setImageProduct(product.image[0]);
    setImageProduct1(product.image[1]);
    setImageProduct2(product.image[2]);
    setImageUp(product.image[0]);
    setImageUp1(product.image[1]);
    setImageUp2(product.image[2]);
  }, [product])

  function handleChangeImage(event) {
    setImageProduct(event.target.files[0]);
    setImageUp(URL.createObjectURL(event.target.files[0]));
    setImagePUT(event.target.files[0]);
  }
  function handleChangeImage1(event) {
    setImageProduct1(event.target.files[0]);
    setImageUp1(URL.createObjectURL(event.target.files[0]));
    setImagePUT1(event.target.files[0]);
  }
  function handleChangeImage2(event) {
    setImageProduct2(event.target.files[0]);
    setImageUp2(URL.createObjectURL(event.target.files[0]));
    setImagePUT2(event.target.files[0]);
  }
  let handleChangeInput = (event) => {
    switch (event.target.name) {
      case 'name':
        setNameProduct(event.target.value);
        break;
      case 'size':
        setSizeProduct(event.target.value);
        break;
      case 'brand':
        setBrandProduct(event.target.value)
        break;
      case 'origin':
        setOriginProduct(event.target.value)
        break;
      case 'description':
        setDescriptionProduct(event.target.value)
        break;
      case 'price':
        setPriceProduct(event.target.value)
        break;
      case 'quantity':
        setQuantityProduct(event.target.value)
        break;
      default:
        break;
    }
  }

  function putImage(file) {
    return new Promise(function (resolve, reject) {
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
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!nameProduct) {
      alert('Please input product name!')
    } else if (!sizeProduct) {
      alert('Please input product size!')
    } else if (!originProduct) {
      alert('Please input product origin!')
    } else if (!brandProduct) {
      alert('Please input product brand!')
    } else if (!descriptionProduct) {
      alert('Please input product description!')
    } else if (!priceProduct) {
      alert('Please input product price!')
    } else if (!quantityProduct) {
      alert('Please input product quantity!')
    }
    else {
      const newProduct = {
        id: product.id,
        name: nameProduct,
        size: sizeProduct,
        image: [
          imageProduct,
          imageProduct1,
          imageProduct2
        ],
        brand: brandProduct,
        origin: originProduct,
        description: descriptionProduct,
        price: priceProduct,
        quantity: quantityProduct
      }
      var db = firebase.firestore();
      const imageUrl = imagePUT ? putImage(imagePUT) : Promise.resolve(imageProduct);
      const imageUrl1 = imagePUT1 ? putImage(imagePUT1) : Promise.resolve(imageProduct1);
      const imageUrl2 = imagePUT2 ? putImage(imagePUT2) : Promise.resolve(imageProduct2);

      const i = [imageUrl, imageUrl1, imageUrl2];
      Promise.all(i).then(e => {
        var product = db.collection('/products').doc(newProduct.id);
        product.update({
          name: newProduct.name,
          size: newProduct.size,
          image: e,
          brand: newProduct.brand,
          origin: newProduct.origin,
          description: newProduct.description,
          price: newProduct.price,
          quantity: parseInt(newProduct.quantity)
        })
          .then(function () {
            console.log("Document successfully updated!");
          })
          .catch(function (error) {
            console.error("Error updating document: ", error);
          });
        let newProductt = {
          id: newProduct.id,
          name: newProduct.name,
          size: newProduct.size,
          image: e,
          brand: newProduct.brand,
          origin: newProduct.origin,
          description: newProduct.description,
          price: newProduct.price,
          quantity: parseInt(newProduct.quantity)
        };
        props.onEditProduct(newProductt);
      });
      history.push("/admin/product/list");
    }
  }
  return (
    <section className="section-new-product">
      <div className="container">
        <div className="section-wrap section-edit">
          <h3 className="section-title">Edit Product</h3>
          <form className="form-add">
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
              <input className="inp-item" type="text" placeholder="Product origin" name="origin" value={originProduct} onChange={handleChangeInput}></input>
            </div>
            <div className="row form-item">
              <label className="col-3">Description: </label>
              <textarea className="inp-item inp-description-product" type="text" placeholder="Description" name="description" value={descriptionProduct} onChange={handleChangeInput}></textarea>
            </div>
            <div className="row form-item">
              <label className="col-3">Price: </label>
              <input className="inp-item" type="number" min="0" placeholder="Product price" name="price" value={priceProduct} onChange={handleChangeInput}></input>
            </div>
            <div className="row form-item">
              <label className="col-3">Quantity: </label>
              <input className="inp-item" type="number" min="0" placeholder="Product quantity" name="quantity" value={quantityProduct} onChange={handleChangeInput}></input>
            </div>
            <div className="row form-item form-btn">
              <button className="btn btn-add-new-product" onClick={handleSubmit}>Submit</button>
              <button className="btn btn-reset-new-product"><Link to="/admin/product/list">Back</Link></button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
    userLogin: state.userLogin
  }
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onEditProduct: (product) => {
      dispatch(actions.editProduct(product));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductEdit);
