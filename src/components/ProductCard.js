import React from "react";
import ProductImage from "../assets/images/product.jpg";
function ProductCard() {
  return (
    <>
        <div className="product-card col-12 col-lg-4 col-md-6 col-sm-12">
          <div className="product-image">
            <img src={ProductImage} alt="" />
          </div>
          <div className="product-body">
            <span>Product Name</span>
            <p>Product Description will be here</p>
            <p>$13.00</p>
          </div>
        </div>
    </>
  );
}

export default ProductCard;
