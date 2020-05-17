import React from 'react';
import { Link} from 'react-router-dom';
import about1 from '../../asets/images/about1.png';
import about2 from '../../asets/images/about2.png';
import about3 from '../../asets/images/about3.png';
import about4 from '../../asets/images/about4.png';

class AboutUs extends React.Component {
  render() {
    return (
      <section className="section-main-content">
        <div className="col-left">
          <div className="container">
            <div className="col-left-wrap">
              <h3 className="section-title">About perfume shop <i className="fa fa-pencil"></i></h3>
              <p>For over 25 years we have been selling the widest range of women's perfumes and men's aftershaves at affordable prices. We stock the fragrances of nearly 130 brands including Hugo Boss, Paco Rabanne, Gucci, Ariana Grande and Marc Jacobs both online and across our network of over 250 nationwide stores. We also stock the luxury perfume brands Dior, Viktor & Rolf and Hermès.</p>
              <p>Not only do we have the experience of selling perfumes, we also have the expertise to match. Our staff are trained and developed so that they are the most knowledgeable sales advisors within the perfume industry and we can even boast about having the largest number of fragrance graduates nationwide.</p>
              <p>Online we offer FREE standard delivery, click and collect in 30 minutes, or the next working day, and we've even introduced a “Try Me” option on some of our most popular products where you'll receive a free sample, so if you're choosing a new perfume or aftershave you can smell that before you open your order...</p>
              <Link to="/aboutUsDetail"><button className="btn btn-about-us" name="btn-about" type="button">Read more</button></Link>
            </div>
          </div>
        </div>
        <div className="col-right">
          <div className="container">
            <h2 className="section-title">Guaranteed</h2>
            <ul className="about-ul-list">
              <li className="col-6">
                <img alt="abc" src={about1} />
                <p>Aromatherapy 100% Import</p>
              </li>
              <li className="col-6">
                <img alt="abc" src={about2} />
                <p>Manufactured At Factory Completed CGMP</p>
              </li>
              <li className="col-6">
                <img alt="abc" src={about3} />
                <p>World Famous Partner</p>
              </li>
              <li className="col-6">
                <img alt="abc" src={about4} />
                <p>Know Your Customer Understanding</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}
export default AboutUs;
