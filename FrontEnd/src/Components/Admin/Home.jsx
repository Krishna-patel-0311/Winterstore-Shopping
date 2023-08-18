import React from "react";
import Divider from "../Home/Divider";
import Product from "../../Images/orders.gif";
import Customer from "../../Images/user.gif";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();
  const handleClick = (event) => {
    if (event === "products") {
      navigate("/Admin/Products");
    } else if (event === "customers") {
      navigate("/Admin/Users");
    } else if (event === "orders") {
      navigate("/Admin/Orders");
    } else if (event === "messages") {
      navigate("/Admin/Issues");
    }
  };

  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 2, type: "spring" }}
    >
      <Divider Title="Tasks Admin Can Perform" />
      <div class="containe mb-4 m-auto" style={{ width: "80%" }}>
        <div class="row">
          <div class="col-md-6 col-sm-12 ">
            <div
              class="card h-100"
              style={{ boxShadow: "0 2px 5px rgba(0,0,0,.6)", margin: "auto" }}
            >
              <img src={Product} class="card-img-top" alt="Products Section" />
              <div class="card-body">
                <h5 class="card-title text-center">
                  {" "}
                  <Button
                    variant="contained"
                    style={{ margin: "auto", backgroundColor: "#149686" }}
                    color="secondary"
                    onClick={() => handleClick("products")}
                  >
                    Products
                  </Button>
                </h5>
              </div>
              <br />
            </div>
          </div>
          <div class="col-md-6 col-sm-12 ">
            <div
              class="card h-100"
              style={{ boxShadow: "0 2px 5px rgba(0,0,0,.6)", margin: "auto" }}
            >
              <img
                src={Customer}
                width="50%"
                class="card-img-top"
                alt="Customer Section"
              />
              <div class="card-body">
                <h5 class="card-title text-center">
                  <Button
                    variant="contained"
                    onClick={() => handleClick("customers")}
                    style={{ margin: "auto", backgroundColor: "#149686" }}
                    color="secondary"
                  >
                    Customers
                  </Button>
                </h5>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
