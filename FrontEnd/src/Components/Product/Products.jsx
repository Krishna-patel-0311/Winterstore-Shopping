import React from "react";
import Button from "@mui/material/Button";
import { Add, RemoveRedEye } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "../../css/product.css";
import { motion } from "framer-motion";

export default function Products() {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 2, type: "spring" }}
      className="container-fluid h-100"
      style={{ backgroundColor: "#101E2B", borderRadius: "10px", width: "95%" }}
    >
      <div className="text-center">
        <div className="row">
          <h1 style={{ color: "#149686" }} className="mt-2">
            Products Section{" "}
          </h1>
        </div>
        <div
          className="row mt-5 mb-5"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="col-md-4">
            <i class="bi bi-box-seam fa-4x" style={{ color: "#149686" }}></i>
          </div>
          <div className="col-md-4">
            <h2 style={{ color: "#149686" }}>Add Products</h2>
            <span style={{ color: "#149686" }}>
              Add new products to the products table
            </span>
          </div>
          <div className="col-md-4">
            <Button
              variant="contained"
              className="m-2"
              startIcon={<Add />}
              onClick={() => navigate("/Admin/Products/Add")}
              style={{ backgroundColor: "#149686" }}
            >
              Add&nbsp;&nbsp;
            </Button>
          </div>
        </div>
        <div
          className="row mt-5 mb-5"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="col-md-4">
            <i class="bi bi-list-task fa-4x" style={{ color: "#149686" }}></i>
          </div>
          <div className="col-md-4">
            <h2 style={{ color: "#149686" }}>View All Products</h2>
            <span style={{ color: "#149686" }}>
              View all the products from the products table
            </span>
          </div>
          <div className="col-md-4">
            <Button
              variant="contained"
              className="m-2"
              onClick={() => navigate("/Admin/Products/ProductList")}
              startIcon={<RemoveRedEye />}
              style={{ backgroundColor: "#149686" }}
            >
              View&nbsp;&nbsp;
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
