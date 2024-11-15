import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { Link } from "react-router-dom";
import sidebar_banner from "/Image/sidebar-banner.gif";

const Sidebar = () => {
  const [value, setValue] = useState([100, 60000]);
  const [value2, setValue2] = useState(0);
  return (
    <>
      <div className="sidebar">
        <div className="filterBox mb-4">
          <h6 className="mb-1">Product Categories</h6>
          <div className="scroll">
            <ul>
              <li>
                <FormControlLabel
                  classname="w-100"
                  control={<Checkbox defaultunChecked />}
                  label="Man"
                />
              </li>
              <li>
                <FormControlLabel
                  classname="w-100"
                  control={<Checkbox defaultunChecked />}
                  label="woman"
                />
              </li>
              <li>
                <FormControlLabel
                  classname="w-100"
                  control={<Checkbox defaultunChecked />}
                  label="beauty"
                />
              </li>
              <li>
                <FormControlLabel
                  classname="w-100"
                  control={<Checkbox defaultunChecked />}
                  label="watch"
                />
              </li>
              <li>
                <FormControlLabel
                  classname="w-100"
                  control={<Checkbox defaultunChecked />}
                  label="kids"
                />
              </li>
              <li>
                <FormControlLabel
                  classname="w-100"
                  control={<Checkbox defaultunChecked />}
                  label="gift"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="filterBox mb-4">
          <h6 className="mb-1">Filter by price</h6>
          <RangeSlider
            className=" mt-3 mb-1"
            value={value}
            onInput={setValue}
            min={100}
            max={60000}
            step={5}
          />
          <div className="d-flex pt-2 pd-2 pricerange">
            <span>
              From:<strong className="text-dark">Rs:{value[0]}</strong>
            </span>
            <span className="ms-auto">
              From:<strong className="text-dark">Rs:{value[1]}</strong>
            </span>
          </div>
        </div>
        <div className="filterBox mb-4">
          <h6 className="mb-1">Product Status</h6>
          <div className="scroll">
            <ul>
              <li>
                <FormControlLabel
                  classname="w-100"
                  control={<Checkbox defaultunChecked />}
                  label="in stock"
                />
              </li>
              <li>
                <FormControlLabel
                  classname="w-100"
                  control={<Checkbox defaultunChecked />}
                  label="on sale"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="filterBox mb-4">
          <h6 className="mb-1">Brands</h6>
          <div className="scroll">
            <ul>
              <li>
                <FormControlLabel
                  classname="w-100"
                  control={<Checkbox defaultunChecked />}
                  label="Frito Lay"
                />
              </li>
              <li>
                <FormControlLabel
                  classname="w-100"
                  control={<Checkbox defaultunChecked />}
                  label="Nespresso"
                />
              </li>
            </ul>
          </div>
        </div>
        <br />
        <Link to="#">
          <img src={sidebar_banner} alt="..." className="w-100" />
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
