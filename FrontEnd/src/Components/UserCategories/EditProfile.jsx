import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const EditProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [Value, setValue] = useState([]);
  useEffect(() => {
    getData(id);
  }, [id]);
  const token = localStorage.getItem("authtoken");
  axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
  const getData = async (Id) => {
    try {
      const response = await axios.get(`http://localhost:5000/Profile/${Id}`);
      if (response.status === 200) {
        setValue(response.data);
      }
    } catch (error) {
      toast.error("error occured");
    }
  };
  const handleChange = (e) => {
    setValue({
      ...Value,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (id) => {
    const formData = {
      ...Value,
    };
    try {
      const response = await axios.put(
        `http://localhost:5000/Profile/Edit/${id}`,
        formData
      );
      if (response.status === 201) {
        toast.success("successfully Updated");
        navigate(`/Profile/${id}`);
      }
    } catch (error) {
      toast.warning("Error While Updating Details");
    }
  };
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 2, type: "spring" }}
      className="container p-5 mt-2 mb-2 box"
      style={{
        margin: "auto",
        backgroundColor: "#101E2B",
        boxShadow: "0 15px 25px rgba(0,0,0,.6)",
        borderRadius: "10px",
      }}
    >
      <p className="py-2">
        <i className="bi bi-pencil-square me-2 text-light"></i>Update Personal
        Details
      </p>
      <div className="row">
        <div className="col-md-6 col-sm-12 col-lg-6 ">
          <div class="user-box m-2">
            <TextField
              type="text"
              placeholder="First Name"
              value={Value.FirstName}
              onChange={handleChange}
              className="form-control"
              name="FirstName"
            />
          </div>
        </div>
        <div className="col-md-6 col-sm-12 col-lg-6 ">
          <div class="user-box m-2">
            <TextField
              type="text"
              placeholder="Last Name"
              value={Value.LastName}
              onChange={handleChange}
              className="form-control"
              name="LastName"
            />
          </div>
        </div>
      </div>

      <div class="user-box m-2">
        <TextField
          type="email"
          value={Value.Email}
          onChange={(e) => handleChange(e)}
          className="form-control "
          placeholder="Email Address"
          name="Email"
        />
      </div>

      <div class="user-box m-2">
        <TextField
          value={Value.Address}
          onChange={(e) => handleChange(e)}
          placeholder="Address line 1"
          className="form-control"
          name="Address"
        />
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12 col-lg-6 ">
          <div class="user-box m-2">
            <TextField
              type="text"
              value={Value.City}
              onChange={(e) => handleChange(e)}
              className="form-control"
              placeholder="City"
              name="City"
            />
          </div>
        </div>
        <div className="col-md-6 col-sm-12 col-lg-6 ">
          <div class="user-box m-2">
            <TextField
              value={Value.State}
              onChange={(e) => handleChange(e)}
              className="form-control "
              name="State"
              placeholder="State"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12 col-lg-6 ">
          <div class="user-box m-2">
            <TextField
              value={Value.Zip}
              type="text"
              onChange={(e) => handleChange(e)}
              fullWidth
              placeholder="Zip Code"
              name="Zip"
            />
          </div>
        </div>
        <div className="col-md-6 col-sm-12 col-lg-6 ">
          <div class="user-box m-2">
            <TextField
              value={Value.Phone}
              type="text"
              onChange={(e) => handleChange(e)}
              fullWidth
              placeholder="Phone Number"
              name="Phone"
            />
          </div>
        </div>
      </div>

      <Button
        type="submit"
        onClick={() => handleSubmit(id)}
        variant="contained"
        className="m-3"
        style={{ backgroundColor: "#149686" }}
        color="success"
      >
        Submit
      </Button>
    </motion.div>
  );
};

export default EditProfile;
