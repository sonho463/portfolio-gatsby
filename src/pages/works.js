import * as React from "react";
import { Layout } from "../components/Layout";
import { graphql } from "gatsby";

import { ImageRender } from "../components/imageRender";
import { RenderSwiper } from "../components/renderSwiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const WorkPost = ({ data }) => {
  const webDevSlides = [];
  data.webDev.edges.map(({ node }) =>
    webDevSlides.push(
      <SwiperSlide tag="li">
        <p>{node.works_title}</p>
      </SwiperSlide>
    )
  );

  return (
    <Layout>
<div className="p-works-archive__title">
			<h2 className="p-works-archive__title__text">ウェブ制作</h2>
</div>

      <Swiper
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
            {/* <ImageRender
              url={node.works_image.url}
              alt={`${node.works_title}の画像`}
              compress="auto=compress"
              format="auto=format"
            /> */}
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
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
        {webDevSlides}
      </Swiper>



    </Layout>
  );
};

export const query = graphql`
  query {
    study: allMicrocmsWorksMain(
      filter: { works_tag: { name: { eq: "勉強会" } } }
    ) {
      edges {
        node {
          id
          works_tag {
            name
          }
          works_title
          works_image {
            url
          }
        }
      }
    }
    webDev: allMicrocmsWorksMain(
      filter: { works_tag: { name: { eq: "ウェブ開発" } } }
    ) {
      edges {
        node {
          works_tag {
            name
          }
          works_title
        }
      }
    }
    webCreate: allMicrocmsWorksMain(
      filter: { works_tag: { name: { eq: "ウェブ制作" } } }
    ) {
      edges {
        node {
          works_title
        }
      }
    }
  }
`;

export default WorkPost;
