import React from "react";
import Carousel from "react-grid-carousel";
import productImage from "../assets/images/product.jpg";
import { Link } from "react-router-dom";
import "../assets/css/ProductOutlet.css";
const ProductsOutlet = (props) => {
  return (
    <>
      <div className="container">
        <div className={`row d-flex ${props.reverse ?"flex-row-reverse":""}`}>
          <div className="col-12 col-lg-4 col-md-12 col-sm-12 position-relative">
            <div className={`${props.class==="mensBg" ? "men-banner-box" : "women-banner-box"}`}>
              <div className="banner-caption">
                <h3>WOMEN'S</h3>
                <button>Discover More</button>
              </div>
            </div>
          </div>
          <div className="categoryController col-12 col-lg-8 col-md-12 col-sm-12">
            <div className="categorylist">
              <ul>
                <Link className="active-cat">
                  <li>Clothings</li>
                </Link>
                <Link>
                  <li>Handbags</li>
                </Link>
                <Link>
                  <li>Shoes</li>
                </Link>
                <Link>
                  <li>Accessories</li>
                </Link>
              </ul>
            </div>
            <div className="cat-products-list">
              <Carousel
                cols={3}
                autoplay={3000}
                showDots
                loop
                gap={20}
              >
                <Carousel.Item>
                  <img src={productImage} />
                  <div className="product-banner-caption">
                    <p>Product 1</p>
                    <p>Product Name</p>
                    <p>$14.00</p>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={productImage} />
                  <div className="product-banner-caption">
                    <p>Product 1</p>
                    <p>Product Name</p>
                    <p>$14.00</p>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={productImage} />
                  <div className="product-banner-caption">
                    <p>Product 1</p>
                    <p>Product Name</p>
                    <p>$14.00</p>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={productImage} />
                  <div className="product-banner-caption">
                    <p>Product 1</p>
                    <p>Product Name</p>
                    <p>$14.00</p>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={productImage} />
                  <div className="product-banner-caption">
                    <p>Product 1</p>
                    <p>Product Name</p>
                    <p>$14.00</p>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={productImage} />
                  <div className="product-banner-caption">
                    <p>Product 1</p>
                    <p>Product Name</p>
                    <p>$14.00</p>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsOutlet;
