import React from 'react'
import { Link } from 'react-router-dom'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import "../../assets/css/Error.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Error() {
  return (
    <div className="error-section container pb-0">
        <div className="row">
            <div className="col d-flex flex-column align-items-center">
                <h1>404</h1>
                <h4>There is Nothing here</h4>
                <p>...may be the page you are looking for is not found or never existed</p>
                <Link to={"/ecom-website/"}>Back to Home <FontAwesomeIcon icon={faArrowRight}/></Link>
            </div>
        </div>
    </div>
  )
}

export default Error
