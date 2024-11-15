import React from "react";
import coupon from "/Image/coupon.png";
import { CiMail } from "react-icons/ci";
import Button from "@mui/material/Button";

const NewsLetter = () => {
  return (
    <>
      <section className="newslettersection mt-3  d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white mb-1">
                $20 discount for your first order
              </p>
              <h3 className="text-white">Join our newsletter and get...</h3>
              <p className="text-light ">
                Join our email subscription now to get updates <br />
                on promotions and coupons.
              </p>
              <form>
                <CiMail />
                <input type="text" placeholder="Your email address" />
                <Button>Subscribe</Button>
              </form>
            </div>
            <div className="col-md-6">
              <img src={coupon} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;
