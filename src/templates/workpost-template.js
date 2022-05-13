import * as React from "react";
import { Layout } from "../components/Layout";
import { Link, graphql } from "gatsby";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const WorkPost = ({ data }) => {
  const worksData = data.microcmsWorksMain;
  const worksEdges = data.allMicrocmsWorksMain.edges;
  return (
    <Layout>
      <div class="l-main">
        <section class="p-work c-section">
          <div class="c-inner">
            <div className="c-section__title">
              <h2 className="c-section__title__text">
                制作実績・これまでの活動
              </h2>
            </div>
            <div id={worksData.works_slug} className="p-work__container">
              <div
                class="p-work__title-outer p-about__bg"
              >
                <div class="p-work__title-block">
                  <div class="p-work__title">
                    <h2 class="p-work__title__text">{worksData.works_title}</h2>
                  </div>
                  <div class="p-work__scope">
                    <span class="p-work__scope__heading">担当工程</span>
                    <h3 class="p-work__scope__text">デザイン・コーディング</h3>
                  </div>
                  <div class="p-work__desc">
                    <p class="p-work__desc__text">
                      自分の所属する八尾市教職員組合で使用。新規採用者に伝えたい内容をまとめました。
                      団体のGoogleアカウントがあったので、コンタクトフォームはGoogleフォームを埋め込んで使用。
                      誘導のための動線は主にフライヤーに貼ったQRコードを想定しました。
                    </p>
                  </div>
                </div>
                <div className="p-work__image-block">
                  <figure class="p-work__image-wrapper">
                    <img src={worksData.works_image.url} alt="" />
                  </figure>
                  <a
                    href={`${worksData.link_original}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="u-text-white">サイトへのリンクはこちら</p>
                  </a>
                </div>
              </div>
            </div>
            <div class="p-work__picture"></div>

            <div>
              <Swiper
                className="p-work__card-outer"
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={30}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                breakpoints={{
                  // when window width is >= 640px
                  768: {
                    slidesPerView: 5,
                  },
                  // when window width is >= 768px
                  1024: {
                    slidesPerView: 7,
                  },
                }}
              >
                {worksEdges.map(({ node }) => (
                  <SwiperSlide key={node.id} className="p-work__card-wrapper">
                    <div>
                      <div>
                        <Link
                          to={`/work/post/${node.works_slug}#${node.works_slug}`}
                        >
                          <div>
                            <figure>
                              <img src={node.works_image.url} alt="" />
                            </figure>
                            <span>{node.works_tag.name}</span>
                            <h3>{node.works_title}</h3>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String!) {
    microcmsWorksMain(id: { eq: $id }) {
      works_title
      works_slug
      link_original
      works_image {
        url
      }
      works_tag {
        name
      }
    }
    allMicrocmsWorksMain {
      edges {
        node {
          id
          works_title
          works_slug
          works_tag {
            name
          }
          works_desc
          works_image {
            url
          }
        }
      }
    }
  }
`;

export default WorkPost;
