import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { AppContext } from "../context";
import { MenuItem } from "react-pro-sidebar";
import { Login } from "@mui/icons-material";

const LoginBtn = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn, IsLoggedIn } = useContext(AppContext);
  const HandleLogin = () => {
    if (!IsLoggedIn) {
      navigate("/Login");
    } else {
      setIsLoggedIn(true);
    }
  };

  return (
    <MenuItem
      icon={<Login />}
      onClick={() => HandleLogin()}
      style={{ color: "#149686" }}
    >
      Login
    </MenuItem>
  );
};

export default LoginBtn;
