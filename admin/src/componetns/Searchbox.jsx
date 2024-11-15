import React from "react";
import { IoMdSearch } from "react-icons/io";
import { Button } from "@mui/material";

const Searchbox = () => {
  return (
    <>
      <div className="searchbox d-flex align-items-center">
        <IoMdSearch className="me-2 " />
        <input type="text" placeholder="quick finding..." />
      </div>
    </>
  );
};

export default Searchbox;
