import * as React from "react";
import { Layout } from "../components/Layout";
import { graphql } from "gatsby";

import { ImageRender } from "../components/imageRender";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const WorkPost = ({ data }) => {

	data.allTags.edges.forEach(({node})=>{
		console.log(node.name);
		const currentTag = node.name
		data.allWorks.edges.forEach(({node})=>{
			if(node.works_tag.name === currentTag){
				console.log(node.works_title);
			}
		})
	})

  return (
    <Layout>
      <div className="content">
        <div className="p-works-archive__title">
          <h2 className="p-works-archive__title__text">ウェブ制作</h2>
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
    allTags: allMicrocmsWorksTag {
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
          works_image {
            url
          }
        }
      }
    }
  }
`;

export default WorkPost;
