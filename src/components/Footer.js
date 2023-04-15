import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            Odyssey<span>Outings</span>
          </h3>

          <p className="footer-links">
            <a href="#">Home</a>|<a href="#">About</a>|<a href="#">Contact</a>|
            <a href="#">SignUp</a>
          </p>

          <p className="footer-company-name">
            Copyright © 2023 <strong>OdysseyOutings</strong> All rights reserved
          </p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa-solid fa-location-dot"></i>
            <p>
              <span>Jalandhar</span>
              Punjab
            </p>
          </div>

          <div>
            <i className="fa-solid fa-phone-volume"></i>
            <p>+91 74**9**258</p>
          </div>
          <div>
            <i className="fa-sharp fa-solid fa-envelope"></i>
            <p>
              <a href="mailto:sagar00001.co@gmail.com">xyz@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            Welcome to our tours and travel website! We are a team of passionate
            travel enthusiasts who believe that traveling is one of the most
            enriching experiences one can have in life. Our goal is to help you
            explore the world and create unforgettable memories through
            exceptional travel experiences.
          </p>
          <div className="footer-icons">
            <a href="#">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
