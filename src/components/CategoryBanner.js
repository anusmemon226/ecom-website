import React from "react";
import "../assets/css/CategoryBanner.css";
import bannerOne from "../assets/images/banner-1.jpg"
import bannerTwo from "../assets/images/banner-2.jpg"
import bannerThree from "../assets/images/banner-3.jpg"
const CategoryBanner = ()=>{
    return(
        <>
            <div className="cat-banner-box container">
                <div className="row w-100 m-auto">
                    <div className="banner-controller col-12 col-lg-4 col-md-4 col-sm-12 position-relative my-3">
                        <img src={bannerOne} className="cat-banner" alt="" />
                        <div className="cat-banner-caption">
                            <h3>
                                Men's 
                            </h3>
                        </div>
                    </div>
                    <div className="banner-controller col-12 col-lg-4 col-md-4 col-sm-12 position-relative my-3">
                        <img src={bannerTwo} className="cat-banner" alt="" />
                        <div className="cat-banner-caption">
                            <h3>
                                Women's 
                            </h3>
                        </div>
                    </div>
                    <div className="banner-controller col-12 col-lg-4 col-md-4 col-sm-12 position-relative my-3">
                        <img src={bannerThree} className="cat-banner" alt="" />
                        <div className="cat-banner-caption">
                            <h3>
                                Kid's 
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default CategoryBanner;