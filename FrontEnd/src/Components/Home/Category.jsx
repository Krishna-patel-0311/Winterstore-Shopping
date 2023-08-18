import React from "react";
import Cards from "./Cards";
import female from "../../Images/female.json";
import male from "../../Images/male.json";
import kids from "../../Images/kids.json";
import { Table } from "@mui/material";
import { motion } from "framer-motion";

const Category = () => {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 1, type: "spring" }}
    >
      <Table>
        <tr className="row">
          <td className="col-md-4">
            <Cards Image={male} Title="Awesome Male Section" tag="Male" />
          </td>
          <td className="col-md-4">
            <Cards
              Image={female}
              Title="Fantastic Female Section"
              tag="Female"
            />
          </td>
          <td className="col-md-4">
            <Cards Image={kids} Title="Cool Kids Section" tag="Kids" />
          </td>
        </tr>
      </Table>
    </motion.div>
  );
};

export default Category;
