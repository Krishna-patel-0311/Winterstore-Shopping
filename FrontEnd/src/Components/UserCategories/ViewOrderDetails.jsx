import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {  useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from 'framer-motion'

const ViewOrderDetails = () => {
  const { id } = useParams();
  const [Value, setValue] = useState([]);
  useEffect(() => {
    getData(id);
  }, [id]);
  const token = localStorage.getItem("authtoken");
  axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
  const getData = async (Id) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/order/Details/${Id}`
      );
      if (response.status === 200) {
        setValue(response.data);
      }
    } catch (error) {
      toast.error("error occured");
    }
  };
  return (
    <motion.div
    initial={{x:'-100vw'}}
    animate={{x:0}}
    transition={{duration:2,type:"spring"}}
      className="container"
      style={{ backgroundColor: "#101E2B", borderRadius: "20px" }}
    >
      <div className="row mt-5 mb-5">
        <div className={`${window.innerWidth < 768 ? "col-12" : "col-md-6"}`}>
          <img
            src={Value.ProductImage}
            style={{ width: "60%" }}
            className="m-5"
            alt="product"
          />
        </div>
        <div className="col">
          <div className="container-fluid text-light mt-2">
            <div className="row mt-2">
              <h3>Product Details</h3>
              <div className="row mt-3">
                <div className="col">
                  <h4>ProductName : </h4>
                </div>
                <div className="col">
                  <h4>{Value.ProductName}</h4>
                </div>
              </div>          
                  <div className="row mt-1">
                <div className="col">
                  <h4>Price : </h4>
                </div>
                <div className="col" style={{textAlign:"left"}}>
                  <h4>{Value.TotalPrice}</h4>
                </div>
              </div>  
               <div className="row mt-1">
                <div className="col">
                  <h4>PaymentMethod : </h4>
                </div>
                <div className="col" style={{textAlign:"left"}}>
                  <h4>{Value.PaymentMethod}</h4>
                </div>
              </div>
               <div className="row mt-2">
                <div className="col">
                  <h4>OrderDate : </h4>
                </div>
                <div className="col" style={{textAlign:"left"}}>
                  <h4>{Value.Date}</h4>
                </div>
              </div>
              
            </div>
            <div className="row mt-3">
              <h3>Shipping Details</h3>
              <div className="row mt-1">
                <div className="col">
                  <h4>Name : </h4>
                </div>
                <div className="col">
                  <h4>{Value.CustomerName}</h4>
                </div>
              </div>          
                  <div className="row mt-1">
                <div className="col">
                  <h4>Address : </h4>
                </div>
                <div className="col" style={{textAlign:"left"}}>
                  <h4>{Value.Address}{", "}{Value.City}{", "}{Value.State}{"-"}{Value.Zip}</h4>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col">
                  <h4>ContactNo : </h4>
                </div>
                <div className="col">
                  <h4>{Value.Phone}</h4>
                </div>
              </div> 
              
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ViewOrderDetails;
