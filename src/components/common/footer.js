import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Footer extends Component {

  render() {
    return (
      <footer className="page-footer">
        <section className="page-footer-top">
          <div className="container">
            <ul className="row info">
              <li className="col-3 info-item">
                <h4 className="info-title">Information</h4>
                <ul className="info-card">
                  <li className="info-card-item"><Link to="/aboutUsDetail" className="info-card-link">About Us</Link></li>
                  <li className="info-card-item"><a href="#" className="info-card-link">Delivery Information</a></li>
                  <li className="info-card-item"><a href="#" className="info-card-link">Privacy Pocity</a></li>
                  <li className="info-card-item"><a href="#" className="info-card-link">Terms & Conditions</a></li>
                </ul>
              </li>
              <li className="col-3 info-item">
                <h4 className="info-title">Customer service</h4>
                <ul className="info-card">
                  <li className="info-card-item"><a href="#" className="info-card-link">Shipping Policy</a></li>
                  <li className="info-card-item"><a href="#" className="info-card-link">Contact Us / Help</a></li>
                  <li className="info-card-item"><a href="#" className="info-card-link">Returns Policy</a></li>
                  <li className="info-card-item"><a href="#" className="info-card-link">Sitemap</a>
                  </li>
                </ul>
              </li>
              <li className="col-3 info-item">
                <h4 className="info-title">Extra</h4>
                <ul className="info-card">
                  <li className="info-card-item"><a href="#" className="info-card-link">Brands</a></li>
                  <li className="info-card-item"><a href="#" className="info-card-link">Gift Vouchers</a></li>
                  <li className="info-card-item"><a href="#" className="info-card-link">Affiliates</a></li>
                  <li className="info-card-item"><a href="#" className="info-card-link">Specials</a></li>
                </ul>
              </li>
              <li className="col-3 info-item info-item-folow">
                <h4 className="info-title">Folow us</h4>
                <ul className="info-card">
                  <li className="info-card-item"><i className="fa fa-facebook-f"></i><a href="#" className="info-card-link">Facebook</a>
                  </li>
                  <li className="info-card-item"><i className="fa fa-google"></i><a href="#" className="info-card-link">Google</a></li>
                  <li className="info-card-item"><i className="fa fa-youtube"></i><a href="#" className="info-card-link">Youtube</a>
                  </li>
                  <li className="info-card-item"><i className="fa fa-phone"></i><a href="#" className="info-card-link span-highlight">0909090909</a></li>
                  
                </ul>
              </li>
            </ul>
          </div>
        </section>
      </footer>
    )
  }
}
export default Footer;
