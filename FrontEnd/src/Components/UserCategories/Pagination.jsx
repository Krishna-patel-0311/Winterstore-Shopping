import React from 'react';

const Pagination = ({ currentPage, itemsPerPage, totalItems, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='mt-3'>
      <ul className="pagination">
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber} className="page-item">
            <button style={{backgroundColor:"#101E2B"}}
              onClick={() => onPageChange(pageNumber)}
              className={`btn m-1 text-light ${pageNumber === currentPage ? 'fa fa-2x' : ''}`}
            >
              {pageNumber}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};


export default Pagination;
