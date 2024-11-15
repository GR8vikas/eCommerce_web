import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const Homecat = () => {
  const [itemBg, setltemBg] = useState([
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#f2fce4",
    "#feefea",
    "#fff3eb",
    "#f2fce4",
    "#feefea",
    "#fff3eb",
    "#f2fce4",
    "#feefea",
  ]);

  return (
    <>
      <section className="homecat">
        <div className="container">
          <h3 className="mb-3 cursor hd">Featured Categories</h3>
          <div className="home_cat">
            <Swiper
              slidesPerView={10}
              spaceBetween={8}
              navigation={true}
              slidesPerGroup={3}
              modules={[Navigation]}
              className="mySwiper"
            >
              {itemBg.map((bg, index) => {
                return (
                  <SwiperSlide>
                    <div
                      className="item text-center"
                      key={index}
                      style={{ background: bg }}
                    >
                      <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" />
                      <h6>Red Apple</h6>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homecat;
