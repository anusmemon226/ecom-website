import React from 'react'
import "../../assets/css/Register.css"
import RegistrationForm from '../RegistrationForm'
import RegisterLoginTop from '../RegisterLoginTop'
function Register() {
  return (
    <>
      <div className="register-section container">
        <div className="row w-100 m-0">
          <RegisterLoginTop heading="Create Your Account" para="Already Registered?" linkText="Login" link="/ecom-website/login"/>
        </div>
        <RegistrationForm/>
      </div>
    </>
  )
}

export default Register
