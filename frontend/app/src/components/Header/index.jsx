import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./index.module.css";
import logo from "../../static/header_icons/aesolar_logo.svg";
import favoritesIcon from "../../static/header_icons/favorit.svg";
import bag from "../../static/header_icons/bag.svg";
import account_menu from "../../static/header_icons/account_menu.svg";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { SearchInput } from "../Input";
import { Breadcrumb } from "../breadcrumb";
import Page from "../../routes/pages";

const Header = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem(process.env.REACT_APP_TOKEN_KEY_NAME);
    if (token) {
      setIsUserLoggedIn(true);
    }
  }, []);

  return (
    <header className={style["header"]}>
      <div className={style["header-container"]}>
        <div className={style["logo"]}>
          <img src={logo} alt="AESOLAR" />
        </div>
        <SearchInput />
        <div className={style["nav-icons"]}>
          <Link to="/favorites">
            <img src={favoritesIcon} alt="Favorites" />
          </Link>
          <Link to={isUserLoggedIn ? Page.signIn.path : Page.signOut.path}>
            <img src={account_menu} alt="AccountMenu" />
          </Link>
          <Link to="/cart">
            <img src={bag} alt="Cart" />
          </Link>
          <ThemeSwitcher />
        </div>
      </div>
      <div className={style["nav"]}>
        <Link to={Page.home.path} className={style["nav-link"]}>
          {Page.home.title}
        </Link>
        <Link to={Page.solarPanels.path} className={style["nav-link"]}>
          {Page.solarPanels.title}
        </Link>
        <Link to={Page.sale.path} className={style["nav-link"]}>
          {Page.sale.title}
        </Link>
        <Link to={Page.blog.path} className={style["nav-link"]}>
          {Page.blog.title}
        </Link>
        <Link to={Page.news.path} className={style["nav-link"]}>
          {Page.news.title}
        </Link>
        <Link to={Page.shipping.path} className={style["nav-link"]}>
          {Page.shipping.title}
        </Link>
        <Link to={Page.payments.path} className={style["nav-link"]}>
          {Page.payments.title}
        </Link>
        <Link to={Page.help.path} className={style["nav-link"]}>
          {Page.help.title}
        </Link>
      </div>
      <Breadcrumb />
    </header>
  );
};

export default Header;
