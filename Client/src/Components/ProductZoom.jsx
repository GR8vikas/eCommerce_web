import React, { useRef, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import { Navigation } from "swiper/modules";

const ProductZoom = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSlider = useRef();
  const goto = (index) => {
    setSlideIndex(index);
    zoomSlider.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
  };

  return (
    <>
      <div className="productZoom position-relative">
        <span className="badge badge-primary"> 28%</span>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          slidesPerGroup={1}
          navigation={false}
          modules={[Navigation]}
          className="zoomSliderBig"
          ref={zoomSliderBig}
        >
          <SwiperSlide>
            <div className="item">
              <InnerImageZoom
                zoomType="hover"
                zoomScale={2}
                src={
                  "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
                }
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item">
              <InnerImageZoom
                zoomType="hover"
                zoomScale={2}
                src={
                  "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
                }
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <InnerImageZoom
                zoomType="hover"
                zoomScale={2}
                src={
                  "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
                }
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        slidesPerGroup={1}
        navigation={true}
        modules={[Navigation]}
        className="zoomSlider"
        ref={zoomSlider}
      >
        <SwiperSlide>
          <div className={`item ${slideIndex === 0 && "item_active"}`}>
            <img
              src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg`}
              alt="..."
              className="w-100"
              onClick={() => goto(0)}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`item ${slideIndex === 1 && "item_active"}`}>
            <img
              src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg`}
              alt="..."
              className="w-100"
              onClick={() => goto(1)}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`item ${slideIndex === 2 && "item_active"}`}>
            <img
              src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg`}
              alt="..."
              className="w-100"
              onClick={() => goto(2)}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ProductZoom;
