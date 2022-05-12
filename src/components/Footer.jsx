import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link }  from "gatsby";

export const Footer = () => {

  return (
      <footer className="l-footer js-footer">
        <figure className="l-footer__logo js-footer__logo">
          <Link to="#">
            <StaticImage src="../images/footer/footer-logo.png" alt="" />
          </Link>
        </figure>
        <Link to="/contact.html" className="l-footer__cv">
          <StaticImage src="../images/footer/footer-cv.png" alt="" />
        </Link>
        <nav className="l-footer__nav">
          <ul className="l-footer__menu">
            <li className="l-footer__menu__item">
              <Link to="#about">アバウト</Link>
            </li>
            <li className="l-footer__menu__item">
              <Link to="#works">実績</Link>
            </li>
            <li className="l-footer__menu__item">
              <Link to="#skills">スキル</Link>
            </li>
            <li className="l-footer__menu__item">
              <Link to="#services">サービス</Link>
            </li>
            <li className="l-footer__menu__item">
              <Link to="#career">経歴</Link>
            </li>
          </ul>
        </nav>
        <p className="l-footer__copyright">©2021 WEBSON そんほんす</p>
      </footer>
  );
};
