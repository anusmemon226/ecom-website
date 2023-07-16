import React from "react";

function ContactForm() {
  return (
    <div className="contact-form">
      <div className="contact-form-head">
        <h1>Leave A Comment</h1>
        <p>Our staff will call back later and answer your questions.</p>
      </div>
      <div className="contact-form-body">
        <div className="contact-name-section">
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Email" />
        </div>
        <div className="contact-message-section">
          <textarea name="" id="" rows="5"></textarea>
        </div>
        <div className="contact-form-button">
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
