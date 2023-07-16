import React from "react";
import { Link } from 'react-router-dom'
function RegisterLoginTop(props) {
  return (
    <>
      <div className="register-top">
        <div className="register-head">
          <h1>{props.heading}</h1>
        </div>
        <div className="alreadyRegister">
          <p>
            {props.para} <Link to={props.link}>{props.linkText}</Link> here
          </p>
        </div>
      </div>
    </>
  );
}

export default RegisterLoginTop;
