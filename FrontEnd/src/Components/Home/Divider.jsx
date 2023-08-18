import React from "react";

const Divider = (props) => {
  return (
    <div className="text-center mt-2">
      <hr
        style={{
          height: "2px",
          borderWidth: "0",
          color: "gray",
          backgroundColor: "gray",
        }}
      />
      <h3>{props.Title}</h3>
      <hr
        style={{
          height: "2px",
          borderWidth: "0",
          color: "gray",
          backgroundColor: "gray",
        }}
      />
    </div>
  );
};

export default Divider;
