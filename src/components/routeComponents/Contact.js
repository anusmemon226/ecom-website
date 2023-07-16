import React from 'react'
import Breadcrumbs from '../Breadcrumbs'
import "../../assets/css/Contact.css"
import { faLocationDot,faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ContactForm from '../ContactForm'
function Contact() {
  return (
    <>
      <Breadcrumbs currPage="Contact"/>
      <div className="container contact-section">
        <div className="row w-100 m-0">
          <div className="col-12 col-lg-6 col-md-6 col-sm-12 mt-3 ">
            <div className="address-info">
              <div className="address-info-head">
                <h1>Contact Us</h1>
                <p>Contrary to popular belief, Lorem Ipsum is simply random text. It has roots in a piece of classical Latin literature from 45 BC, maki years old.</p>
              </div>
              <div className="address-info-body">
                <div className="address-body-card">
                  <div className="card-icon">
                    <span><FontAwesomeIcon icon={faLocationDot}/></span>
                  </div>
                  <div className="card-details">
                    <span>Address</span>
                    <p>60-49 Road 11378 New York</p>
                  </div>
                </div>
                <div className="address-body-card">
                  <div className="card-icon">
                    <span><FontAwesomeIcon icon={faPhone}/></span>
                  </div>
                  <div className="card-details">
                    <span>Phone</span>
                    <p>+923302626644</p>
                  </div>
                </div>
                <div className="address-body-card">
                  <div className="card-icon">
                    <span><FontAwesomeIcon icon={faEnvelope}/></span>
                  </div>
                  <div className="card-details">
                    <span>Email</span>
                    <p>anusm226#gmail.com</p>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
          <div className="contact-form-section col-12 col-lg-6 col-md-6 col-sm-12 mt-3">
            <ContactForm/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
