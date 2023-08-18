import { Edit} from "@mui/icons-material";
import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "../css/Register.css";
import { motion } from 'framer-motion'
const Profile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [Value, setValue] = useState([]);
  useEffect(() => {
    getProducts(id);
  }, [id]);
  const token = localStorage.getItem("authtoken");
  axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
  const getProducts = async (Id) => {
    try {
      const response = await axios.get(`http://localhost:5000/Profile/${Id}`);
      if (response.status === 200) {
        setValue(response.data);
      }
    } catch (error) {
      toast.error("error occured");
    }
  };
const handleClick = (id) => { 
  navigate(`/Profile/Edit/${id}`)

 }
  return (
    <motion.div
    initial={{x:'-100vw'}}
    animate={{x:0}}
    transition={{duration:2,type:"spring"}}
      className="container p-5 mt-2 mb-2 box"
      style={{
        margin: "auto",
        backgroundColor: "#101E2B",
        boxShadow: "0 15px 25px rgba(0,0,0,.6)",
        borderRadius: "10px",
      }}
    >
      <p className="py-2">User Details</p>

      <div className="row ">
        <div className="col-md-6 col-sm-12 col-lg-6 ">
          <div class="user-box m-2 ">
            <span>FirstName :</span>
            <label className="form-control py-2"> {Value.FirstName} </label>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 col-lg-6 ">
          <div class="user-box m-2">
            <span>Lastname :</span>
            <label className="form-control py-2"> {Value.LastName} </label>
          </div>
        </div>
      </div>

      <div class="user-box m-2">
        <span>Email Address :</span>
        <label className="form-control py-2">{Value.Email} </label>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12 col-lg-6 ">
          <div class="user-box m-2">
            <span>Mobile Number :</span>
            <label className="form-control py-2"> {Value.Phone} </label>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 col-lg-6 ">
          <div class="user-box m-2">
            <span>Zip Code :</span>
            <label className="form-control py-2">{Value.Zip} </label>
          </div>
        </div>
      </div>

      <div class="user-box m-2">
        <span> Address :</span>
        <label className="form-control py-2">{Value.Address} </label>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12 col-lg-6 ">
          <div class="user-box m-2">
            <span>City :</span>
            <label className="form-control py-2"> {Value.City} </label>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 col-lg-6 ">
          <div class="user-box m-2">
            <span>State :</span>
            <label className="form-control py-2">{Value.State} </label>
          </div>
        </div>
      </div>
      <div className="row mt-3" >
        <div className="col" >
        <Button
          type="submit"
          variant="contained"
          startIcon={<Edit style={{color:"white"}} />}
          onClick={() => handleClick(id)}
          style={{ backgroundColor: "#149686" ,width:"30%",margin:"auto"}}
          color="success"
        >
          Update Details
        </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
