import { AddShoppingCart, ShoppingBag, StarBorder } from "@mui/icons-material";
import { Button, MenuItem, Rating, Select } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { AppContext } from "../context";
import { useNavigate, useParams } from "react-router-dom";

export const ProductDetails = () => {
  const { UserId, IsLoggedIn } = useContext(AppContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [Quantity, setQuantity] = useState("1");
  const rating = 3.5;
  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  const [Value, setValue] = useState([]);
  useEffect(() => {
    getProducts(id);
  }, [id]);

  const getProducts = async (Id) => {
    const token = localStorage.getItem("authtoken");
    axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
    try {
      const response = await axios.get(`http://localhost:5000/product/${Id}`);
      if (response.status === 200) {
        setValue(response.data);
        //   console.log(response.data)
        //   console.log(Value)
      }
    } catch (error) {
      toast.error("error occured");
    }
  };

  const handleAddCart = async () => {
    if (IsLoggedIn) {
      const Data = {
        UserId: UserId,
        ProductId: id,
        Quantity: Quantity,
        Price: Value.pprice,
      };
      try {
        const response = await axios.post(
          `http://localhost:5000/cart/${id}`,
          Data
        );
        if (response.status === 201) {
          toast.success("item successfully added to cart");
        }
      } catch (error) {
        toast.error("error occured");
      }
    } else {
      toast.warning("Login First to AddToCart");
    }
  };
  const handleBuynow = (id, price) => {
    if (IsLoggedIn) {
      const data = `${id}&${price}`;
      navigate(`/Products/Checkout/${data}`);
    } else {
      toast.warning("Login First to Buy Item");
    }
  };
  return (
    <div
      className="container"
      style={{ backgroundColor: "#101E2B", borderRadius: "20px" }}
    >
      <div className="row mt-5 mb-5">
        <div className={`${window.innerWidth < 768 ? "col-12" : "col-md-6"}`}>
          <img
            src={Value.pimage}
            style={{ width: "60%" }}
            className="m-5"
            alt="product"
          />
        </div>
        <div className="col">
          <div className="container-fluid text-light mt-2">
            <div className="row mt-4">
              <span>Product Name</span>
              <div className="col">
                <h4>{Value.pname}</h4>
              </div>
            </div>
            <div className="row mt-2">
              <span>Rating</span>
              <div className="col">
                <h4>
                  <Rating
                    style={{ color: "white" }}
                    name="text-feedback"
                    value={rating}
                    readOnly
                    precision={0.2}
                    emptyIcon={
                      <StarBorder
                        style={{ opacity: 0.55 }}
                        fontSize="inherit"
                      />
                    }
                  />
                </h4>
              </div>
            </div>

            <div className="row mt-2">
              <span>Manufacturer</span>
              <div className="col">
                <h4>{Value.pbrand}</h4>
              </div>
            </div>
            <div className="row mt-2">
              <span>Product Description</span>
              <div className="col">
                <h4>{Value.pdesc}</h4>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <h4>
                  <s>&#8377;{Value.pmrp}</s>
                  {"  "}&#8377;{Value.pprice}
                </h4>
              </div>
            </div>
            <div className="row mt-2">
              <span>Quantity</span>
              <div className="col">
                <Select
                  value={Quantity}
                  onChange={handleChange}
                  style={{
                    width: "70px",
                    height: "40px",
                    color: "black",
                    backgroundColor: "white",
                  }}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                </Select>
                <Button
                  size="medium"
                  className="m-3"
                  startIcon={<AddShoppingCart />}
                  style={{ borderRadius: "5px", backgroundColor: "#149686" }}
                  col
                  variant="contained"
                  onClick={() => handleAddCart(Quantity)}
                >
                  Add To Cart
                </Button>
              </div>
            </div>
            <div className="row mt-2 mb-5">
              <div className="col">
                <Button
                  size="medium"
                  startIcon={<ShoppingBag />}
                  style={{
                    width: "150px",
                    borderRadius: "5px",
                    backgroundColor: "#149686",
                  }}
                  col
                  variant="contained"
                  onClick={() => handleBuynow(Value._id, Value.pprice)}
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
