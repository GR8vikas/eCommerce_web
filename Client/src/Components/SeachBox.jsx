import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import Button from "@mui/material/Button";

const SeachBox = () => {
  return (
    <>
      <div className="headersearch ms-3 me-3">
        <input type="text" placeholder="Search for products" />
        <Button>
          <IoSearchSharp />
        </Button>
      </div>
    </>
  );
};

export default SeachBox;
