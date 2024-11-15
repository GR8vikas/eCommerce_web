import React, { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { mycontext } from "../App";

const CountryDrop = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [countryList, SetCountryList] = useState([]);
  useEffect(() => {
    SetCountryList(context.countryList);
  }, []);
  const context = useContext(mycontext);
  const selectCountry = (index, country) => {
    setSelected(index);
    setOpen(false);
    context.setSelectedcountry(country);
  };

  const inputEvent = (e) => {
    const keyword = e.target.value.toLowerCase();
    if (keyword !== "") {
      const list = countryList.filter((item) => {
        return item.country.toLowerCase().includes(keyword);
      });
      SetCountryList(list);
    } else {
      SetCountryList(context.countryList);
    }
  };

  return (
    <>
      <Button className="countrydrop" onClick={() => setOpen(true)}>
        <div className="info d-flex flex-column">
          <span className="label">your location</span>
          <span className="name">
            {context.selectedcountry !== ""
              ? context.selectedcountry.length > 10
                ? context.selectedcountry?.substr(0, 10) + "..."
                : context.selectedcountry
              : "Select Location"}
          </span>
        </div>
        <span className="d-flex ms-auto svg">
          <FaAngleDown />
        </span>
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="location-modal mt-5"
      >
        <h4 className="mb-1 title">Choose your Delivery Location</h4>
        <p className="pra">
          Enter your address and we will specify the offer for your area.
        </p>
        <Button className="close_" onClick={() => setOpen(false)}>
          <IoMdClose />
        </Button>

        <div className="headersearch w-100">
          <input
            type="text"
            placeholder="Search for Country"
            onChange={inputEvent}
          />
          <Button className="search">
            <IoSearchSharp />
          </Button>
        </div>
        <ul className="countrylist">
          {countryList?.length !== 0 &&
            countryList?.map((item, index) => {
              return (
                <li className="" key={index}>
                  <Button
                    onClick={() => selectCountry(index, item.country)}
                    className={`${selected === index ? "active" : ""}`}
                  >
                    {item.country}
                  </Button>
                </li>
              );
            })}
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDrop;
