import { cn } from '@/app/lib/utils/cn';
import React from 'react';
import Button from '../button';
import { PaginationProps } from './index.types';

const Pagination: React.FC<PaginationProps> = ({
  count,
  limit,
  currentPage,
  onPageChange,
  siblingCount = 1,
  boundaryCount = 1,
  showFirstLast = true,
  className,
}) => {
  const totalPages = Math.ceil(count / limit);

  // !! Generate Page Numbers
  const generatePageNumbers = () => {
    const pages = [];
    let startPage = Math.max(currentPage - siblingCount, 1);
    let endPage = Math.min(currentPage + siblingCount, totalPages);

    if (showFirstLast) {
      if (startPage > boundaryCount + 1) {
        pages.push(1);
        if (startPage > boundaryCount + 2) pages.push('...');
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (showFirstLast) {
      if (endPage < totalPages - boundaryCount) {
        if (endPage < totalPages - boundaryCount - 1) pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };
  const pageNumbers = generatePageNumbers();
  // !! Handlers
  const handlePageClick = (pageNumber: number) => {
    if (pageNumber !== currentPage) {
      onPageChange(pageNumber);
    }
  };

  return (
    <div
      className={cn('flex justify-center items-center gap-4 mt-4', className)}
    >
      <Button
        aria-label="btn-pagination"
        onClick={() => handlePageClick(1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 disabled:bg-gray-300 transition-all duration-200"
      >
        اول
      </Button>

      <Button
        aria-label="btn-pagination"
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 disabled:bg-gray-300 transition-all duration-200"
      >
        قبلی
      </Button>

      {pageNumbers.map((page, index) => (
        <Button
          aria-label="btn-pagination"
          key={index}
          onClick={() =>
            typeof page === 'number' ? handlePageClick(page) : null
          }
          className={`px-4 py-2 rounded-md transition-all duration-200 ${
            typeof page === 'number' && page === currentPage
              ? 'bg-teal-600 text-white'
              : 'bg-white text-teal-600 hover:bg-teal-100'
          }`}
        >
          {page}
        </Button>
      ))}

      <Button
        aria-label="btn-pagination"
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 disabled:bg-gray-300 transition-all duration-200"
      >
        بعدی
      </Button>

      <Button
        aria-label="btn-pagination"
        onClick={() => handlePageClick(totalPages)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 disabled:bg-gray-300 transition-all duration-200"
      >
        آخرین
      </Button>
    </div>
  );
};

export default Pagination;
