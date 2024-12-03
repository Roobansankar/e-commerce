import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" style={{ marginTop: "149px" }}>
      <div className="footer-content">
        <h2>Get Exclusive Offers on Your Email</h2>
        <p>Subscribe to our newsletter and stay updated</p>
        <div className="subscribe-section">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
        <div className="social-icons">
          <FaFacebook className="icon" />
          <FaTwitter className="icon" />
          <FaInstagram className="icon" />
          <FaLinkedin className="icon" />
        </div>
        <div className="copyright">Copyright © ekart 2024</div>
      </div>
    </footer>
  );
};

export default Footer;
