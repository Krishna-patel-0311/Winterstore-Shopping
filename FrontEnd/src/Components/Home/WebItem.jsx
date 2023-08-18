import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context";
import { toast } from "react-toastify";
import axios from "axios";
const WebItem = (props) => {
  const { UserId, IsLoggedIn } = useContext(AppContext);
  const token = localStorage.getItem("authtoken");
  axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
  const handleAddCart = async () => {
    if (IsLoggedIn) {
      const Data = {
        UserId: UserId,
        ProductId: props.ItemId,
        Quantity: 1,
        Price: props.Price,
      };
      try {
        const response = await axios.post(
          `http://localhost:5000/cart/${UserId}`,
          Data
        );
        if (response.status === 201) {
          toast.success("item successfully added to cart");
        }
      } catch (error) {
        toast.error("error occured");
      }
    } else {
      toast.warning("Login First To AddToCart");
    }
  };
  return (
    <div className="container">
      <div
        className="product-block h-100 py-2"
        style={{
          backgroundColor: "#101E2B",
          color: "white",
          borderRadius: "15px",
        }}
      >
        <Link
          to={`/Products/ProductDetail/${props.ItemId}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <img
            className="d-block w-75 h-75 mt-3"
            style={{ margin: "auto" }}
            src={props.Image}
            alt="Product"
          />
          <h5 className="m-2"> {props.title}</h5>
          <p>
            <center>
              <s>&#8377;{props.Mrp}</s>
              {"  "}&#8377;{props.Price}
            </center>
          </p>
        </Link>
        <div className="row mb-3 text-center">
          <div className="col-12">
            <Button
              onClick={() => handleAddCart()}
              style={{ margin: "auto", borderRadius: "5px" }}
              color="secondary"
              variant="contained"
            >
              <i class="bi bi-cart me-2"></i>Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebItem;
