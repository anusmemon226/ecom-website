import React from 'react'
import "../assets/css/Footer.css";
import { Link } from 'react-router-dom';
import { faFacebook,faTwitter,faInstagram,faPinterest } from '@fortawesome/free-brands-svg-icons';
import footerLogo from "../assets/images/web-logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Footer() {
  return (
    <>
        <div className="footer container-fluid bg-dark text-light">
            <div className="footer-container container">
                <div className="row">
                    <div className="col-12 col-lg-4 col-md-4 col-sm-12 my-3">
                        <div className="contact-info">
                            <div className="footer-logo">
                                <img src={footerLogo} alt="" />
                            </div>
                            <div className="info">
                                <p>Address: XYZ Road New York</p>
                                <p>Phone: +923302626644</p>
                                <p>Email: anusm226@gmail.com</p>
                            </div>
                            <div className="social-icons">
                                <FontAwesomeIcon icon={faFacebook}/>
                                <FontAwesomeIcon icon={faInstagram}/>
                                <FontAwesomeIcon icon={faTwitter}/>
                                <FontAwesomeIcon icon={faPinterest}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 col-md-4 col-sm-12 my-3">
                        <div>
                            <div className="link-head">
                                <h5>Quick Links</h5>
                            </div>
                            <div className="footer-links">  
                                <Link>Home</Link>
                                <Link>Shop</Link>
                                <Link>Contact</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 col-md-4 col-sm-12 my-3">
                        <div className="subscribe-head">
                            <h5>Join Our Newsletter Now</h5>
                        </div>
                        <div className="subscribe-body">
                            <p>Get E-mail updates about our latest shop and special offers.</p>
                            <div className="subscribe-input">
                                <input type="text" placeholder='Enter Email'/>
                                <button>Subscribe Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{margin:"60px 0 0 0"}}/>  
                <div className="row">
                    <div className="col-12">
                        <div className="footer-para">
                            <p>Copyright ©2023 All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer
