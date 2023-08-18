import { Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditUser = () => {
  const [Value, setValues] = useState([]);
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(Value.IsAdmin);
  const [isActive, setIsActive] = useState(Value.IsActive);
  const { id } = useParams();
  const token = localStorage.getItem("authtoken");
  axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
  useEffect(() => {
    getUsers(id);
  }, [id]);

  const getUsers = async (Id) => {
    const response = await axios.get(`http://localhost:5000/User/${Id}`);
    if (response.status === 200) {
      setValues(response.data);
    }
    if (response.status === 500) {
      toast.error("error occured");
    }
  };

  const handleChange = (e) => {
    setValues({
      ...Value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      ...Value,
      IsActive: isActive,
      IsAdmin: isAdmin,
    };
    try {
      const response = await axios.put(
        `http://localhost:5000/User/Edit/${Value._id}`,
        formData
      );
      if (response.status === 201) {
        toast.success("successfully Updated");
        navigate("/Admin/Users");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <div
      className="container p-5 mt-2 mb-2 box"
      style={{
        margin: "auto",
        backgroundColor: "#101E2B",
        boxShadow: "0 15px 25px rgba(0,0,0,.6)",
        borderRadius: "10px",
      }}
    >
      <p className="py-2">Edit Details</p>
      <form action="/" method="post">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-lg-6 ">
            <div class="user-box m-2">
              <input
                type="text"
                placeholder="Firstname"
                onChange={(e) => handleChange(e)}
                className="form-control py-2"
                value={Value.FirstName}
                name="Firstname"
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-6 ">
            <div class="user-box m-2">
              <input
                type="text"
                placeholder="Lastname"
                onChange={(e) => handleChange(e)}
                className="form-control"
                value={Value.LastName}
                name="Lastame"
              />
            </div>
          </div>
        </div>

        <div class="user-box m-2">
          <input
            type="email"
            onChange={(e) => handleChange(e)}
            className="form-control "
            value={Value.Email}
            placeholder="Email Address"
            name="Email"
          />
        </div>
        <div class="user-box m-2">
          <textarea
            onChange={(e) => handleChange(e)}
            placeholder="Address line 1"
            value={Value.Address}
            className="form-control py-3"
            name="address"
          />
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12 col-lg-6 ">
            <div class="user-box m-2">
              <input
                type="text"
                onChange={(e) => handleChange(e)}
                className="form-control"
                value={Value.City}
                placeholder="City"
                name="city"
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-6 ">
            <div class="user-box m-2">
              <input
                onChange={(e) => handleChange(e)}
                className="form-control "
                name="state"
                value={Value.State}
                placeholder="State"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12 col-lg-6 ">
            <div class="user-box m-2">
              <input
                type="text"
                onChange={(e) => handleChange(e)}
                className="form-control "
                value={Value.Zip}
                placeholder="Zip Code"
                name="pincode"
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-6 ">
            <div class="user-box m-2">
              <input
                type="text"
                onChange={(e) => handleChange(e)}
                className="form-control "
                value={Value.Phone}
                placeholder="Phone Number"
                name="phone"
              />
            </div>{" "}
          </div>
        </div>
        <div className="user-box m-2 py-2">
          <input
            type="checkbox"
            className="form-check-input"
            name="IsActive"
            checked={isActive ? true : false}
            onChange={() => {
              setIsActive(!isActive);
            }}
          />
          <span className="m-3">Active</span>
        </div>
        <div className="user-box m-2 py-2">
          <input
            type="checkbox"
            className="form-check-input"
            name="IsAdmin"
            checked={isAdmin ? true : false}
            onChange={() => {
              setIsAdmin(!isAdmin);
            }}
          />
          <span className="m-3">Register as admin</span>
        </div>
        <Button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          variant="contained"
          className="m-3"
          style={{ backgroundColor: "#149686" }}
          color="success"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default EditUser;
