// src/components/Pagination.jsx
import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <div className="flex justify-center my-4">
      {currentPage > 1 && (
        <button
          className={`px-4 py-2 mx-1 ${
            currentPage === 1 ? "bg-gray-400" : "bg-blue-500 text-white"
          }`}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
      )}
      {pages.map((page) => (
        <button
          key={page}
          className={`px-4 py-2 mx-1 ${
            currentPage === page ? "bg-blue-500 text-white" : "bg-gray-600"
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      {currentPage < totalPages && (
        <button
          className={`px-4 py-2 mx-1 ${
            currentPage === totalPages
              ? "bg-gray-600"
              : "bg-blue-500 text-white"
          }`}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
