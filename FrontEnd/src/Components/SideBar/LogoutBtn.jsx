import React, { useContext } from "react";
import { AppContext } from "../context";
import { MenuItem } from "react-pro-sidebar";
import { Logout } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LogoutBtn = () => {
  const Navigate = useNavigate();
  const { setIsLoggedIn, setUserName } = useContext(AppContext);
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
    localStorage.clear();
    sessionStorage.clear();
    toast.error("LoggedOut Succefully.");
    Navigate("/Login");
  };
  return (
    <MenuItem
      icon={<Logout />}
      onClick={() => handleLogout()}
      style={{ color: "#149686" }}
    >
      {" "}
      Logout
    </MenuItem>
  );
};

export default LogoutBtn;
