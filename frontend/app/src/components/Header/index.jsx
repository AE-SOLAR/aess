import React from 'react';
import { Link } from 'react-router-dom';
import style from './index.module.css'; 
import logo from '../../static/header_icons/aesolar_logo.svg';
import searchIcon from '../../static/header_icons/search_icon.svg';
import favoritesIcon from '../../static/header_icons/favorit.svg';
import bag from '../../static/header_icons/bag.svg';

const Header = () => {
  return (
    <header className={style["header"]}>
      <div className={style["header-container"]}>
        <div className={style["logo"]}>
          <img src={logo} alt="AESOLAR" />
        </div>
        <div className={style["search"]}>
          <input type="text" placeholder="Search sth..." />
          <button><img src={searchIcon} alt="Search" /></button>
        </div>
        <div className={style["nav-icons"]}>
          <Link to="/favorites"><img src={favoritesIcon} alt="Favorites" /></Link>
          {/* <AccountMenu /> */}
          <Link to="/cart"><img src={bag} alt="Cart" /></Link>
        </div>
      </div>
      <div className={style["nav"]}>
        <Link to="/sale" className={style["nav-link"]}>Sale</Link>
        <Link to="/solar-panels" className={style["nav-link"]}>Solar panels</Link>
        <Link to="/inverters" className={style["nav-link"]}>Inverters</Link>
        <Link to="/home-storage" className={style["nav-link"]}>Home storage</Link>
        <Link to="/accessories-electrical" className={style["nav-link"]}>Accessories & Electrical</Link>
        <Link to="/blog" className={style["nav-link"]}>Blog</Link>
        <Link to="/news" className={style["nav-link"]}>News</Link>
        <Link to="/shipping" className={style["nav-link"]}>Shipping</Link>
        <Link to="/payments" className={style["nav-link"]}>Payments</Link>
        <Link to="/help" className={style["nav-link"]}>Help</Link>
      </div>
    </header>
  );
};

export default Header;
