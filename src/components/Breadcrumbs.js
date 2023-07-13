import React from 'react'
import { Link } from 'react-router-dom'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Breadcrumbs(props) {
  return (
    <div className="breadcrumbs container">
        <div className="row w-100">
            <div className="col">
                <Link to="/ecom-website" className='text-dark text-decoration-none'><span><FontAwesomeIcon icon={faHome}/> Home </span></Link><span> / {props.currPage}</span>
            </div>
        </div>
    </div>
  )
}

export default Breadcrumbs
