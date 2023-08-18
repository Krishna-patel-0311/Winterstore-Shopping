import React, { useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { Add } from "@mui/icons-material";
import "../../css/Register.css";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const AddProduct = () => {
  const [Value, setValues] = useState([]);
  const token = localStorage.getItem("authtoken");
  axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
  const handleChange = (e) => {
    setValues({
      ...Value,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/product/add",
        Value
      );
      //  console.log(response)
      if (response.status === 201) {
        toast.success("product successfully added");
        // console.log(response.data)
      }
    } catch (error) {
      toast.error("something went wrong");
    }
    // console.log(Value)
  };
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 2, type: "spring" }}
      className="container  mt-2 mb-2 box"
      style={{
        margin: "auto",
        backgroundColor: "#101E2B",
        boxShadow: "0 15px 25px rgba(0,0,0,.6)",
        borderRadius: "10px",
        padding: "80px",
      }}
    >
      <p className="py-2">Add Product</p>
      <div className="row">
        <div className="col-md-6 col-sm-12 col-lg-6 ">
          <div className="user-box m-2">
            <input
              type="text"
              onChange={(e) => handleChange(e)}
              className="form-control py-2"
              placeholder="Product Name"
              name="pname"
            />
          </div>
        </div>
        <div className="col-md-6 col-sm-12 col-lg-6 ">
          <div className="user-box m-2">
            <input
              type="text"
              onChange={(e) => handleChange(e)}
              className="form-control py-2"
              placeholder="Product Brand"
              name="pbrand"
            />
          </div>
        </div>
      </div>
      <div className="user-box m-2">
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          placeholder="Product Description"
          className="form-control py-3"
          name="pdesc"
        />
      </div>
      <div className="user-box m-2">
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          placeholder="Product img url"
          className="form-control py-3"
          name="pimage"
        />
        <br />
        <input
          type="file"
          onChange={(e) => handleChange(e)}
          className="form-control"
          name="pimage"
        />
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12 col-lg-6 ">
          <div className="user-box m-2">
            <select
              onChange={(e) => handleChange(e)}
              className="form-select py-2"
              name="pcategory"
            >
              <option value="">Select Category</option>
              <option value="SweatShirts">Sweatshirts</option>
              <option value="Sweaters">Sweaters</option>
              <option value="Hoodies">Hoodies</option>
              <option value="Jackets">Jackets</option>
              <option value="Coats">Coats</option>
              <option value="Tshirts">Tshirts</option>
            </select>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 col-lg-6">
          <div className="user-box m-2">
            <select
              onChange={(e) => handleChange(e)}
              className="form-select py-2"
              name="pidealfor"
            >
              <option value="">Select IdealFor</option>
              <option value="Men">Men's</option>
              <option value="Women">Women's</option>
              <option value="Boys">Boys</option>
              <option value="Girls">Girls</option>
              <option value="Unisex Kids">Unisex Kids</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12 col-lg-6 ">
          <div className="user-box m-2">
            <input
              type="number"
              onChange={(e) => handleChange(e)}
              placeholder="Product Mrp"
              className="form-control py-2"
              name="pmrp"
            />
          </div>
        </div>
        <div className="col-md-6 col-sm-12 col-lg-6">
          <div className="user-box m-2">
            <input
              type="number"
              onChange={(e) => handleChange(e)}
              placeholder="Product Price"
              className="form-control py-2"
              name="pprice"
            />
          </div>
        </div>
      </div>

      <div className="row px-5 mt-2 ">
        <div className="col">
          <Button
            type="submit"
            onClick={(e) => handleSubmit(e)}
            startIcon={<Add />}
            variant="contained"
            className=""
            style={{ backgroundColor: "#149686", margin: "auto" }}
            color="success"
          >
            Add Product
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default AddProduct;
