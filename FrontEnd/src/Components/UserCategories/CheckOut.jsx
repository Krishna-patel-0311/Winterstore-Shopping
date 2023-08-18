import { ShoppingBag } from "@mui/icons-material";
import { Button, FormLabel, TextField } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AppContext } from "../context";
import { motion } from "framer-motion";

const CheckOut = () => {
  const [Value, setValues] = useState([]);
  const { UserId } = useContext(AppContext);
  const { data } = useParams();
  const [id, price] = data.split("&");
  const token = localStorage.getItem("authtoken");
  axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
  const navigate = useNavigate();

  useEffect(() => {
    getDetails(UserId);
  }, [UserId]);
  const getDetails = async (Id) => {
    try {
      const response = await axios.get(`http://localhost:5000/Profile/${Id}`);
      if (response.status === 200) {
        setValues(response.data);
      }
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };
  const handleChange = (e) => {
    setValues({
      ...Value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (UserId, id) => {
    const Data = {
      ...Value,
      ProductId: id,
      totalPrice: price,
    };

    try {
      const response = await axios.post(
        `http://localhost:5000/order/${UserId}`,
        Data
      );
      if (response.status === 200) {
        toast.success(`item successfully Ordered`);
        navigate(`/OrderSuccess/${response.data.OrderId}`);
      }
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 2, type: "spring" }}
      className="container p-5 mt-2 mb-2"
      style={{
        margin: "auto",
        backgroundColor: "#101E2B",
        boxShadow: "0 15px 25px rgba(0,0,0,.6)",
        borderRadius: "10px",
      }}
    >
      <h3 className="py-2 text-light text-center">
        <i className="bi bi-bag-heart-fill me-2"></i>Checkout Page
      </h3>

      <FormLabel className="text-light m-2">Customer Name</FormLabel>
      <TextField
        type="text"
        value={Value.CustomerName}
        onChange={handleChange}
        className="form-control"
        name="CustomerName"
      />

      <div className="row">
        <div className="col-md-6 col-sm-12 col-lg-6 ">
          <FormLabel className="text-light m-2">Address</FormLabel>
          <TextField
            type="text"
            value={Value.Address}
            onChange={handleChange}
            className="form-control"
            name="Address"
          />
        </div>
        <div className="col-md-6 col-sm-12 col-lg-6 ">
          <FormLabel className="text-light m-2">City</FormLabel>
          <TextField
            type="text"
            value={Value.City}
            onChange={handleChange}
            className="form-control"
            name="City"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12 col-lg-6 ">
          <FormLabel className="text-light m-2">State</FormLabel>
          <TextField
            type="text"
            value={Value.State}
            onChange={handleChange}
            className="form-control"
            name="State"
          />
        </div>
        <div className="col-md-6 col-sm-12 col-lg-6 ">
          <FormLabel className="text-light m-2">ZipCode</FormLabel>
          <TextField
            type="text"
            value={Value.Zip}
            onChange={handleChange}
            className="form-control"
            name="Zip"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12 col-lg-6 ">
          <FormLabel className="text-light m-2">Contact</FormLabel>
          <TextField
            type="text"
            value={Value.Phone}
            onChange={handleChange}
            className="form-control"
            name="Phone"
          />
        </div>
        <div className="col-md-6 col-sm-12 col-lg-6 ">
          <FormLabel className="text-light m-2">Total Price</FormLabel>
          <TextField
            type="text"
            value={price}
            onChange={handleChange}
            className="form-control"
            name="totalPrice"
          />
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12 col-lg-6 ">
            <FormLabel className="text-light m-2">Payment Method</FormLabel>
            <select
              onChange={(e) => handleChange(e)}
              className="form-select py-3"
              name="PaymentMethod"
            >
              <option value="#">--- Select mode of payment ---</option>
              <option value="Cash on Delivery">Cash on Delivery</option>
              <option value="Paytm">Paytm</option>
              <option value="Gpay">Gpay</option>
              <option value="PhonePay">PhonePay</option>
              <option value="OtherUpi">OtherUpi</option>
              <option value="Net Banking">Net Banking</option>
              <option value="Credit/Debit Card">Credit/Debit Card</option>
              <option value="EMI">EMI</option>
            </select>
          </div>
        </div>
      </div>
      <Button
        className="text-center py-4 mt-2"
        startIcon={<ShoppingBag />}
        style={{
          width: "150px",
          margin: "auto",
          borderRadius: "5px",
          backgroundColor: "#149686",
        }}
        variant="contained"
        onClick={() => handleSubmit(UserId, id)}
      >
        Order Now
      </Button>
    </motion.div>
  );
};

export default CheckOut;
