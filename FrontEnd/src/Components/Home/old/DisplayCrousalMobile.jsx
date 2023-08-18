import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import MobileItem from "./MobileItem";

const DisplayCrousalMobile = (props) => {
  const [items, setitems] = useState([]);
  useEffect(() => {
    getFeaturedProducts(props.Idealfor);
  }, [props.Idealfor]);
  const getFeaturedProducts = async (idealFor) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/product/featured/${idealFor}`
      );
      if (response.status === 200) {
        setitems(response.data);
        // console.log(response.data)
      }
    } catch (error) {
      toast.error("Error Occurred");
    }
  };

  const rows = [];
  let row = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    // Add the item to the current row
    row.push(
      <MobileItem
        key={i}
        ItemId={item._id}
        Image={item.pimage}
        title={item.pname}
        Mrp={item.pmrp}
        Price={item.pprice}
        className={i === 0 ? "active" : ""}
      />
    );

    // If the row is full or we're on the last item, add the row to the list of rows
    if (row.length === 1 || i === items.length - 1) {
      rows.push(
        <div className="row" key={rows.length}>
          {row}
        </div>
      );
      row = []; // Reset the current row
    }
  }

  // Wrap the rows in carousel items
  const carouselItems = rows.map((row, i) => (
    <div className={`carousel-item ${i === 0 ? "active" : ""}`} key={i}>
      {row}
    </div>
  ));
  return <div className="carousel">{carouselItems}</div>;
};

export default DisplayCrousalMobile;
