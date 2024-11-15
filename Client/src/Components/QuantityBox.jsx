import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import Button from "@mui/material/Button";

const QuantityBox = () => {
  const [inputVal, setInputval] = useState(1);

  return (
    <>
      <div className="quantitydrop d-flex info  align-items-center">
        <Button
          onClick={() =>
            inputVal <= 1 ? setInputval(inputVal) : setInputval(inputVal - 1)
          }
        >
          <FaMinus />
        </Button>
        <input type="text" value={inputVal} />
        <Button onClick={() => setInputval(inputVal + 1)}>
          <FaPlus />
        </Button>
      </div>
    </>
  );
};

export default QuantityBox;
