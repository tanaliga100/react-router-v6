import React from "react";
import "../index.css";
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__row">
          <div className="footer__column">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="footer__column">
            <h2>Links</h2>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h2>Contact Us</h2>
            <p>123 Main Street</p>
            <p>Anytown, USA 12345</p>
            <p>(123) 456-7890</p>
          </div>
        </div>
        <div className="footer__row">
          <div className="footer__column">
            <p>&copy; {currentYear} My Website. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
