import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { SlSizeFullscreen } from "react-icons/sl";
import { IoIosHeartEmpty } from "react-icons/io";
import ProductModul from "./ProductModul";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  const [isOpenProductModul, setIsOpenProductModul] = useState(false);
  const viewProductDetails = (id) => {
    setIsOpenProductModul(!isOpenProductModul);
  };
  const closeProductModal = () => {
    setIsOpenProductModul(false);
  };

  return (
    <>
      <div className={`item productItem ${props.itemview}`}>
        <div className="imageWraper">
          <Link to={`/product/${props.id}`}>
            <img src={props.images} alt="..." className="w-100" />
          </Link>
          <span className="badge badge-primary">
            {props.discountPercentage}%
          </span>
          <div className="actions">
            <Button onClick={() => viewProductDetails(1)}>
              <SlSizeFullscreen />
            </Button>
            <Button>
              <IoIosHeartEmpty style={{ fontSize: "20px" }} />
            </Button>
          </div>
        </div>
        <div className="info">
          <h4>{props.name}</h4>
          <span className="text-success d-block">In Stock</span>
          <Rating
            className="mt-2 mb-2"
            name="read-only"
            value={5}
            readOnly
            size="small"
          />
          <div className="d-flex">
            <span className="oldprice ">
              ${props.price + props.discountPercentage / 100}
            </span>
            <span className="netprice text-danger ">${props.price}</span>
          </div>
        </div>
      </div>
      {isOpenProductModul === true && (
        <ProductModul closeProductModal={closeProductModal} />
      )}
      {/* <ProductModul /> */}
    </>
  );
};

export default ProductItem;
