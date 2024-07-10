import React from 'react';
import './footer.css';
import facebookIcon from '../../static/social/facebook.svg';
import linkedinIcon from '../../static/social/linkedin.svg';
import instagramIcon from '../../static/social/instagram.svg';
import twitterIcon from '../../static/social/twitter.svg';
import youtubeIcon from '../../static/social/youtube.svg';
import logo from '../../static/images/logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} />
        </div>
        <div className="footer-column">
          <h4>Contact info</h4>
          <p>Email: example@example.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 1234 Street Name, City, Country</p>
          <p>Working hours: 9am - 6pm</p>
        </div>
        <div className="footer-column">
          <h4>Categories</h4>
          <p>Sale</p>
          <p>Solar panels</p>
          <p>Inverters</p>
          <p>Home storage</p>
          <p>Accessories & Electrical</p>
        </div>
        <div className="footer-column">
          <h4>Info</h4>
          <p>About us</p>
          <p>Shipping</p>
          <p>Payments</p>
          <p>Terms & Conditions</p>
          <p>Data Protection</p>
          <p>Imprint</p>
        </div>
        <div className="footer-column">
          <h4>Topics</h4>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
        </div>
        <div className="footer-social">
          <h4>We are social</h4>
          <div className="social-icons">
            <img src={facebookIcon} alt="Facebook" />
            <img src={linkedinIcon} alt="LinkedIn" />
            <img src={instagramIcon} alt="Instagram" />
            <img src={twitterIcon} alt="Twitter" />
            <img src={youtubeIcon} alt="YouTube" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright 2024 AESOLAR</p>
        <div className="footer-lang">
          <span>DE</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
