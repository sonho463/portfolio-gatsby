import * as React from "react";
import { useState } from "react";
import { Layout } from "../components/Layout";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";

const WorksList = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  console.log(`${thumbsSwiper}-----1`);
  const slides = [];
  for (let i = 0; i < 10; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img
          src={`https://picsum.photos/id/${i + 1020}/500/300`}
          alt={`slide ${i}`}
        />
      </SwiperSlide>
    );
  }

  const thumbs = [];
  for (let i = 0; i < 10; i += 1) {
    thumbs.push(
      <SwiperSlide key={`thumb-${i}`} tag="li">
        <img
          src={`https://picsum.photos/id/${i + 1020}/163/100`}
          alt={`slide ${i}`}
        />
      </SwiperSlide>
    );
  }
	console.log(`${thumbsSwiper}----2`);

  return (
    <Layout>
			{ 	console.log(`${thumbsSwiper}----3`) }
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
					{ 	console.log(`${thumbsSwiper}----4`) }
        {slides}
      </Swiper>
			{ 	console.log(`${thumbsSwiper}----5`) }
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
    </Layout>
  );
};

export default WorksList;
