import React, { useRef, useState } from "react";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { IoMdClose } from "react-icons/io";
import Rating from "@mui/material/Rating";
import Slider from "react-slick";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import QuantityBox from "./QuantityBox";
import { IoIosHeartEmpty } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import ProductZoom from "./ProductZoom";

const ProductModul = (props) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSlider = useRef();
  const goto = (index) => {
    setSlideIndex(index);
    zoomSlider.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
  };

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToscroll: 1,
    fade: false,
    arrows: true,
  };
  var settings2 = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScr011: 1,
    fade: false,
    arrows: false,
  };

  return (
    <>
      <Dialog
        open={true}
        onClose={() => props.closeProductModal()}
        className="productmodal"
      >
        <Button className="close_" onClick={() => props.closeProductModal()}>
          <IoMdClose />
        </Button>
        <h4 className="mb-1 font-wright-bold">
          All Natural Italian-Style Chicken Meatballs
        </h4>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center">
            <span>Brands:</span>
            <span className="ms-2">Welch's</span>
          </div>
          <Rating
            className=" ms-4"
            name="read-only"
            value={5}
            readOnly
            size="small"
            precision={0.5}
          />
        </div>
        <hr />
        <div className="row mt-2 productdetailmodal">
          <div className="col-md-5">
            {/* <div className="productZoom position-relative">
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
            </Swiper> */}
            <ProductZoom />
          </div>
          <div className="col-md-7">
            <div className="d-flex info  productdetailmodal align-items-center">
              <span className="oldprice me-2 lg">$20.00</span>
              <span className="netprice text-danger lg">$14.50</span>
            </div>
            <span className="badge bg-success mt-3 mb-3">In Stock</span>
            <p className="">
              Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
              malesuada tincidunt. Class aptent taciti sociosqu ad litora
              torquent
            </p>
            <div className="d-flex info  align-items-center">
              <QuantityBox />
              <Button className="btn btn-blue btn-lg btn-big btn-round ">
                Add To Cart
              </Button>
            </div>
            <div className="d-flex info  align-items-center action mt-4">
              <Button variant="outlined" className=" btn-round btn-sml">
                <IoIosHeartEmpty
                  style={{ fontSize: "20px" }}
                  className="me-1"
                />
                Add to Wishlist
              </Button>
              <Button className=" btn-round btn-2 ms-2">
                <HiOutlineSwitchVertical
                  style={{ fontSize: "20px" }}
                  className="me-1"
                />
                Compare
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ProductModul;
