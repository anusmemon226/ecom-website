import React from "react";
import "../assets/css/TopBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faEnvelope,faUserPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF , faTwitter , faLinkedinIn , faPinterestP } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
const TopBar = ()=>{
    return(

        // Topbar Container
        <div className="container-fluid topBar">
            
            <div className="container">

                <div className="row py-3">

                    {/* Column One  */}
                    <div className="col-12 col-lg-6 col-md-6 col-sm-12 px-0">
                    
                    {/* Email and Phone Number Div  */}
                        <div className="contact-info-section d-flex">
                                <a href="mailto:anusm226@gmail.com" className="text-dark text-decoration-none me-4 d-flex">
                                    <FontAwesomeIcon icon={faEnvelope} className="m-1"/><span className="ms-1">anusm226@gmail.com</span> 
                                </a>
                                <a href="tel:+923302626644" className="text-dark text-decoration-none d-flex">
                                    <FontAwesomeIcon icon={faPhone} className="m-1"/>+923302626644
                                </a>
                        </div>

                    </div>

                    {/* Column Two  */}
                    <div className="topRight col-12 col-lg-6 col-md-6 col-sm-12 px-0 d-flex flex-wrap">

                        {/* Social Media Icon Div  */}
                        <div className="social-media-icon">
                            <FontAwesomeIcon icon={faFacebookF} className="mx-2"/>
                            <FontAwesomeIcon icon={faTwitter} className="mx-2"/>
                            <FontAwesomeIcon icon={faLinkedinIn} className="mx-2"/>
                            <FontAwesomeIcon icon={faPinterestP} className="mx-2"/>
                        </div>

                        {/* Registration and Signup Div  */}
                        <div className="register-login d-flex">
                            <Link className="text-dark mx-4 d-flex"><FontAwesomeIcon icon={faUserPlus} className="m-1"/><span className="ms-1">Register</span></Link>
                            <Link className="text-dark d-flex"><FontAwesomeIcon icon={faUser} className="m-1"/><span className="ms-1">Login</span></Link>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default TopBar;