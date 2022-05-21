import * as React from "react";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export const Header = () => {
  return (
    <>
      <Helmet>
        <title>WEBSON・そんほんす</title>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-B88FLKC288"
        ></script>
        <script>
          {`
	window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-B88FLKC288');
	`}
        </script>
      </Helmet>

      <header className="l-header">
        <nav className="p-g-nav js-g-nav">
          <ul className="p-g-nav__inner">
            <li className="p-g-nav__item">
              <Link to="/#about" className="p-g-nav__link p-g-nav__link--about">
                アバウト
              </Link>
            </li>
            <li className="p-g-nav__item">
              <Link to="/#works" className="p-g-nav__link p-g-nav__link--works">
                実績
              </Link>
            </li>
            <li className="p-g-nav__item">
              <Link
                to="/#skills"
                className="p-g-nav__link p-g-nav__link--skills"
              >
                スキル
              </Link>
            </li>
            <li className="p-g-nav__item p-g-nav__item--icon">
              <Link to="/" className="p-g-nav__link--icon">
                <StaticImage
                  src="../images/header/ico_webson.png"
                  alt="ウェブソンのアイコン"
                />
              </Link>
            </li>
            <li className="p-g-nav__item">
              <Link
                to="/#services"
                className="p-g-nav__link p-g-nav__link--services"
              >
                サービス
              </Link>
            </li>
            <li className="p-g-nav__item">
              <Link
                to="/#career"
                className="p-g-nav__link p-g-nav__link--career"
              >
                経歴
              </Link>
            </li>
            <li className="p-g-nav__item">
              <Link
                to="/contact"
                className="p-g-nav__link p-g-nav__link--contact"
              >
                お問い合わせ
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
