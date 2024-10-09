import React from 'react';
import style from "./index.module.css";

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      {/* Header */}
      <header className="header">
        <div className="logo">AESOLAR</div>
        <nav className="nav">
          <a href="#">Products</a>
          <a href="#">Info</a>
          <a href="#">Blog</a>
          <a href="#">Cart</a>
          <a href="#">DE</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <section className="hero-section">
          <h1>Terms & Conditions</h1>
          <h2>Information</h2>
        </section>

        <section className="terms-section">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <h3>Terms 2</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-info">
          <h3>AESOLAR</h3>
          <p>German brand in the alternative energy market</p>
          <address>
            AES Alternative Energy GMBH<br />
            Musterstrasse 123, 12345 Berlin, Germany<br />
            Tel: +49 123 456 789<br />
            Email: info@aesolar.com
          </address>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Products</h4>
            <ul>
              <li>Aurora</li>
              <li>Meteor</li>
              <li>Comet</li>
              <li>Terra</li>
              <li>Shadestan</li>
              <li>Neptune</li>
              <li>Horizon</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Info</h4>
            <ul>
              <li>About us</li>
              <li>Shipping</li>
              <li>Payments</li>
              <li>Help</li>
              <li>Blog</li>
              <li>News</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TermsAndConditions;
