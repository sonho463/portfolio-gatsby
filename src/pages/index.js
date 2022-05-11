import * as React from "react";
import { Helmet } from "react-helmet";

// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>WEBSON・そんほんす</title>

      </Helmet>

      <div className="overflow-hidden">
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
                <a
                  href="#skills"
                  className="p-g-nav__link p-g-nav__link--skills"
                >
                  スキル
                </a>
              </li>
              <li className="p-g-nav__item p-g-nav__item--icon">
                <a href="/" className="p-g-nav__link--icon">
                  <img src="./assets/images/header/ico_webson.png" alt="" />
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
                <a
                  href="#career"
                  className="p-g-nav__link p-g-nav__link--career"
                >
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
          {/* <div class="p-hamburger-btn js-hamburger-btn">
				<span class="p-hamburger-btn__line"></span>
				<span class="p-hamburger-btn__line"></span>
				<span class="p-hamburger-btn__line"></span>
			</div> */}
        </header>
        <nav className="l-cv-button js-cv-button">
          <a href="/contact.html" className="l-cv-button__link">
            <img
              className="l-cv-button__image"
              src="./assets/images/mv/cv-button.png"
              alt="お問い合わせ"
            />
          </a>
        </nav>
        <div className="l-main">
          <section className="p-mv">
            <div className="c-inner">
              {/* <p class="p-mv__circle-left">
					<img src="./assets/images/mv/yellow-circle.png" alt="">
				</p> */}
              <div className="p-mv__sub-heading">
                <p className="p-mv__sub-heading__text">大阪府八尾市</p>
                <p className="p-mv__sub-heading__text">
                  ウェブ制作・ウェブ開発 フリーランス
                </p>
              </div>
              <div className="p-mv__heading">
                <h1 className="p-mv__heading__text">
                  <span className="inline-block">WEBSON</span>
                  <span className="inline-block active-pc">・</span>
                  <span className="inline-block">そんほんす</span>
                  <span className="inline-block">（孫弘樹）</span>
                </h1>
              </div>
              {/* <p class="p-mv__circle-right">
					<img src="./assets/images/mv/yellow-circle.png" alt="">
				</p> */}
              <figure className="p-mv__face-photo">
                <img
                  src="./assets/images/mv/face.png"
                  alt=""
                  className="p-mv__face-photo__image"
                />
              </figure>
              <div className="p-mv__lead">
                <p className="p-mv__lead__text">
                  コードを書くことが大好きです。
                </p>
              </div>
            </div>
          </section>
          <section id="about" className="p-about c-section">
            {/*ここに黒板背景 */}
            <div className="c-inner">
              <div className="c-section__title">
                {/* beforeで円のあしらい afterでアンダーライン　h2?*/}
                <h2 className="c-section__title__text">アバウト〜私について</h2>
              </div>
              <section className="p-about__bg">
                <div className="p-about__text__block">
                  <div className="p-about__date-unit">
                    <p className="p-about__date">
                      <span id="js_month" className="p-about__month">
                        ○
                      </span>
                      月
                      <span id="js_day" className="p-about__day">
                        ○
                      </span>
                      日
                    </p>
                    <p className="p-about__charge">日直</p>
                    <p className="p-about__name">そんほんす</p>
                  </div>
                  <div className="p-about__text">
                    どうしても、コードを書く仕事をしたくて、
                    <br className="active-pc" />
                    ２０２０年３月から本気出して勉強をはじめました。
                    <br className="active-pc" />
                  </div>
                  <div className="p-about__text">
                    先輩フリーランスや
                    <br className="active-pc" />
                    所属コミュニティから案件をいただいて、
                    <br className="active-pc" />
                    ２件（２０２２年３月現在）
                    <br className="active-pc" />
                    納品できたところです。
                    <br className="active-pc" />
                  </div>
                  <div className="p-about__text">
                    コーディング・プログラミングを中心に
                    <br className="active-pc" />
                    さらに技術を磨いていきたいと考えています。
                  </div>
                </div>
              </section>
            </div>
          </section>
          <section id="works" className="p-works c-section">
            <div className="c-inner">
              <div className="c-section__title">
                <h2 className="c-section__title__text">
                  制作実績・これまでの活動
                </h2>
              </div>
              <div className="js-card-outer swiper">
                <ul className="p-works__card-list swiper-wrapper js-card-list">
                  <li className="p-works__card-wrapper swiper-slide js-card">
                    <div className="p-works__card">
                      <div href="#" className="p-works__card__inner">
                        <div className="p-works__drop">
                          <div className="p-works__drop__inner">
                            <span className="p-works__tag">ウェブ制作</span>
                            <h3 className="p-works__title">
                              八尾市教職員組合新規採用者用LP
                            </h3>
                            <figure className="p-works__image">
                              <img
                                src="./assets/images/works/works-ytu-rookies.png"
                                alt=""
                              />
                            </figure>
                          </div>
                        </div>
                        <p className="p-works__text">
                          新規採用者に向けて組合を紹介するLPを作成。静的サイト。netlifyでホスティング。
                        </p>
                        <a href="#" className="p-works__nav-to-detail">
                          <img
                            src="./assets/images/works/view-details.png"
                            className="p-works__nav-to-detail__image"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="p-works__card-wrapper swiper-slide js-card">
                    <div className="p-works__card">
                      <div href="#" className="p-works__card__inner">
                        <div className="p-works__drop">
                          <div className="p-works__drop__inner">
                            <span className="p-works__tag">ウェブ開発</span>
                            <h3 className="p-works__title">
                              Gatsby-microCMSブログ
                            </h3>
                            <figure className="p-works__image">
                              <img
                                src="./assets/images/works/works-gatsby-micro.png"
                                alt=""
                              />
                            </figure>
                          </div>
                        </div>
                        <p className="p-works__text">
                          BootstrapベースのHTMLテンプレートをGatsbyJSで構築、ヘッドレスCMSにmicroCMSを使用。勉強会でのレポート用に構築したもの。
                        </p>
                        <a href="#" className="p-works__nav-to-detail">
                          <img
                            src="./assets/images/works/view-details.png"
                            className="p-works__nav-to-detail__image"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="p-works__card-wrapper swiper-slide js-card">
                    <div className="p-works__card">
                      <div href="#" className="p-works__card__inner">
                        <div className="p-works__drop">
                          <div className="p-works__drop__inner">
                            <span className="p-works__tag">
                              ウェブ開発（Gatsby）
                            </span>
                            <h3 className="p-works__title">
                              パソコンの勉強リンク集
                            </h3>
                            <figure className="p-works__image">
                              <img
                                src="./assets/images/works/study-link.png"
                                alt=""
                              />
                            </figure>
                          </div>
                        </div>
                        <p className="p-works__text">
                          WordPressオリジナルテーマコーディング案件、ウェブ制作会社LPコーディング案件を納品。自分の所属団体のHPデザイン〜コーディングなど
                        </p>
                        <a href="#" className="p-works__nav-to-detail">
                          <img
                            src="./assets/images/works/view-details.png"
                            className="p-works__nav-to-detail__image"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="p-works__card-wrapper swiper-slide js-card">
                    <div className="p-works__card">
                      <div href="#" className="p-works__card__inner">
                        <div className="p-works__drop">
                          <div className="p-works__drop__inner">
                            <span className="p-works__tag">
                              ウェブ開発（Gatsby）
                            </span>
                            <h3 className="p-works__title">
                              ポートフォリオサイト
                            </h3>
                            <figure className="p-works__image">
                              <img
                                src="./assets/images/works/works_portfolio.png"
                                alt=""
                              />
                            </figure>
                          </div>
                        </div>
                        <p className="p-works__text">
                          WordPressオリジナルテーマコーディング案件、ウェブ制作会社LPコーディング案件を納品。自分の所属団体のHPデザイン〜コーディングなど
                        </p>
                        <a href="#" className="p-works__nav-to-detail">
                          <img
                            src="./assets/images/works/view-details.png"
                            className="p-works__nav-to-detail__image"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="swiper-pagination" />
                {/* If we need navigation buttons */}
                <div className="swiper-button-prev">
                  <i className="fa-solid fa-play" />
                </div>
                <div className="swiper-button-next">
                  <i className="fa-solid fa-play" />
                </div>
                {/* If we need scrollbar */}
                {/* <div class="swiper-scrollbar"></div> */}
              </div>
            </div>
          </section>
          <section id="skills" className="p-skills c-section">
            <div className="c-inner">
              <div className="c-section__title">
                <h2 className="c-section__title__text">スキル</h2>
              </div>
              <ul className="p-skills__article-list">
                <li className="p-skills__article__item">
                  <figure className="p-skills__article__icon p-skills__article__icon--html">
                    <img
                      className="p-skills__article__icon__image"
                      src="./assets/images/skills/ico_html.png"
                      alt=""
                    />
                  </figure>
                  <div className="p-skills__article__text-block">
                    <h3 className="p-skills__article__title c-title">
                      HTML/CSS/JavaScript
                    </h3>
                    <p className="p-skills__article__text c-desc">
                      ウェブ周りの基本、HTML、CSS、JavaScriptは常にアップデートしてまいります。セマンティックなHTML、SEOを意識した構造、BEM,FLOCSS,PRECSSなどのCSS設計思想、JavaScript、JQueryも対応できます。
                    </p>
                  </div>
                </li>
                <li className="p-skills__article__item">
                  <figure className="p-skills__article__icon">
                    <img
                      className="p-skills__article__icon__image"
                      src="./assets/images/skills/ico_wp.png"
                      alt=""
                    />
                  </figure>
                  <div className="p-skills__article__text-block">
                    <h3 className="p-skills__article__title c-title">
                      Wordpress
                    </h3>
                    <p className="p-skills__article__text c-desc">
                      WordPress既存テーマでのサイト構築。静的サイトのWordPress化も可能です。PHPのロジックを使ってできるだけ効率的にコードを書きます。
                    </p>
                  </div>
                </li>
                <li className="p-skills__article__item">
                  <figure className="p-skills__article__icon">
                    <img
                      className="p-skills__article__icon__image"
                      src="./assets/images/skills/ico_nodejs.png"
                      alt="nodejsアイコン"
                    />
                  </figure>
                  <div className="p-skills__article__text-block">
                    <h3 className="p-skills__article__title c-title">
                      タスクランナー Node.js
                    </h3>
                    <p className="p-skills__article__text c-desc">
                      タスクランナーにnode
                      Scriptを使っています。scssのコンパイル、prefixの付与など。静的サイトのコーディングをできるだけ効率化します。
                    </p>
                  </div>
                </li>
                <li className="p-skills__article__item">
                  <figure className="p-skills__article__icon">
                    <img
                      className="p-skills__article__icon__image"
                      src="./assets/images/skills/ico_gatsbyjs.png"
                      alt=""
                    />
                  </figure>
                  <div className="p-skills__article__text-block">
                    <h3 className="p-skills__article__title c-title">
                      Gatsby.js
                    </h3>
                    <p className="p-skills__article__text c-desc">
                      静的サイトジェネレータGatsbyのテーマを使って、サイトを構築できます。また、ブログのHTML，CSSデータをGtasbyで構築しました。
                    </p>
                  </div>
                </li>
                <li className="p-skills__article__item">
                  <figure className="p-skills__article__icon">
                    <img
                      className="p-skills__article__icon__image"
                      src="./assets/images/skills/ico_XD.png"
                      alt="xdのアイコン"
                    />
                  </figure>
                  <div className="p-skills__article__text-block">
                    <h3 className="p-skills__article__title c-title">
                      AdobeXD
                    </h3>
                    <p className="p-skills__article__text c-desc">
                      デザインは主にAdobeXDを使用しています。コンポーネント、レイヤーを意識して、見やすく、コーディングもしやすいデザインを作成します。
                    </p>
                  </div>
                </li>
                <li className="p-skills__article__item">
                  <figure className="p-skills__article__icon">
                    <img
                      className="p-skills__article__icon__image"
                      src="./assets/images/skills/ico_wbm.png"
                      alt="ホワイトボードミーティングのアイコン"
                    />
                  </figure>
                  <div className="p-skills__article__text-block">
                    <h3 className="p-skills__article__title c-title">
                      ホワイトボード・ミーティング®
                    </h3>
                    <p className="p-skills__article__text c-desc">
                      ホワイトボードミーティング®というファシリテーションスキルの認定講師資格を持っています。ヒヤリングや会議の運営で力を発揮します。
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section className="p-services c-section">
            <div className="c-inner">
              <div className="c-section__title">
                <h2 className="c-section__title__text">サービス</h2>
              </div>
              <ul className="p-services__list">
                <li className="p-services__item">
                  <figure className="p-services__image-wrapepr">
                    <img
                      src="./assets/images/services/services-website.jpg"
                      alt=""
                      className="p-services__image"
                    />
                  </figure>
                  <h3 className="p-services__title c-title">
                    ウェブサイト制作
                  </h3>
                  <p className="p-services__desc c-desc">
                    長年の教員経験で培った傾聴のスキルでお客様の要望を聞き取り、最適なデザイン、サイトを提案します。
                  </p>
                </li>
                <li className="p-services__item">
                  <figure className="p-services__image-wrapepr">
                    <img
                      src="./assets/images/services/services-coding.jpg"
                      alt=""
                      className="p-services__image"
                    />
                  </figure>
                  <h3 className="p-services__title c-title">
                    コーディング代行
                  </h3>
                  <p className="p-services__desc c-desc">
                    サイトの構築から更新、細かい修正などにもフットワーク軽く対応します。
                  </p>
                </li>
                <li className="p-services__item">
                  <figure className="p-services__image-wrapepr">
                    <img
                      src="./assets/images/services/services-etc.jpg"
                      alt=""
                      className="p-services__image"
                    />
                  </figure>
                  <h3 className="p-services__title c-title">その他もろもろ</h3>
                  <p className="p-services__desc c-desc">
                    その他、ウェブ周りのことにも対応します。お客様のビジネスの状況に応じて、MEO施策やSNS施策のコンサル、代行も対応いたします。
                  </p>
                </li>
              </ul>
            </div>
          </section>
          <section id="career" className="p-career c-section">
            <div className="c-inner">
              <div className="c-section__title">
                <h2 className="c-section__title__text">経歴</h2>
              </div>
              <section className="c-section__lead">
                <p className="c-section__lead__text">
                  私のこれまでの経歴です。
                  仕事のこととPCに関わることを中心に記載しています。
                </p>
              </section>
              <section className="p-career__grid-table">
                <div className="p-career__date">
                  <p className="p-career__date__text c-title">1972年7月18日</p>
                </div>
                <div className="p-career__desc">
                  <p className="p-career__desc__text c-desc">
                    兵庫県川西市で生まれる。
                    まるまると太っていましたが、一度鼻血が止まらず、病院へ。とても華奢な子どもになる。
                  </p>
                </div>
                <div className="p-career__date">
                  <p className="p-career__date__text c-title">
                    小学生〜中学生時代{" "}
                  </p>
                </div>
                <div className="p-career__desc">
                  <p className="p-career__desc__text c-desc">
                    大流行のファミコンを親にねだるも、「ゲームだけだからだめ。パソコンならOK」とMSXを買ってもらう。
                    MSXのゲームには飽きて、本を買ってきてはBasicの写経に勤しむ。
                  </p>
                </div>
                <div className="p-career__date">
                  <p className="p-career__date__text c-title">
                    大学時代〜2000年
                  </p>
                </div>
                <div className="p-career__desc">
                  <p className="p-career__desc__text c-desc">
                    大阪の「トッカビ子ども会」でボランティア。卒業後、アルバイトスタッフになる。在日コリアンの子どもの放課後児童クラブのようなもの。
                    <br />
                    大阪府八尾市の小学校で常勤講師。学校での仕事に加え、コリアンのことを中心に文化の指導のためいくつかの学校に指導に出向くことも。
                  </p>
                </div>
                <div className="p-career__date">
                  <p className="p-career__date__text c-title">2001年〜2012年</p>
                </div>
                <div className="p-career__desc">
                  <p className="p-career__desc__text c-desc">
                    大阪府教員採用テストに合格。公立小学校に赴任する。
                    2つの小学校を経験。
                    校内の分担では常に情報教育、情報機器の担当。人権教育主任、体育主任、研究主任などのマネジメント職も経験。
                    学校のホームページを作成、多くの人が更新しやすいように工夫して作成するも、市内のシステム入れ替えによって公開は数ヶ月で終わる。
                    並行して、教職員組合の役員も経験、会計、機関紙編集なども担当。
                  </p>
                </div>
                <div className="p-career__date">
                  <p className="p-career__date__text c-title">2013年〜2015年</p>
                </div>
                <div className="p-career__desc">
                  <p className="p-career__desc__text c-desc">
                    教職員組合の書記長（事務局長）となり、専従職員として組合の業務にあたる。組合のマネジメントにおいて、チャットツール、クラウドを導入。ブログ・FBページなどを活用して情報発信。
                    このときに、ホワイトボード・ミーティング®の認定講師資格や衛生推進員資格を取得。
                  </p>
                </div>
                <div className="p-career__date">
                  <p className="p-career__date__text c-title">
                    2016年〜2020年{" "}
                  </p>
                </div>
                <div className="p-career__desc">
                  <p className="p-career__desc__text c-desc">
                    教育現場に復帰。日本語指導担当になる。組合の書記長はそのまま継続。
                    コロナ禍の学校において、チャットツールを導入。名簿管理やテストの集計において、VBAを調べつつ活用。テスト集計の工数を大幅に減らし感謝される。生活指導担当も経験。
                    この頃に、プログラミング学習にとりくみはじめるも、一旦挫折。
                  </p>
                </div>
                <div className="p-career__date">
                  <p className="p-career__date__text c-title">2019年〜 </p>
                </div>
                <div className="p-career__desc">
                  <p className="p-career__desc__text c-desc">
                    コロナ禍の中、プログラミング学習再開。Progateウェブ開発パス（Rails）を完走。Railsチュートリアル完走。Isaraの模写中にOver40WebClubに加入。学習が加速。
                    勉強会ドリブン勉強法を実践、connpassで4回の学習会の講師。
                  </p>
                </div>
                <div className="p-career__date">
                  <p className="p-career__date__text c-title">2021年〜 </p>
                </div>
                <div className="p-career__desc">
                  <p className="p-career__desc__text c-desc">
                    転勤して、新しい学校で日本語指導。
                    Over40WebClubの先輩フリーランスからコーディング〜WordPress化案件をいただいて、納品。エクプラというコミュニティでウェブ制作会社のLPコーディング案件をいただいて納品。
                    現在は、自分が所属する団体のHP構築、SNS運用中。
                  </p>
                </div>
              </section>
            </div>
          </section>
        </div>
        <footer className="l-footer js-footer">
          <figure className="l-footer__logo">
            <a href="#">
              <img src="./assets/images/footer/footer-logo.png" alt="" />
            </a>
          </figure>
          <a href="/contact.html" className="l-footer__cv">
            <img src="./assets/images/footer/footer-cv.png" alt="" />
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
                <a href="#career">経歴</a>
              </li>
            </ul>
          </nav>
          <p className="l-footer__copyright">©2021 WEBSON そんほんす</p>
        </footer>
        {/* jquery */}
        {/* メインのJavaScript */}
      </div>
    </>
  );
};

export default IndexPage;
