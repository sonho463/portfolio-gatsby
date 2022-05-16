import * as React from "react";
import { useStaticQuery } from "gatsby";

import { Link, graphql } from "gatsby";

import { ImageRender } from "./imageRender";

// Swiper.js
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const RenderSwiper = () => {
  const data = useStaticQuery(
    graphql`
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
    `
  );

  // const studyList = [];

  // data.study.edges.map(({ node }) => studyList.push(<p>{node.works_title}</p>));

  // console.log(studyList);

	return(
		<p>bbbbbbbbbb</p>
	)

  // return <React.Fragment>{studyList}</React.Fragment>;
};

