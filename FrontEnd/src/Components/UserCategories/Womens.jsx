
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import ProductItem from './ProductItem';
import Loading from '../Loading';

const Womens = ({ currentPage, itemsPerPage }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getWomens();
  }, []);

  const getWomens = async () => {
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

  // Slice the items array based on the current page and the number of items per page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const slicedItems = items.slice(startIndex, endIndex);

  const rows = [];
  let row = [];

  for (let i = 0; i < slicedItems.length; i++) {
    const item = slicedItems[i];

    // Add the item to the current row
    row.push(
      <ProductItem key={i} data={item} className={'col-md-3'} />
    );

    // If the row is full or we're on the last item, add the row to the list of rows
    if (row.length === 4 || i === slicedItems.length - 1) {
      rows.push(
        <div className="row" key={rows.length}>
          {row}
        </div>
      );
      row = []; // Reset the current row
    }
  }

  // Wrap the rows in carousel items
  const ProductItems = rows.map((row, i) => (
    <div className="row" key={i}>
      {row}
    </div>
  ));

  return (
    <div
      className="container-fluid"
    >
      {isLoading?<Loading/> :ProductItems}
    </div>
  );
};

export default Womens;
