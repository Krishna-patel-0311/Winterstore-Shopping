import React from "react";
import OrderItem from "./OrderItem";
const OrdersList = () => {
  const details = [
    {
      OrderId: "ORDX3235",
      OrderDate: "01-02-2023",
      CustomerName: "Nirav Patel",
      OrderAmount: "499",
      OrderStatus: "Cancelled",
    },
    {
      OrderId: "ORDX3236",
      OrderDate: "01-02-2023",
      CustomerName: "Jeel Patel",
      OrderAmount: "9999",
      OrderStatus: "Delivered",
    },
  ];
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "#101E2B", borderRadius: "20px" }}
    >
      <center>
        <h1 className="text-light">Orders</h1>
      </center>

      <table className="table table-borderless mt-2 text-center text-light">
        <thead>
          <tr className="row">
            <td className="col">OrderId</td>
            <td className="col">OrderDate</td>
            <td className="col">CustomerName</td>
            <td className="col">OrderAmount</td>
            <td className="col">OrderStatus</td>
            <td className="col-md-3">Action</td>
          </tr>
        </thead>
        <tbody>
          <OrderItem Values={details} />
        </tbody>
      </table>
    </div>
  );
};

export default OrdersList;
