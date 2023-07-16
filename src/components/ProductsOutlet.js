import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/ProductOutlet.css";
import CarouselProductItem from "./CarouselProductItem";
const ProductsOutlet = (props) => {
  return (
    <>
      <div className="container">
        <div className={`row d-flex ${props.reverse ?"flex-row-reverse":""}`}>
          <div className="col-12 col-lg-4 col-md-12 col-sm-12 position-relative">
            <div className={`${props.class==="mensBg" ? "men-banner-box" : "women-banner-box"}`}>
              <div className="banner-caption">
                <h3>{props.mens?props.mens:"WOMEN'S"}</h3>
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
              <CarouselProductItem/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsOutlet;
