import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Wrapper } from "./Wrapper";

export const Footer = () => {


  return (
      <footer className="l-footer js-footer">
        <figure className="l-footer__logo js-footer__logo">
          <a href="#">
            <StaticImage src="../images/footer/footer-logo.png" alt="" />
          </a>
        </figure>
        <a href="/contact.html" className="l-footer__cv">
          <StaticImage src="../images/footer/footer-cv.png" alt="" />
        </a>
        <nav className="l-footer__nav">
          <ul className="l-footer__menu">
            <li className="l-footer__menu__item">
              <a href="#about">アバウト</a>
            </li>
            <li className="l-footer__menu__item">
              <a href="#works">実績</a>
            </li>
            <li className="l-footer__menu__item">
              <a href="#skills">スキル</a>
            </li>
            <li className="l-footer__menu__item">
              <a href="#services">サービス</a>
            </li>
            <li className="l-footer__menu__item">
              <a href="#career">経歴</a>
            </li>
          </ul>
        </nav>
        <p className="l-footer__copyright">©2021 WEBSON そんほんす</p>
      </footer>
  );
};
