import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const SwiperWorks = () => {
  return (
    <Swiper
		className="p-works__card-outer"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide className="p-works__card-wrapper">
        <div className="p-works__card">
          <div className="p-works__card__inner">
            <div className="p-works__drop">
              <div className="p-works__drop__inner">
                <span className="p-works__tag">ウェブ制作</span>
                <h3 className="p-works__title">
                  八尾市教職員組合新規採用者用LP
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
              新規採用者に向けて組合を紹介するLPを作成。静的サイト。netlifyでホスティング。
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
      </SwiperSlide>
      <SwiperSlide className="p-works__card-wrapper">
        <div className="p-works__card">
          <div className="p-works__card__inner">
            <div className="p-works__drop">
              <div className="p-works__drop__inner">
                <span className="p-works__tag">ウェブ制作</span>
                <h3 className="p-works__title">
                  八尾市教職員組合新規採用者用LP
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
              新規採用者に向けて組合を紹介するLPを作成。静的サイト。netlifyでホスティング。
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
      </SwiperSlide>
      <SwiperSlide className="p-works__card-wrapper">
        <div className="p-works__card">
          <div className="p-works__card__inner">
            <div className="p-works__drop">
              <div className="p-works__drop__inner">
                <span className="p-works__tag">ウェブ制作</span>
                <h3 className="p-works__title">
                  八尾市教職員組合新規採用者用LP
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
              新規採用者に向けて組合を紹介するLPを作成。静的サイト。netlifyでホスティング。
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
      </SwiperSlide>
      <SwiperSlide className="p-works__card-wrapper">
        <div className="p-works__card">
          <div className="p-works__card__inner">
            <div className="p-works__drop">
              <div className="p-works__drop__inner">
                <span className="p-works__tag">ウェブ制作</span>
                <h3 className="p-works__title">
                  八尾市教職員組合新規採用者用LP
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
              新規採用者に向けて組合を紹介するLPを作成。静的サイト。netlifyでホスティング。
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
      </SwiperSlide>

    </Swiper>
  );
};
