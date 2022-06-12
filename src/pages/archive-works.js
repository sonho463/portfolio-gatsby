import * as React from "react";
import { Layout } from "../components/Layout";
import { graphql, Link } from "gatsby";

import { ImageRender } from "../components/imageRender";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const WorkPost = ({ data }) => {
  data.allTags.edges.forEach(({ node }) => {
    console.log(node.name);
    const currentTag = node.name;
    data.allWorks.edges.forEach(({ node }) => {
      if (node.works_tag.name === currentTag) {
        console.log(node.works_title);
      }
    });
  });

  return (
    <Layout>
      <div className="content">
        <div className="c-inner p-works__archive">
          <div className="c-section__title">
            <h2 className="c-section__title__text">実績・活動一覧</h2>
          </div>
          {data.allTags.edges.map(({ node }) => {
            const currentTag = node.name;
            return (
              <>
                <div className="p-works__archive-title">
                  <h2 className="p-works__archive-title__text">{node.name}</h2>
                </div>
                <Swiper
                  className="p-works__card-outer"
                  // install Swiper modules
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={30}
                  slidesPerView={1}
                  wrapperTag="ul"
                  navigation
                  pagination={{ clickable: true }}
                  // scrollbar={{ draggable: true }}
                  // onSwiper={(swiper) => console.log(swiper)}
                  // onSlideChange={() => console.log("slide change")}
                  breakpoints={{
                    // when window width is >= 640px
                    768: {
                      slidesPerView: 3,
                    },
                    // when window width is >= 768px
                    1024: {
                      slidesPerView: 5,
                    },
                  }}
                >
                  {data.allWorks.edges.map(({ node }) => {
                    if (node.works_tag.name === currentTag) {
                      return (
                        <SwiperSlide
                          key={node.id}
                          tag="li"
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
                                  <h3>{node.works_title}</h3>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    }
                  })}
                </Swiper>
              </>
            );
          })}
        </div>
      </div>

      {/* <Swiper
        className="p-work__card-outer"
        wrapperTag="ul"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={5}
        slidesPerView={1}
        // centeredSlides={true}
        navigation
        // pagination={{ clickable: false }}
        // scrollbar={{ draggable: true }}
        breakpoints={{
          // when window width is >= 640px
          768: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          1024: {
            slidesPerView: 1,
          },
        }}
      >
        {console.log("sliderender")}
        {data.study.edges.map(({ node }) => (
          <SwiperSlide tag="li" className="p-work__card">
            <p>{node.works_title}</p>

          </SwiperSlide>
        ))}
      </Swiper> */}
    </Layout>
  );
};

export const query = graphql`
  query {
    allTags: allMicrocmsWorksTag(sort: {fields: no}) {
      edges {
        node {
          name
          slug
          id
        }
      }
    }
    allWorks: allMicrocmsWorksMain {
      edges {
        node {
          id
          works_tag {
            name
            slug
          }
          works_title
					works_slug
          works_image {
            url
          }
        }
      }
    }
  }
`;

export default WorkPost;
