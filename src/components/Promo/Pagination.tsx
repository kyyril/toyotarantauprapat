import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center items-center space-x-4 mt-6">
      <button
        onClick={handlePrevious}
        className={`px-4 py-2 rounded-lg ${
          currentPage === 1
            ? "bg-secondary cursor-not-allowed"
            : "bg-red-500 hover:bg-red-600"
        }`}
        disabled={currentPage === 1}
      >
        <ArrowLeft />
      </button>
      <span className="text-gray-600">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNext}
        className={`px-4 py-2 rounded-lg ${
          currentPage === totalPages
            ? "bg-secondary cursor-not-allowed"
            : "bg-red-500 hover:bg-red-600"
        }`}
        disabled={currentPage === totalPages}
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
