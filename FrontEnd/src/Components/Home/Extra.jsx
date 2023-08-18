import { Card, CardContent, CardHeader } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

const Extra = () => {
  return (
    <>
      <div className="row">
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          whileHover={{ scale: 0.96 }}
          transition={{ duration: 2, type: "spring" }}
          className="col-md-6 p-3"
        >
          <Card
            style={{
              backgroundColor: "#101E2B",
              borderRadius: "5px",
              boxShadow: "0 5px 10px rgba(0,0,0,.6)",
            }}
          >
            <CardHeader
              className="text-center"
              title={<i className="bi bi-truck fa-3x text-danger" />}
            />
            <CardContent className="text-center text-light">
              <h6>Free shipping</h6>
              <span> From all orders over &#8377;499</span>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ x: "100vh" }}
          animate={{ x: 0 }}
          whileHover={{ scale: 0.96 }}
          transition={{ duration: 2, type: "spring" }}
          className="col-md-6 p-3"
        >
          <Card
            style={{
              backgroundColor: "#101E2B",
              borderRadius: "5px",
              boxShadow: "0 5px 10px rgba(0,0,0,.6)",
            }}
          >
            <CardHeader
              className="text-center"
              title={<i className="bi bi-recycle fa-3x text-danger" />}
            />
            <CardContent className="text-center text-light">
              <h6>Free returns</h6>
              <span>Return money within 30 days</span>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <div className="row">
        <motion.div
          initial={{ x: "-100vh" }}
          animate={{ x: 0 }}
          whileHover={{ scale: 0.96 }}
          transition={{ duration: 2, type: "spring" }}
          className="col-md-6 p-3"
        >
          <Card
            style={{
              backgroundColor: "#101E2B",
              borderRadius: "5px",
              boxShadow: "0 5px 10px rgba(0,0,0,.6)",
            }}
          >
            <CardHeader
              className="text-center"
              title={<i className="bi bi-shield-lock fa-3x text-danger" />}
            />
            <CardContent className="text-center text-light">
              <h6>Secure shopping</h6>
              <span> You're in safe hands</span>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ x: "100vh" }}
          animate={{ x: 0 }}
          whileHover={{ scale: 0.96 }}
          transition={{ duration: 2, type: "spring" }}
          className="col-md-6 p-3"
        >
          <Card
            style={{
              backgroundColor: "#101E2B",
              borderRadius: "5px",
              boxShadow: "0 5px 10px rgba(0,0,0,.6)",
            }}
          >
            <CardHeader
              className="text-center"
              title={<i className="bi bi-tags fa-3x text-danger" />}
            />
            <CardContent className="text-center text-light">
              <h6>Over 10,000 Styles</h6>
              <span> We have everything you need</span>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </>
  );
};

export default Extra;
