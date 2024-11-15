import React from "react";
import Slider from "react-slick";
import side_1 from "/Image/side-1.jpg";
import side_2 from "/Image/side-2.jpg";
import side_3 from "/Image/side-3.jpg";
import side_4 from "/Image/side-4.jpg";
import side_6 from "/Image/side-6.jpg";
import side_5 from "/Image/side-5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomeBanner = () => {
  return (
    <>
      <div className="container mt-3">
        <div className="homebannersection">
          <Swiper
            spaceBetween={15}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="item">
                <img src={side_1} alt=".." className="w-100" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <img src={side_2} alt=".." className="w-100" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <img src={side_3} alt=".." className="w-100" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <img src={side_4} alt=".." className="w-100" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <img src={side_6} alt=".." className="w-100" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <img src={side_5} alt=".." className="w-100" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
