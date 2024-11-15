import React from "react";

const ImageBanner = (props) => {
  return (
    <>
      <div className="banner mb-5">
        <div className="banner-container">
          <img src={props.imgsrc} alt="Roats Burger" className="banner-image" />
          <div className="banner-text">
            <h4>{props.name}</h4>
            <h2 className="d-flex flex-column">
              {props.title} <span className="bold">{props.bold}</span>
            </h2>
            <p className="price d-flex flex-column mt-3">
              {props.only} <span>{props.price}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageBanner;
