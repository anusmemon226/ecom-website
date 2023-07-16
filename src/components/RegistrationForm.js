import React from 'react'

function RegistrationForm() {
  return (
    <>
    <div className="register-form-section row w-100 m-0">
          <div className="register-form-controller col-12 col-lg-6 col-md-12 col-sm-12">
            <div className="name-section">
              <input type="text" placeholder='Enter Your First Name'/>
              <input type="text" placeholder='Enter Your Last Name'/>
            </div>
            <div className="email-phone-section">
              <input type="tel" placeholder='Enter Your Phone Number'/>
              <input type="email" placeholder='Enter Your Email'/>
            </div>
            <div className="city-country-section">
              <input type="text" placeholder='Enter Your City'/>
              <input type="text" placeholder='Enter Your Country'/>
            </div>
            <div className="state-zip-section">
              <input type="text" placeholder='State/Province'/>
              <input type="text" placeholder='Postal Code'/>
            </div>
          </div>
          <div className="register-form-controller col-12 col-lg-6 col-md-12 col-sm-12">
            <div className="address-section">
              <textarea name="" id=""></textarea>
            </div>
            <div className="password-section">
              <input type="password" name="" id="" placeholder='Enter Password'/>
              <input type="password" name="" id="" placeholder='Confirm Password'/>
            </div>
            <div className="register-btn">
              <button>Register</button>
            </div>
          </div>
        </div>
    </>
  )
}

export default RegistrationForm
