import * as React from "react";
import { Layout } from "../components/Layout";
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { ImageRender } from "../components/imageRender";
import { CircleButton } from "../components/CircleButton";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
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
                      <CircleButton
                        url={worksData.link_original}
                        alt="実績のサイトへ"
                        text="サイトへ"
                        name="arrow_up"
                      />
                    ) : null}
                    {worksData.git_hub_url ? (
                      <CircleButton
                        url={worksData.git_hub_url}
                        alt="GitHubリポジトリへ"
                        text="GitHub"
                        name="arrow_side"
                      />
                    ) : null}

                    <CircleButton
                      url="/#works"
                      alt="実績アーカイブページへ戻る"
                      text="もどる"
                      name="arrow_down"
                    />
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
                {worksEdges.map(({ node }) => {
                  console.log(node.works_tag);
                  console.log(worksData.works_tag);
                  console.log(node.works_tag.name === worksData.works_tag.name);
                  if (node.works_tag.name === worksData.works_tag.name) {
                    return (
                      <SwiperSlide
                        key={node.id}
                        className="p-work__card-wrapper"
                      >
                        <div>
                          <div>
                            <Link
                              to={`/works/${node.works_slug}#${node.works_slug}`}
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
                    );
                  } else {
                    return null;
                  }
                })}
              
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
      git_hub_url
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
