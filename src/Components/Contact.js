import React, { useState } from "react";

export default function Contact() {
  return (
    <>
      <section id="contact-section">
        <div className="contact-container">
          <div className="main-contact-container">
            <div className="contact-first">
              <h1>CONTACT</h1>
              <h2>Don't be shy ! Hit me up !</h2>
            </div>
            <div className="contact-second">
              <div className="location">
              <div className="location-logo"><img src="./icons8-location-100.png"/></div>
              <div><h3>Location</h3>
                <p>Maharashtra,India</p></div>  
              </div>
              <div className="email">
                <div className="email-logo"><img src="./icons8-email-100.png"/></div>
                <div><h3>Email</h3>
                <p>akshayyydabhade@gmail.com</p></div>
              </div>
            </div>
          </div>
        </div>   
      </section>
    </>
  );
}
