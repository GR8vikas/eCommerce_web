import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/Image/logo.webp";
import { Button } from "@mui/material";
import { MdOutlineMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { IoSunnySharp } from "react-icons/io5";
import { MdNightlightRound } from "react-icons/md";
import { FaBell } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import Searchbox from "./Searchbox";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";

import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpenNoti, setIsOpenNoti] = useState(null);

  const open = Boolean(anchorEl);
  const openNoti = Boolean(isOpenNoti);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickNoti = (event) => {
    setIsOpenNoti(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseNoti = () => {
    setIsOpenNoti(null);
  };
  return (
    <>
      <header className="row d-flex align-items-center ">
        <div className="container-fluid w-100">
          <div className="row d-flex align-items-center ">
            <div className="col-sm-2">
              <Link to="/" className="d-flex align-items-center logo">
                <img src={logo} />
                <span className="ms-1">HOTASH</span>
              </Link>
            </div>
            <div className="col-sm-3 d-flex align-items-center">
              <Button className="rounded-cricle me-3">
                <MdOutlineMenuOpen />
              </Button>
              {/* <Button className="rounded-cricle">
                <MdOutlineMenu />
              </Button> */}
              <Searchbox />
            </div>
            <div className="col-sm-7 d-flex align-items-center justify-content-end part3 ">
              <Button className="rounded-cricle me-3">
                <IoSunnySharp />
              </Button>
              {/* <Button className="rounded-cricle me-3">
                <MdNightlightRound />
              </Button> */}
              <div className="dropdownWraper position-relative">
                <Button
                  className="rounded-cricle me-3"
                  onClick={handleClickNoti}
                >
                  <FaRegBell />
                </Button>
                <Menu
                  anchorEl={isOpenNoti}
                  id="account-menu"
                  open={openNoti}
                  onClose={handleCloseNoti}
                  onClick={handleCloseNoti}
                  slotProps={{
                    paper: {
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&::before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem onClick={handleCloseNoti}>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    My account
                  </MenuItem>
                  <MenuItem onClick={handleCloseNoti}>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Reset Password
                  </MenuItem>
                  <MenuItem onClick={handleCloseNoti}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </div>
              <div className="mycartwraper">
                <Button onClick={handleClick}>
                  <div className="userImg">
                    <span className="rounded-circle">
                      <img
                        src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                        alt=""
                      />
                    </span>
                  </div>
                  <div class="userInfo res-hide">
                    <h4>Rinku Verma</h4>
                    <p class="mb-0">@rinkuv37</p>
                  </div>
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  slotProps={{
                    paper: {
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&::before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    My account
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Reset Password
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
