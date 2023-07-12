import React from "react";
import "../assets/css/Navbar.css";
import logo from "../assets/images/web-logo.png";
import { faSearch,faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
const PrimaryNavbar = ()=>{
    return(
        <>
            <div className="container px-0 py-4">
                <div className="row w-100 m-0">
                    <div className="logo-box col-12 col-lg-3 col-md-3 col-sm-12">
                        <img src={logo} className="web-logo" alt="" />
                    </div>
                    <div className="col-12 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">
                        <input className="w-75 p-2" type="text" name="search" id="" placeholder="What do you need ?" />
                        <button className="nav-search-btn"><FontAwesomeIcon icon={faSearch}/></button>
                    </div>
                    <div className="cart-box col-12 col-lg-3 col-md-3 col-sm-12 d-flex">
                        <div className="cart-fav">
                            <div className="favourites-controller">
                                <FontAwesomeIcon icon={faHeart} className="heart-icon"/>
                                <span>0</span>
                            </div>
                            <div className="cart-controller">
                                <FontAwesomeIcon icon={faBagShopping} className="cart-icon"/>
                                <span>0</span>
                            </div>
                            <span className="cart-amount">$150.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PrimaryNavbar;