import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import DataTable, { createTheme } from "react-data-table-component";
export default function UserList() {
  createTheme(
    "custom",
    {
      text: {
        primary: "#FBFBFB",
        secondary: "#FFFFFF",
      },
      background: {
        default: "#101E2B",
      },
      context: {
        background: "#cb4b16",
        text: "#FFFFFF",
      },
      divider: {
        default: "#101E2B",
      },
      action: {
        button: "#FFFFFF",
        hover: "rgba(0,0,0,.08)",
        disabled: "rgba(0,0,0,.12)",
      },
    },
    "dark"
  );
  const navigate = useNavigate();
  const [Value, setValue] = useState([]);
  const token = localStorage.getItem("authtoken");
  axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/Users/");
      if (response.status === 200) {
        setValue(response.data);
        // console.log(response.data)
      }
    } catch (error) {
      toast.error("Error while fetching data");
    }
  };

  const handleEdit = (id) => {
    navigate(`/Admin/User/Edit/${id}`);
  };
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/User/${id}`);

      if (response.status === 200) {
        toast.success("User successfully deleted");
        getUsers();
      }
    } catch (error) {
      toast.error("Error While Deleting User");
    }
    // toast.error(`User with Id : ${id} is deleted`);
  };
  const columns = [
    {
      name: "FullName",
      selector: (row) => row.FirstName + " " + row.LastName,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.Email,
      sortable: true,
    },
    {
      name: "City",
      selector: (row) => row.City,
      sortable: true,
    },
    {
      name: "State",
      selector: (row) => row.State,
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row) => row.Phone,
      sortable: true,
    },
    {
      name: "Role",
      cell: (row) => (row.IsAdmin ? "Admin" : "User"),
      sortable: true,
    },
    {
      name: "Active",
      cell: (row) => (row.IsActive ? "Active" : "Deleted"),
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <>
          <Button
            variant="contained"
            className="m-1"
            style={{ backgroundColor: "#149686" }}
            onClick={() => handleEdit(row._id)}
          >
            <i className="bi bi-pencil-fill fa fa-2x m-auto"></i>
          </Button>
          <Button
            variant="contained"
            className="m-1"
            style={{ backgroundColor: "#149686" }}
            onClick={() => handleDelete(row._id)}
          >
            <i className="bi bi-trash fa fa-2x m-auto"></i>
          </Button>
        </>
      ),
    },
  ];
  const [Data, setData] = useState();
  function handleFilter(event) {
    const newData = Value.filter((row) => {
      return row.FirstName.toLowerCase().includes(
        event.target.value.toLowerCase()
      );
    });
    setData(newData);
    // console.log(event.target.value)
  }

  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 2, type: "spring" }}
      className="container-fluid px-4"
      style={{ backgroundColor: "#101E2B", borderRadius: "10px" }}
    >
      <center>
        <h1 className="text-light">User Details</h1>
      </center>
      <div className="contianer-fluid mt-3 py-3 ">
        <div className="text-end">
          <label className="h4 text-light">Search : </label>
          <input
            type="text"
            className="form-control w-25 ms-2 px-2 "
            placeholder="search by name"
            onChange={(e) => handleFilter(e)}
            style={{ float: "right" }}
          />
        </div>

        <DataTable
          columns={columns}
          pagination={true}
          data={Data ? Data : Value}
          style={{ backgroundColor: "#101E2B" }}
          theme="custom"
        />
      </div>
    </motion.div>
  );
}
