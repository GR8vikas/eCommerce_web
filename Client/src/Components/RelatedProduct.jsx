import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductItem from "./ProductItem";

const RelatedProduct = (props) => {
  return (
    <>
      <div className="d-flex align-items-center mt-0 mb-0">
        <div className="info">
          <h3 className="mb-0 hd">{props.title}</h3>
        </div>
      </div>
      <div className="product_row w-100 mt-4 mb-4 ms-0 ">
        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default RelatedProduct;
