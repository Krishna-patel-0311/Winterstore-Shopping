import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Add } from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import DataTable, { createTheme } from "react-data-table-component";
import { motion } from "framer-motion";

export default function ProductList() {
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
    getProducts();
  }, []);
  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/product/getall");
      if (response.status === 200) {
        setValue(response.data);
        // console.log(Value)
      }
    } catch (error) {
      toast.error("Error while fetching data");
    }
  };

  const handleEdit = (id) => {
    navigate(`/Admin/Products/Edit/${id}`);
  };
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/product/${id}`
      );

      if (response.status === 200) {
        toast.success("product successfully deleted");
        // console.log(response)
        //  navigate('/Admin/Products/ProductList')
        // console.log(response.data)
      }
    } catch (error) {
      toast.error("Error While Deleting Product");
    }
    // toast.error(`item with price ${id} is deleted`);
  };
  const columns = [
    {
      name: "ProductName",
      selector: (row) => row.pname,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.pcategory,
      sortable: true,
    },
    {
      name: "Ideal For",
      selector: (row) => row.pidealfor,
      sortable: true,
    },
    {
      name: "Mrp",
      selector: (row) => row.pmrp,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => row.pprice,
      sortable: true,
    },
    {
      name: "Image",
      selector: (row) => (
        <img
          src={row.pimage}
          className="m-2"
          alt="product"
          height="100px"
          width="100px"
        />
      ),
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
            <i className="bi bi-trash-fill fa fa-2x m-auto"></i>
          </Button>
        </>
      ),
    },
  ];
  const [Data, setData] = useState();
  function handleFilter(event) {
    const newData = Value.filter((row) => {
      return row.pname.toLowerCase().includes(event.target.value.toLowerCase());
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
        <h1 className="text-light">Product Details</h1>
      </center>
      <div className="row">
        <div className="col">
          <Button
            variant="contained"
            color="success"
            onClick={() => navigate("/Admin/Products/Add")}
            style={{ float: "right" }}
            startIcon={<Add />}
          >
            Add Product
          </Button>
        </div>
      </div>
      {/* <ProductList /> */}
      <div className="contianer-fluid mt-3 py-3 ">
        {/* {Value} */}

        <div className="text-end">
          <label className="h4 text-light">Search : </label>
          <input
            type="text"
            className="form-control w-25 ms-2 px-2"
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
