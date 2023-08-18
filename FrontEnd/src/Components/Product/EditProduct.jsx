import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { BorderColor } from "@mui/icons-material";
import "../../css/Register.css";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const EditProduct = () => {
  const token = localStorage.getItem("authtoken");
  axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
  const navigate = useNavigate();
  const [Value, setValue] = useState([]);
  const [IsActive, setIsActive] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    getProducts(id);
  }, [id]);

  const getProducts = async (Id) => {
    const response = await axios.get(`http://localhost:5000/product/${Id}`);
    if (response.status === 200) {
      setValue(response.data);
      console.log(response.data);
      //   console.log(Value)
    }
    if (response.status === 500) {
      toast.error("error occured");
    }
  };
  const handleChange = (e) => {
    setValue({
      ...Value,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    // e.preventDefault();
    const formData = {
      ...Value,
      isActive: IsActive,
    };

    try {
      const response = await axios.put(
        `http://localhost:5000/product/${id}`,
        formData
      );
      //  console.log(response)
      if (response.status === 201) {
        toast.success("product successfully Updated");
        // console.log(response)
        navigate("/Admin/Products/ProductList");
        // console.log(response.data)
      }
    } catch (error) {
      toast.error("Error While Updating Data");
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
      <p className="py-2">
        <BorderColor className="h3" /> Edit Product Details
      </p>
      <div className="row">
        <div className="col-md-6 col-sm-12 col-lg-6 ">
          <div className="user-box m-2">
            <input
              type="text"
              value={Value.pname}
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
              value={Value.pbrand}
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
          value={Value.pdesc}
          onChange={(e) => handleChange(e)}
          placeholder="Product Description"
          className="form-control py-3"
          name="pdesc"
        />
      </div>
      <div className="user-box m-2">
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
              value={Value.pcategory}
              onChange={(e) => handleChange(e)}
              className="form-select py-2"
              name="pcategory"
            >
              <option value="">Select Category</option>
              <option value="sweatshirt">Sweatshirt</option>
              <option value="sweater">Sweater</option>
              <option value="jacket">Jacket</option>
              <option value="t-shirt">t-shirt</option>
            </select>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 col-lg-6">
          <div className="user-box m-2">
            <select
              value={Value.pidealfor}
              onChange={(e) => handleChange(e)}
              className="form-select py-2"
              name="pidealfor"
            >
              <option value="">Select IdealFor</option>
              <option value="Men's">Men's</option>
              <option value="Women's">Women's</option>
              <option value="Boys">Boys</option>
              <option value="Girls">Girls</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12 col-lg-6 ">
          <div className="user-box m-2">
            <input
              type="number"
              value={Value.pmrp}
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
              value={Value.pprice}
              onChange={(e) => handleChange(e)}
              placeholder="Product Price"
              className="form-control py-2"
              name="pprice"
            />
          </div>
        </div>
      </div>
      <div className="user-box m-2 py-2">
        <input
          type="checkbox"
          className="form-check-input"
          name="IsActive"
          checked={IsActive ? true : false}
          onChange={() => {
            setIsActive(!IsActive);
          }}
        />
        <span className="m-3">Active</span>
      </div>
      <Button
        type="submit"
        onClick={(e) => handleSubmit(e)}
        startIcon={<i className="bi bi-pencil-square text-light"></i>}
        variant="contained"
        style={{ backgroundColor: "#149686", margin: "auto" }}
        color="success"
      >
        Update
      </Button>
    </motion.div>
  );
};

export default EditProduct;
