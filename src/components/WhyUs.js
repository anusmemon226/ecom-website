import React from 'react'
import "../assets/css/WhyUs.css"
import { faTruckFast,faClock,faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function WhyUs() {
  return (
    <div className="whyUsMain container-fluid">

        <div className="whyUsBox container">
            <div className="row">
                <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                    <div className="whyUs">
                        <FontAwesomeIcon icon={faTruckFast}/>
                        <div className="shipping-caption">
                            <h3>FREE SHIPPING</h3>
                            <p>For all order over 99$</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                <div className="whyUs">
                        <FontAwesomeIcon icon={faClock}/>
                        <div className="shipping-caption">
                            <h3>DELIVERY ON TIME</h3>
                            <p>If good have prolems</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                <div className="whyUs">
                        <FontAwesomeIcon icon={faMoneyBill}/>
                        <div className="shipping-caption">
                            <h3>SECURE PAYMENT</h3>
                            <p>100% secure payment</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}   

export default WhyUs
