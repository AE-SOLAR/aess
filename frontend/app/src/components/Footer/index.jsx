import React from "react";
import styles from "./index.module.css";
import logo from "../../static/social/aesolar_logo.svg";
import productLeft from "../../static/social/ProductLeft.png"; // Левое изображение
import productRight from "../../static/social/ProductRight.png"; // Правое изображение
import facebookIcon from "../../static/social/facebook.svg";
import linkedinIcon from "../../static/social/linkedin.svg";
import instagramIcon from "../../static/social/instagram.svg";
import twitterIcon from "../../static/social/twitter.svg";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { RedLine } from "../ui/red-line";

const Footer = () => {
  return (
    <div className="mt-8">
      <RedLine />
      <div className={`${styles.footerContainer}`}>
        {/* Фоновые изображения */}
        <img
          src={productLeft}
          alt="Product Left"
          className={styles.footerBackgroundLeft}
        />
        <img
          src={productRight}
          alt="Product Right"
          className={styles.footerBackgroundRight}
        />

        <div className={styles.footerContent}>
          {/* Левая секция с логотипом и информацией о компании */}
          <div className={styles.leftSection}>
            <img src={logo} alt="AESolar Logo" className={styles.logoImage} />
            <p className={styles.logoSlogan}>It's time to save the world!</p>
            <p className={styles.companyInfo}>
              German brand in the renewable energy industry, providing
              high-quality products and services since 2003.
            </p>
            <p className={styles.companyInfo}>
              AE Alternative Energy GMBH
              <br />
              Messerschmittring 54
              <br />
              86343 Königsbrunn
              <br />
              Germany
            </p>
            <p className={styles.companyInfo}>
              +49 8231 978268 0<br />
              info@ae-solar.com
              <br />
              sales@ae-solar.com
            </p>
            <div className={styles.socialLinks}>
              <a href="/" className={styles.socialLink}>
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="/" className={styles.socialLink}>
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a href="/" className={styles.socialLink}>
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a href="/" className={styles.socialLink}>
                <img src={twitterIcon} alt="Twitter" />
              </a>
            </div>
          </div>

          {/* Группы ссылок */}
          <div className={styles.linkGroups}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkGroupTitle}>Products</h4>
              <a href="/" className={styles.link}>
                Aurora
              </a>
              <a href="/" className={styles.link}>
                Meteor
              </a>
              <a href="/" className={styles.link}>
                Comet
              </a>
              <a href="/" className={styles.link}>
                Terra
              </a>
              <a href="/" className={styles.link}>
                Shadestar
              </a>
              <a href="/" className={styles.link}>
                Neptune
              </a>
            </div>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkGroupTitle}>About Us</h4>
              <a href="/" className={styles.link}>
                Company
              </a>
              <a href="/" className={styles.link}>
                Manufacturer
              </a>
              <a href="/" className={styles.link}>
                B2B Solutions
              </a>
              <a href="/" className={styles.link}>
                Contacts
              </a>
              <a href="/" className={styles.link}>
                News
              </a>
              <a href="/" className={styles.link}>
                FAQ
              </a>
            </div>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkGroupTitle}>Legal Info</h4>
              <a href="/" className={styles.link}>
                Imprint
              </a>
              <a href="/" className={styles.link}>
                Publisher's
              </a>
            </div>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkGroupTitle}>Documents</h4>
              <a href="/" className={styles.link}>
                Datasheet
              </a>
              <a href="/" className={styles.link}>
                Warranty
              </a>
            </div>
          </div>
        </div>

        <RedLine />
        {/* Нижний блок */}
        <div className={styles.footerBottom}>
          <div>© 2024 AESolar. All rights reserved.</div>
          <div className={styles.footerBottomLinks}>
            <a href="/" className={styles.link}>
              Privacy Policy
            </a>
            <a href="/" className={styles.link}>
              Terms of Use
            </a>
            <a href="/" className={styles.link}>
              Legal
            </a>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
