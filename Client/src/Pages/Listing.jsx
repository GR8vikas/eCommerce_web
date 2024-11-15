import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import ImageBanner from "../Components/ImageBanner";
import Button from "@mui/material/Button";
import { IoMdMenu } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { HiViewGrid } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ProductItem from "../Components/ProductItem";
import Pagination from "@mui/material/Pagination";
import axios from "axios";
import { mycontext } from "../App";

const Listing = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [productView, setProductView] = useState("four");
  const openDropDown = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const context = useContext(mycontext);
  return (
    <>
      <section className="product_Listing_page">
        <div className="container">
          <div className="productlisting d-flex">
            <Sidebar />
            <div className="contant_right">
              <div className="imagebanner">
                <ImageBanner
                  className="w-100"
                  name="Organic Meals Prepared"
                  title="Delivered to your Home"
                  bold="Fully prepared & delivered nationwide."
                  imgsrc={
                    "https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-18.jpg"
                  }
                />
              </div>
              <div className="showBy mt-3 mb-3 d-flex align-items-center">
                <div className="btnwraper d-flex align-items-center">
                  <Button
                    className={productView === "one" && "act"}
                    onClick={() => setProductView("one")}
                  >
                    <IoMdMenu />
                  </Button>
                  <Button
                    className={productView === "two" && "act"}
                    onClick={() => setProductView("two")}
                  >
                    <HiViewGrid />
                  </Button>
                  <Button
                    className={productView === "three" && "act"}
                    onClick={() => setProductView("three")}
                  >
                    <CgMenuGridO />
                  </Button>
                  <Button
                    className={productView === "four" && "act"}
                    onClick={() => setProductView("four")}
                  >
                    <TfiLayoutGrid4Alt />
                  </Button>
                </div>
                <div className="ms-auto showByFilter">
                  <Button onClick={handleClick}>
                    Show 9
                    <FaAngleDown />
                  </Button>
                  <Menu
                    className="showperpagedropdown"
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={openDropDown}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>9</MenuItem>
                    <MenuItem onClick={handleClose}>12</MenuItem>
                    <MenuItem onClick={handleClose}>36</MenuItem>
                  </Menu>
                </div>
              </div>
              <div className="productListiing mt-3 mb-3">
                {context.products.map((product) => {
                  return (
                    <ProductItem
                      itemview={productView}
                      id={product.id}
                      name={product.title}
                      description={product.description}
                      images={product.images}
                      brand={product.brand}
                      discountPercentage={product.discountPercentage}
                      price={product.price}
                      category={product.category}
                      countInStock={product.countInStock}
                      rating={product.rating}
                      numReviews={product.numReviews}
                      isFeature={product.isFeature}
                    />
                  );
                })}
              </div>
              <div className="pagination mt-3 mb-3 d-flex align-items-center justify-content-center">
                <Pagination count={5} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Listing;
