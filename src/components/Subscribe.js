import React from 'react'
import "../assets/css/Subscribe.css";
function Subscribe() {
  return (
    <div className='newsletter container'>
        <div className="row w-100 m-0">
            <div className="col-12 p-0">
                <div className="newsletter-caption text-center">
                    <h1>NEWSLETTER</h1>
                    <p>Keep up our latest news and events. Subscribe our newsletter</p>
                    <div>
                        <input type="text" placeholder='Email Address'/><button>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Subscribe
