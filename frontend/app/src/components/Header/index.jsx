import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./index.module.css";
import logo from "../../static/header_icons/aesolar_logo.svg";
import { SearchInput } from "../Input";
import { Page } from "../../routes/pages";
import Breadcrumbs from "../Breadcrumbs";
import {
  FaCartShopping,
  FaCircleUser,
  FaHeart,
  FaHeartCircleBolt,
} from "react-icons/fa6";
import MenuItem from "../MenuItem";
import { MenuBurger } from "../MenuBurger";

const Header = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem(process.env.REACT_APP_TOKEN_KEY_NAME);
    if (token) {
      setIsUserLoggedIn(true);
    }
  }, []);

  return (
    <header className="flex flex-col w-full pt-5 dark:bg-black">
      <div className="flex justify-between items-center z-40">
        <div className="flex gap-4">
          <div className="w-[200px] h-[27px] pl-4">
            <img src={logo} alt="AE SOLAR" />
          </div>
          <MenuBurger>
            <Link to={Page.home.path}>Home</Link>
            <Link to={Page.products.path}>Products</Link>
            <Link to={Page.news.path}>News</Link>
            <Link to={Page.shipping.path}>Shipping</Link>
            <Link to={Page.payments.path}>Payments</Link>
            <Link to={Page.help.path}>Help</Link>
          </MenuBurger>
        </div>
        <nav className="justify-between w-100 md:flex hidden z-40">
          <MenuItem title={Page.home.title} to={Page.home.path} />
          <MenuItem
            title={Page.products.title}
            to={Page.products.path}
            sub={[
              { title: Page.solarpanels.title, to: Page.solarpanels.path },
              { title: Page.sale.title, to: Page.sale.path },
            ]}
          />
          <MenuItem
            title="Info"
            sub={[
              { title: Page.shipping.title, to: Page.shipping.path },
              { title: Page.payments.title, to: Page.payments.path },
              { title: Page.help.title, to: Page.help.path },
            ]}
          />
          <MenuItem title={Page.news.title} to={Page.news.path} />
        </nav>
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
      <Breadcrumbs />
    </header>
  );
};

export default Header;
