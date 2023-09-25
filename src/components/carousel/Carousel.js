import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image1 from "../../Images/image-product-1.jpg";
import Image2 from "../../Images/image-product-2.jpg";
import Image3 from "../../Images/image-product-3.jpg";
import Image4 from "../../Images/image-product-4.jpg";
import thumb1 from "../../Images/image-product-1-thumbnail.jpg";
import thumb2 from "../../Images/image-product-2-thumbnail.jpg";
import thumb3 from "../../Images/image-product-3-thumbnail.jpg";
import thumb4 from "../../Images/image-product-4-thumbnail.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./style.css";
// import required modules
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";

const Carousel = () => {
  //   const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        // thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={Image1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image4} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        // onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        pagination={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={thumb1} style={{ width: "60px", height: "60px" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={thumb2} style={{ width: "60px", height: "60px" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={thumb3} style={{ width: "60px", height: "60px" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={thumb4} style={{ width: "60px", height: "60px" }} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
