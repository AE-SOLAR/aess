import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./index.module.css";
import logo from "../../static/header_icons/aesolar_logo.svg";
import { SearchInput } from "../Input";
import { Page } from "../../routes/pages";

import {
  FaCartShopping,
  FaCircleUser,
  FaHeart,
  FaHeartCircleBolt,
} from "react-icons/fa6";

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
        <div className={`${style["nav-icons"]}`}>
          <SearchInput />
          <Link to="/favorites">
            {<FaHeartCircleBolt size={"1.5rem"} /> || (
              <FaHeart size={"1.5rem"} />
            )}
          </Link>
          <Link to={isUserLoggedIn ? Page.signin.path : Page.signup.path}>
            <FaCircleUser size={"1.5rem"} />
          </Link>
          <Link to="/cart">
            <FaCartShopping size={"1.5rem"} />
          </Link>
        </div>
      </div>
      <div className={style["nav"]}>
        <Link to={Page.home.path} className={style["nav-link"]}>
          {Page.home.title}
        </Link>
        <Link to={Page.solarpanels.path} className={style["nav-link"]}>
          {Page.solarpanels.title}
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
    </header>
  );
};

export default Header;
