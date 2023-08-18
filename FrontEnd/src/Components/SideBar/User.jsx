import { React, useState, useEffect, useContext } from "react";
import "../../css/SideNav.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import {
  AccountBox,
  Face2,
  Face3,
  Face6,
  Info,
  Inventory2,
  Message,
  ShoppingCart,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { AppContext } from "../context";
import LogoutBtn from "./LogoutBtn";
import LoginBtn from "./LoginBtn";

const User = () => {
  const { IsLoggedIn, UserName, UserId } = useContext(AppContext);

  const { collapseSidebar } = useProSidebar();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isOpen] = useState(isDesktop);

  const handleToggle = () => {
    if (isDesktop) {
      collapseSidebar();
    }
  };

  return (
    <Sidebar
      className={`sidebar ${isOpen ? "open" : ""}`}
      backgroundColor="#101E2B"
      defaultCollapsed={!isDesktop}
    >
      <Menu className="">
        <MenuItem
          style={{ color: "#149686", textAlign: "center" }}
          icon={<MenuOutlinedIcon />}
          onClick={handleToggle}
        >
          {" "}
          <h3>
            <i>WinterStore</i>
          </h3>
        </MenuItem>
        <Link to={`/Profile/${UserId}`} style={{ color: "#149686" }}>
          <MenuItem icon={<AccountBox />}>
            Welcome,
            <i>
              <b>{UserName ? UserName : "User"}</b>
            </i>
          </MenuItem>
        </Link>
      </Menu>
      <hr style={{ borderBottom: "2px solid gray" }} />
      <Menu>
        <Link to="/" style={{ color: "#149686" }}>
          <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
        </Link>
        <Link to="/Mens" style={{ color: "#149686" }}>
          <MenuItem icon={<Face6 />}>Men's</MenuItem>
        </Link>
        <Link to="/Womens" style={{ color: "#149686" }}>
          <MenuItem icon={<Face3 />}>Women's</MenuItem>
        </Link>
        <Link to="/Kids" style={{ color: "#149686" }}>
          <MenuItem icon={<Face2 />}>Kids</MenuItem>
        </Link>
        <Link to="/MyCart" style={{ color: "#149686" }}>
          <MenuItem icon={<ShoppingCart />}>Cart</MenuItem>
        </Link>
        <Link to="/Orders" style={{ color: "#149686" }}>
          <MenuItem icon={<Inventory2 />}>Orders</MenuItem>
        </Link>
      </Menu>

      <Menu style={{ marginTop: "100px" }}>
        <Link to="/About" style={{ color: "#149686" }}>
          <MenuItem icon={<Info />}>About</MenuItem>
        </Link>
        {IsLoggedIn ? <LogoutBtn /> : <LoginBtn />}
      </Menu>
    </Sidebar>
  );
};

export default User;
