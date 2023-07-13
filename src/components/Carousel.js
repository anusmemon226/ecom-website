import React from "react";
import "../assets/css/Carousel.css";
import hero1bg from "../assets/images/hero-1.jpg";
import hero2bg from "../assets/images/hero-2.jpg";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
const CarouselSection = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item interval={2000}>
          <img
            className="hero-bg d-block w-100"
            src={hero1bg}
            alt="hero One"
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
            <button>Shop Now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="hero-bg d-block w-100"
            src={hero2bg}
            alt="hero two"
          />
          <Carousel.Caption>
            <h3>Label for Second slide</h3>
            <p>Sample Text for Image Two</p>
            <button>Shop Now</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselSection;
