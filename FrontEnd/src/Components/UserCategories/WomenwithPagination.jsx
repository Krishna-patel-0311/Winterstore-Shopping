import React, { useState } from 'react';
import Pagination from './Pagination';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { motion } from 'framer-motion'
import Womens from './Womens';
const WomenwithPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMens();
  }, []);

  const getMens = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/product/idealfor/Women`);
      if (response.status === 200) {
        setItems(response.data);
        setIsLoading(false);
      }
    } catch (error) {
      toast.error('Error Occurred');
    }
  };
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <motion.div
    initial={{x:'-100vw'}}
    animate={{x:0}}
 
    transition={{duration:2,type:"spring"}}>
      <Womens currentPage={currentPage} itemsPerPage={itemsPerPage} />
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={items.length}
        onPageChange={handlePageChange}
      />
    </motion.div>
  );
};

export default WomenwithPagination ;
