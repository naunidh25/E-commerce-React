import React from 'react';
import "./footer.scss";
const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
            <h1>Categories</h1>
            <span>Men</span>
            <span>Women</span>
            <span>Children</span>
            <span>Accessories</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Cookies</span>
        </div>
        <div className="item">
            <h1>About</h1>
            <span>
                Welcome to M&H, where fashion meets passion! At M&H, we're not just a clothing brand; 
                we're a lifestyle. Our story is woven from a love for style, quality, and individuality.
                </span>
        </div>
        <div className="item">
            <h1>Contact</h1>
            <span>
            Have a question or just want to say hello? We'd love to hear from you! Our dedicated team 
            at M&H is here to assist you in any way we can.
            </span>
        </div>
      </div>

      <div className="bottom">
        <span className="logo"> M&H </span>
        <span className="copyright"> © Copyright 2023. All Rights Reserved</span>
      </div>
    </div>
  )
}

export default Footer