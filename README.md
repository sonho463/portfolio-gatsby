<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby minimal starter
</h1>

## π Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # create a new Gatsby site using the minimal starter
    npm init gatsby
    ```

2.  **Start developing.**

    Navigate into your new siteβs directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## π Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-minimal)

// γεγεγγγγΏγ³γδΈγ«ζ₯γγζΆγγε¦η
  useEffect(()=>{
		window.onload = () => {
			console.log("start observe");
			startObserve();
		};
	})
	const startObserve = () => {
		const callback = (entries, observer) => {
			entries.forEach((entry) => {
				if (entry.intersectionRatio === 1) {
					cvButton.classList.add("is-hidden");
					console.log("active");
				} else if (!entry.isIntersecting) {
					cvButton.classList.remove("is-hidden");
					console.log("hidden");
				}
			});
		};

		const options = {
			threshold: [0.2, 1.0],
		};

		const observer = new IntersectionObserver(callback, options);
		const target = document.querySelector(".js-footer__logo");
		const cvButton = document.querySelector(".js-cv-button");

		observer.observe(target);
	};



 <div className="js-card-outer swiper">
                <ul className="p-works__card-list swiper-wrapper js-card-list">
                  <li className="p-works__card-wrapper swiper-slide js-card">
                    <div className="p-works__card">
                      <div className="p-works__card__inner">
                        <div className="p-works__drop">
                          <div className="p-works__drop__inner">
                            <span className="p-works__tag">γ¦γ§γεΆδ½</span>
                            <h3 className="p-works__title">
                              ε«ε°ΎεΈζθ·ε‘η΅εζ°θ¦ζ‘η¨θη¨LP
                            </h3>
                            <figure className="p-works__image">
                              <StaticImage
                                src="../images/works/works-ytu-rookies.png"
                                alt=""
                              />
                            </figure>
                          </div>
                        </div>
                        <p className="p-works__text">
                          ζ°θ¦ζ‘η¨θγ«εγγ¦η΅εγη΄Ήδ»γγLPγδ½ζγιηγ΅γ€γγnetlifyγ§γγΉγγ£γ³γ°γ
                        </p>
                        <a href="#" className="p-works__nav-to-detail">
                          <StaticImage
                            src="../images/works/view-details.png"
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
                            <span className="p-works__tag">γ¦γ§γιηΊ</span>
                            <h3 className="p-works__title">
                              Gatsby-microCMSγγ­γ°
                            </h3>
                            <figure className="p-works__image">
                              <StaticImage
                                src="../images/works/works-gatsby-micro.png"
                                alt=""
                              />
                            </figure>
                          </div>
                        </div>
                        <p className="p-works__text">
                          BootstrapγγΌγΉγ?HTMLγγ³γγ¬γΌγγGatsbyJSγ§ζ§η―γγγγγ¬γΉCMSγ«microCMSγδ½Ώη¨γεεΌ·δΌγ§γ?γ¬γγΌγη¨γ«ζ§η―γγγγ?γ
                        </p>
                        <a href="#" className="p-works__nav-to-detail">
                          <StaticImage
                            src="../images/works/view-details.png"
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
                              γ¦γ§γιηΊοΌGatsbyοΌ
                            </span>
                            <h3 className="p-works__title">
                              γγ½γ³γ³γ?εεΌ·γͺγ³γ―ι
                            </h3>
                            <figure className="p-works__image">
                              <StaticImage
                                src="../images/works/study-link.png"
                                alt=""
                              />
                            </figure>
                          </div>
                        </div>
                        <p className="p-works__text">
                          WordPressγͺγͺγΈγγ«γγΌγγ³γΌγγ£γ³γ°ζ‘δ»Άγγ¦γ§γεΆδ½δΌη€ΎLPγ³γΌγγ£γ³γ°ζ‘δ»Άγη΄εγθͺεγ?ζε±ε£δ½γ?HPγγΆγ€γ³γγ³γΌγγ£γ³γ°γͺγ©
                        </p>
                        <a href="#" className="p-works__nav-to-detail">
                          <StaticImage
                            src="../images/works/view-details.png"
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
                              γ¦γ§γιηΊοΌGatsbyοΌ
                            </span>
                            <h3 className="p-works__title">
                              γγΌγγγ©γͺγͺγ΅γ€γ
                            </h3>
                            <figure className="p-works__image">
                              <StaticImage
                                src="../images/works/works_portfolio.png"
                                alt=""
                              />
                            </figure>
                          </div>
                        </div>
                        <p className="p-works__text">
                          WordPressγͺγͺγΈγγ«γγΌγγ³γΌγγ£γ³γ°ζ‘δ»Άγγ¦γ§γεΆδ½δΌη€ΎLPγ³γΌγγ£γ³γ°ζ‘δ»Άγη΄εγθͺεγ?ζε±ε£δ½γ?HPγγΆγ€γ³γγ³γΌγγ£γ³γ°γͺγ©
                        </p>
                        <a href="#" className="p-works__nav-to-detail">
                          <StaticImage
                            src="../images/works/view-details.png"
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
