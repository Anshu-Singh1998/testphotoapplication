import React from 'react';
import './ComponentsCss/FooterCss.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <ul className="footer-column">
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
        <ul className="footer-column">
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Twitch</a></li>
        </ul>
        <ul className="footer-column">
          <li><a href="#">YouTube</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
        <ul className="footer-column">
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Cookie preferences</a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <a href="#">Corporate Information</a>
        <div className="copyright">
          © Alkye Test
        </div>
      </div>
    </footer>
  );
}

export default Footer;
