import React from 'react';
import imgBg from '../../asets/images/bg.png';
import imgService1 from '../../asets/images/Service1.png';
import imgService2 from '../../asets/images/service2.png';
import imgService3 from '../../asets/images/service3.png';
class AboutUsDetail extends React.Component {

  render() {
    return (
      <section className="section-about-us section-about-us-detail">
        <div className="container">
          <h3 className="section-title">About perfume shop<i className="fa fa-pencil"></i></h3>
          <div className="about-1-wrap">
            <img className="img-about" alt="abc" src={imgBg} />
            <p>For over 25 years we have been selling the widest range of women's perfumes and men's aftershaves at affordable prices. We stock the fragrances of nearly 130 brands including Hugo Boss, Paco Rabanne, Gucci, Ariana Grande and Marc Jacobs both online and across our network of over 250 nationwide stores. We also stock the luxury perfume brands Dior, Viktor & Rolf and Hermès.
            Not only do we have the experience of selling perfumes, we also have the expertise to match. Our staff are trained and developed so that they are the most knowledgeable sales advisors within the perfume industry and we can even boast about having the largest number of fragrance graduates nationwide.</p>
          </div>
          <p>Online we offer FREE standard delivery, click and collect in 30 minutes, or the next working day, and we've even introduced a “Try Me” option on some of our most popular products where you'll receive a free sample, so if you're choosing a new perfume or aftershave you can smell that before you open your order...</p>
          <p>Our massive collection of fragrances hugely surpasses what you could find at any individual shop. We also offer reviews of all of the perfumes we stock, making it easy to find what you’re looking for. As a result, first-time shoppers and the most discerning connoisseurs can both find just the right scent at a surprisingly low price.</p>
          <p>If you’re looking for a new scent, take a look at our wide selection of discount perfume from the hottest brands, including Dolce & Gabbana, Burberry, Calvin Klein, Lancome, Giorgio Armani, Bvlgari, Calvin Klein, Givenchy, and Gucci. Pick up something for him with a bottle of discount cologne. Plus, our delivery service makes it easy to send cheap perfumes to loved ones for special occasions. If you’re looking to try a new brand, we’ll keep you abreast of the week’s top sellers. Plus, our scent experts offer detailed notes on all of our scents, letting you shop confidently.</p>
          <p>In addition, ordering with Perfume is easy and fast. We ship to every country in the world, and most of our fragrances ship from our headquarters within hours of your order.</p>
          <div className="div-service">
            <h4 className="div-title section-title">Our service</h4>
            <ul className="row service-list">
              <li className="col-4 service-item">
                <img className="img-about1" alt="abc" src={imgService1} />
              Delivery time is always guaranteed on schedule on Saturday & Sunday, in order to best meet the shipping needs of customers.
            </li>
              <li className="col-4 service-item ">
                <img className="img-about2" alt="abc" src={imgService2} />
                <div className="flex-row">
                  <p>Consulting customer support 24/24 </p>
                  <span className="span-highlight">0909090909</span>
                </div>
              </li>
              <li className="col-4 service-item">
                <img className="img-about3" alt="abc" src={imgService3} />
              Returns or exchanges must be made within 30 days of the original purchase shipping date, product(s) must be unused and in original product packaging.
            </li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}
export default AboutUsDetail;
