import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../media/header_icons/aesolar_logo.svg';
import searchIcon from '../media/header_icons/search_icon.svg';
import favoritesIcon from '../media/header_icons/favorit.svg';
import sccount from '../../static/header_icons/sccount.svg';
import bag from '../../static/header_icons/bag.svg';
import AccountMenu from '../AccountMenu/AccountMenu';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="AESOLAR" />
        </div>
        <div className="search">
          <input type="text" placeholder="Search sth..." />
          <button><img src={searchIcon} alt="Search" /></button>
        </div>
        <div className="nav-icons">
          <Link to="/favorites"><img src={favoritesIcon} alt="Favorites" /></Link>
          {/* <AccountMenu /> */}
          <Link to="/cart"><img src={bag} alt="Cart" /></Link>
        </div>
      </div>
      <div className="nav">
        <Link to="/sale" className="nav-link">Sale</Link>
        <Link to="/solar-panels" className="nav-link">Solar panels</Link>
        <Link to="/inverters" className="nav-link">Inverters</Link>
        <Link to="/home-storage" className="nav-link">Home storage</Link>
        <Link to="/accessories-electrical" className="nav-link">Accessories & Electrical</Link>
        <Link to="/blog" className="nav-link">Blog</Link>
        <Link to="/news" className="nav-link">News</Link>
        <Link to="/shipping" className="nav-link">Shipping</Link>
        <Link to="/payments" className="nav-link">Payments</Link>
        <Link to="/help" className="nav-link">Help</Link>
      </div>
    </header>
  );
};

export default Header;
