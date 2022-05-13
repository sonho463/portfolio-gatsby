import * as React from "react";
import { useState } from "react";
import { Layout } from "../components/Layout";
import { graphql } from "gatsby";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";

import { SwiperWorks } from "../components/SwiperWorks";

export default ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const slides = [];
  const worksEdges = data.allMicrocmsWorksMain.edges;
  let i = 0;
  worksEdges.map(({ node }) => {
    i += 1;
    slides.push(
      <SwiperSlide key={node.id} tag="li">
        <img src={node.works_image.url} alt={`slide ${i}`} />
        <p>{node.works_title}</p>
      </SwiperSlide>
    );
  });

  const thumbs = [];
  let j = 0;
  worksEdges.map(({ node }) => {
    j += 1;
    thumbs.push(
      <SwiperSlide key={node.id} tag="li">
        <img src={node.works_image.url} alt={`slide ${j}`} />
      </SwiperSlide>
    );
  });
  return (
    <Layout>
      <Swiper
        id="main"
        tag="section"
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Pagination, Scrollbar, Thumbs, A11y]}
        wrapperTag="ul"
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
      >
        {slides}
      </Swiper>
      <Swiper
        id="thumbs"
        tag="section"
        wrapperTag="ul"
        onSwiper={setThumbsSwiper}
        modules={[Navigation, Thumbs]}
        slidesPerView={3}
        watchSlidesProgress={true}
        navigation
      >
        {thumbs}
      </Swiper>

      <SwiperWorks />
    </Layout>
  );
};

export const query = graphql`
  query {
    allMicrocmsWorksMain(sort: { order: ASC, fields: createdAt }) {
      edges {
        node {
          works_title
          id
          works_image {
            url
          }
        }
      }
    }
  }
`;
