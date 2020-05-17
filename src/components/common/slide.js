import React from 'react';
import slide1 from '../../asets/images/slide1.jpg';
import slide2 from '../../asets/images/slide2.jpg';
import slide3 from '../../asets/images/slide3.jpg';
import Carousel from 'react-bootstrap/Carousel';
// import { Link } from 'react-router-dom';

class Slide extends React.Component {
  render() {
    return (
      <section className="slide">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slide1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slide2}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slide3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </section>
    )
  }
}

export default Slide;
