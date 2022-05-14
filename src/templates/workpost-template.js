import * as React from "react";
import { Layout } from "../components/Layout";
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { ImageRender } from "../components/imageRender";

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

  console.log(worksData.scope_responsibility);

  const scopeResponsibility = [];

  worksData.scope_responsibility.map((e) => {
    scopeResponsibility.push(<span className="scope-item">{e}</span>);
    return scopeResponsibility;
  });

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
              <div class="p-work__title-outer p-about__bg">
                <div class="p-work__title-block">
                  <div class="p-work__title">
                    <span className="p-work__tag">
                      {worksData.works_tag.name}
                    </span>
                    <h2 class="p-work__title__text">{worksData.works_title}</h2>
                  </div>
                  <div class="p-work__scope">
                    <span class="p-work__scope__heading">担当工程</span>
                    <h3 class="p-work__scope__text">{scopeResponsibility}</h3>
                  </div>
                  <div class="p-work__desc">
                    <p class="p-work__desc__text">{worksData.works_desc}</p>
                  </div>
                </div>
                <div className="p-work__image-block">
                  <figure class="p-work__image-wrapper">
                    <ImageRender
                      url={worksData.works_image.url}
                      alt={`${worksData.works_title}の画像`}
                      compress="auto=compress"
                      format="auto=format"
                    />{" "}
                  </figure>
                  <div className="p-work__link-block">
                    {worksData.link_original ? (
                      <a
                        href={`${worksData.link_original}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="c-button__work-template"
                      >
                        <StaticImage src="../images/works/to-site.png" alt="" />
                      </a>
                    ) : null}
                    <Link
                      to="/#works"
                      className="c-button__work-template p-work__back-button"
                    >
                      <StaticImage src="../images/works/back.png" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Swiper
                className="p-work__card-outer"
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={5}
                slidesPerView={3}
                // centeredSlides={true}
                navigation
                // pagination={{ clickable: false }}
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
                    slidesPerView: 6.7,
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
                              <ImageRender
                                url={node.works_image.url}
                                alt={`${node.works_title}の画像`}
                                compress="auto=compress"
                                format="auto=format"
                              />
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
      works_desc
      scope_responsibility
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
