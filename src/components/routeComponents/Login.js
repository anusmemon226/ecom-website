import React from "react";
import RegisterLoginTop from "../RegisterLoginTop";
import "../../assets/css/Register.css"
import "../../assets/css/Login.css"
function Login() {
  return (
    <>
      <div className="login-section container">
        <div className="row w-100 m-0">
          <RegisterLoginTop
            heading="Welcome to Our Website"
            para="New User?"
            linkText="Register"
            link="/ecom-website/register"
          />
        </div>

        <div className="row w-100 m-0">
          <div className="login-form-section col-12">
            <div className="loginForm">
              <div className="email-pass-section">
                <input type="text" placeholder="Enter Your Email or Phone Number"/>
                <input type="text" placeholder="Enter Your Password"/>
              </div>
              <div className="login-button">
                <button>Login</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Login;
