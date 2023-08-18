import { Button } from "@mui/material";
import React from "react";
import Delivered from "@mui/icons-material/DoneAll";
import Shipping from "@mui/icons-material/LocalShipping";
import Cancelled from "@mui/icons-material/Close";
import Returned from "@mui/icons-material/KeyboardReturn";

const OrderItem = (props) => {
  const Items = props.Values;
  return Items.map((item, i) => (
    <tr className="row" key={i}>
      <td className="col  sm-4">{item.OrderId}</td>
      <td className="col sm-4">{item.OrderDate}</td>
      <td className="col sm-4">{item.CustomerName}</td>
      <td className="col sm-4">{item.OrderAmount}</td>
      <td className="col sm-4">{item.OrderStatus}</td>
      <td className="col-md-3  sm-4">
        <Button
          variant="contained"
          startIcon={<Shipping />}
          style={{ backgroundColor: "#149686" }}
          className="m-1"
        >
          Shipped
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: "#149686" }}
          startIcon={<Delivered />}
          className="m-1"
        >
          Delivered
        </Button>
        <Button
          variant="contained"
          startIcon={<Cancelled />}
          style={{ backgroundColor: "#149686" }}
          className="m-1"
        >
          Cancelled
        </Button>
        <Button
          variant="contained"
          startIcon={<Returned />}
          style={{ backgroundColor: "#149686" }}
          className="m-1"
        >
          Returend
        </Button>
      </td>
    </tr>
  ));
};

export default OrderItem;
