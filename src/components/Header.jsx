import * as React from "react";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";


export const Header = () => {
  return (
    <>
      <Helmet>
        <title>WEBSON・そんほんす</title>
      </Helmet>

      <header className="l-header">
        <nav className="p-g-nav js-g-nav">
          <ul className="p-g-nav__inner">
            <li className="p-g-nav__item">
              <a href="#about" className="p-g-nav__link p-g-nav__link--about">
                アバウト
              </a>
            </li>
            <li className="p-g-nav__item">
              <a href="#works" className="p-g-nav__link p-g-nav__link--works">
                実績
              </a>
            </li>
            <li className="p-g-nav__item">
              <a href="#skills" className="p-g-nav__link p-g-nav__link--skills">
                スキル
              </a>
            </li>
            <li className="p-g-nav__item p-g-nav__item--icon">
              <a href="/" className="p-g-nav__link--icon">
                <StaticImage
                  src="../images/header/ico_webson.png"
                  alt="ウェブソンのアイコン"
                />
              </a>
            </li>
            <li className="p-g-nav__item">
              <a
                href="#services"
                className="p-g-nav__link p-g-nav__link--services"
              >
                サービス
              </a>
            </li>
            <li className="p-g-nav__item">
              <a href="#career" className="p-g-nav__link p-g-nav__link--career">
                経歴
              </a>
            </li>
            <li className="p-g-nav__item">
              <a
                href="javascript:void(0)"
                className="p-g-nav__link p-g-nav__link--contact"
              ></a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
