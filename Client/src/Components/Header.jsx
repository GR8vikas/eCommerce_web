import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "/Image/bacola-logo.png";
import { FaRegUser } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { mycontext } from "../App";
import CountryDrop from "./CountryDrop";
import { SlHandbag } from "react-icons/sl";
import Button from "@mui/material/Button";
import SeachBox from "./SeachBox";
import { IoMenu } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";

const Header = () => {
  const context = useContext(mycontext);
  const [isOpenSidebarval, setIsOpenSidebarval] = useState(false);
  return (
    <>
      <header className="headerwrapper">
        <div className="top-script bg-blue">
          <div className="container bg-purple ">
            <p className="mt-0 mb-0 text-center ">
              Due to the <b>COVID 19</b> epidemic, orders may be processed with
              a slight delay
            </p>
          </div>
        </div>
        <div className="header">
          <div className="container">
            <div className="row">
              <div className="logowrapper d-flex align-items-center col-sm-2">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>

              <div className="col-sm-10 d-flex align-items-center part-2">
                {context.countryList.length !== 0 && <CountryDrop />}

                <SeachBox />
                <div className="part-3 d-flex align-items-center  ms-auto">
                  {context.isLogin === false ? (
                    <Link to="/signin">
                      <Button className=" btn-blue btn-lg  btn-round ms-3 me-2">
                        signin
                      </Button>
                    </Link>
                  ) : (
                    <Button className="cricle me-3 ">
                      <FaRegUser />
                    </Button>
                  )}

                  {/*  */}

                  <div className="ms-auto cartTab d-flex align-items-center">
                    <span className="price">$ 3.29</span>
                  </div>
                  <div className="position-relative ms-2">
                    <Button className=" vikas ">
                      <SlHandbag />
                    </Button>
                    <span className="count d-flex align-items-center justify-content-center">
                      1
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav>
          <div className="container">
            <div className="row">
              <div className="col-sm-3 part-1">
                <div className="cartwraper">
                  <Button
                    className="allcatTab d-flex align-items-center"
                    onClick={() => {
                      setIsOpenSidebarval(!isOpenSidebarval);
                    }}
                  >
                    <span className="icon-1 me-2">
                      <IoMenu />
                    </span>
                    <span className="text">ALL CATEGORIES</span>
                    <span className="icon-2 ms-2">
                      <FaAngleDown />
                    </span>
                  </Button>
                  <div
                    className={`sidebarnav  ${
                      isOpenSidebarval === true ? "open" : ""
                    }`}
                  >
                    <ul className="d">
                      <li className="d-flex ">
                        <Link to="/">
                          <Button>
                            man
                            <FaAngleRight className=" right" />
                          </Button>
                        </Link>

                        <div className="submenu-1 ">
                          <Link to="/">
                            <Button>clothing</Button>
                          </Link>
                          <Link to="/">
                            <Button>footware</Button>
                          </Link>
                          <Link to="/">
                            <Button>watches</Button>
                          </Link>
                        </div>
                      </li>
                      <li className="">
                        <Link to="/">
                          <Button>woman</Button>
                        </Link>
                      </li>
                      <li className="">
                        <Link to="/">
                          <Button>beauty</Button>
                        </Link>
                      </li>
                      <li className="">
                        <Link to="/">
                          <Button>watch</Button>
                        </Link>
                      </li>
                      <li className="">
                        <Link to="/">
                          <Button>kids</Button>
                        </Link>
                      </li>
                      <li className="">
                        <Link to="/">
                          <Button>gift</Button>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-9 part-2 d-flex align-items-center">
                <ul className="list list-inline ms-auto">
                  <li className="list list-inline-item">
                    <Link to="/">
                      <Button>Home</Button>
                    </Link>
                  </li>
                  <li className="list list-inline-item">
                    <Link to="/">
                      <Button>man</Button>
                    </Link>
                    <div className="submenu shadow">
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>footware</Button>
                      </Link>
                      <Link to="/">
                        <Button>watches</Button>
                      </Link>
                    </div>
                  </li>
                  <li className="list list-inline-item">
                    <Link to="/">
                      <Button>woman</Button>
                    </Link>
                  </li>
                  <li className="list list-inline-item">
                    <Link to="/">
                      <Button>beauty</Button>
                    </Link>
                  </li>
                  <li className="list list-inline-item">
                    <Link to="/">
                      <Button>watch</Button>
                    </Link>
                  </li>
                  <li className="list list-inline-item">
                    <Link to="/">
                      <Button>kids</Button>
                    </Link>
                  </li>
                  <li className="list list-inline-item">
                    <Link to="/">
                      <Button>gift</Button>
                    </Link>
                  </li>
                  <li className="list list-inline-item">
                    <Link to="/">
                      <Button>Blog</Button>
                    </Link>
                  </li>
                  <li className="list list-inline-item">
                    <Link to="/">
                      <Button>Contant Us</Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
