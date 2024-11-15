import React from "react";
import HomeBanner from "../Components/HomeBanner";
import banner from "/Image/banner.jpg";
import Button from "@mui/material/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Rating from "@mui/material/Rating";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductItem from "../Components/ProductItem";
import ImageBanner from "../Components/ImageBanner";
import Homecat from "../Components/Homecat";
import NewsLetter from "../Components/NewsLetter";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <Homecat />

      <div className="homeproduct">
        <div className="container">
          <div class="row">
            <div className="col-md-3">
              <div className="sticky">
                <ImageBanner
                  name="Bacola Natural Foods"
                  title="Special Organic"
                  bold="Roats Burger"
                  imgsrc={
                    "https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg"
                  }
                  only="only-from"
                  price="$14.99"
                />
                <ImageBanner
                  name="Best Bakery Productss"
                  title="Freshest Products"
                  bold="every hour."
                  imgsrc={
                    "https://klbtheme.com/bacola/wp-content/uploads/2021/04/bacola-banner-04.jpg"
                  }
                  only="only-from"
                  price="$24.99"
                />
              </div>
            </div>
            <div className="col-md-9 productRow">
              <div className="d-flex align-items-center mt-0 mb-0">
                <div className="info">
                  <h3 className="mb-0 hd">Best Sellers</h3>
                  <p className="text_light mb-0">
                    Do not miss the current offers until the end of March
                  </p>
                </div>
                <Button className="viewallbtn ms-auto">
                  View All
                  <FaArrowRightLong />
                </Button>
              </div>
              <div className="product_row w-100 mt-4 mb-4">
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
              <div className="d-flex align-items-center mt-5 mb-0">
                <div className="info">
                  <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                  <p className="text_light mb-0">
                    New products with updated stocks.
                  </p>
                </div>
                <Button className="viewallbtn ms-auto">
                  View All
                  <FaArrowRightLong />
                </Button>
              </div>
              <div className="product_row  producytrow2 w-100 mt-4 d-flex">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
              </div>
              <div className="banner2 mt-5 d-flex w-80">
                <ImageBanner
                  name="Bacola Natural Foods"
                  title="Special Organic"
                  bold="Roats Burger"
                  imgsrc={
                    "https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-01.jpg"
                  }
                  only="only- from"
                  price="$14.99"
                />
                <ImageBanner
                  name="Bacola Natural Foods"
                  title="Special Organic"
                  bold="Roats Burger"
                  imgsrc={
                    "https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-02.jpg"
                  }
                  only="only- from"
                  price="$14.99"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
    </>
  );
};

export default Home;
