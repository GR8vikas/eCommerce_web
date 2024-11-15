import React from "react";
import { LuShirt } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { RiDiscountPercentLine } from "react-icons/ri";
import { CiDollar } from "react-icons/ci";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="topfooter row">
            <div className="col d-flex align-items-center">
              <span>
                <LuShirt />
              </span>
              <span className="ms-2"> Everyday fresh products</span>
            </div>
            <div className="col d-flex align-items-center">
              <span>
                <TbTruckDelivery />
              </span>
              <span className="ms-2"> Free delivery for order over $70</span>
            </div>
            <div className="col d-flex align-items-center">
              <span>
                <RiDiscountPercentLine />
              </span>
              <span className="ms-2"> Daily Mega Discounts</span>
            </div>
            <div className="col d-flex align-items-center">
              <span>
                <CiDollar />
              </span>
              <span className="ms-2">Best price on the market</span>
            </div>
          </div>
          <div className="row mt-5  linkwraper">
            <div className="col">
              <h5>FRUIT & VEGETABLES</h5>
              <ul>
                <li>
                  <Link to="/">Fresh Vegetables</Link>
                </li>
                <li>
                  <Link to="/">Herbs & Seasonings</Link>
                </li>
                <li>
                  <Link to="/">Fresh Fruits</Link>
                </li>
                <li>
                  <Link to="/">Cuts & Sprouts</Link>
                </li>
                <li>
                  <Link to="/">Exotic Fruits & Veggies</Link>
                </li>
                <li>
                  <Link to="/">Packaged Produce</Link>
                </li>
                <li>
                  <Link to="/">Party Trays</Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <h5>Breakfast & Dairy</h5>
              <ul>
                <li>
                  <Link to="/">Fresh Vegetables</Link>
                </li>
                <li>
                  <Link to="/">Herbs & Seasonings</Link>
                </li>
                <li>
                  <Link to="/">Fresh Fruits</Link>
                </li>
                <li>
                  <Link to="/">Cuts & Sprouts</Link>
                </li>
                <li>
                  <Link to="/">Exotic Fruits & Veggies</Link>
                </li>
                <li>
                  <Link to="/">Packaged Produce</Link>
                </li>
                <li>
                  <Link to="/">Party Trays</Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <h5>Meat & Seafood</h5>
              <ul>
                <li>
                  <Link to="/">Fresh Vegetables</Link>
                </li>
                <li>
                  <Link to="/">Herbs & Seasonings</Link>
                </li>
                <li>
                  <Link to="/">Fresh Fruits</Link>
                </li>
                <li>
                  <Link to="/">Cuts & Sprouts</Link>
                </li>
                <li>
                  <Link to="/">Exotic Fruits & Veggies</Link>
                </li>
                <li>
                  <Link to="/">Packaged Produce</Link>
                </li>
                <li>
                  <Link to="/">Party Trays</Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <h5>Beverages</h5>
              <ul>
                <li>
                  <Link to="/">Fresh Vegetables</Link>
                </li>
                <li>
                  <Link to="/">Herbs & Seasonings</Link>
                </li>
                <li>
                  <Link to="/">Fresh Fruits</Link>
                </li>
                <li>
                  <Link to="/">Cuts & Sprouts</Link>
                </li>
                <li>
                  <Link to="/">Exotic Fruits & Veggies</Link>
                </li>
                <li>
                  <Link to="/">Packaged Produce</Link>
                </li>
                <li>
                  <Link to="/">Party Trays</Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <h5>Breads & Bakery</h5>
              <ul>
                <li>
                  <Link to="/">Fresh Vegetables</Link>
                </li>
                <li>
                  <Link to="/">Herbs & Seasonings</Link>
                </li>
                <li>
                  <Link to="/">Fresh Fruits</Link>
                </li>
                <li>
                  <Link to="/">Cuts & Sprouts</Link>
                </li>
                <li>
                  <Link to="/">Exotic Fruits & Veggies</Link>
                </li>
                <li>
                  <Link to="/">Packaged Produce</Link>
                </li>
                <li>
                  <Link to="/">Party Trays</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright mt-3 mb-3 pt-3 pb-3 d-flex">
            <p>
              Copyright 2024 © Bacola WordPress Theme. All rights reserved.
              Powered by KlbTheme.
            </p>
            <ul className="list list-inline ms-auto mb-0">
              <li className="list list-inline-item">
                <Link to="/">
                  <RiFacebookFill />
                </Link>
              </li>
              <li className="list list-inline-item">
                <Link to="/">
                  <FaTwitter />
                </Link>
              </li>
              <li className="list list-inline-item">
                <Link to="/">
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
