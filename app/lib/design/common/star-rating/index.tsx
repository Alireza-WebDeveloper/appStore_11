import React from 'react';
import { StarRatingProps } from './index.types';
import { cn } from '@/app/lib/utils/cn';

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  className,
  size = 'text-xl',
}) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <div className={cn('flex', className)}>
      {/* ستاره‌های پر */}
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className={cn('text-yellow-500', size)}
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}

      {/* ستاره نصفه */}
      {halfStar === 1 && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className={cn('text-yellow-500', size)}
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          <path d="M12 2v15l6.18-3.73L12 2z" />
        </svg>
      )}

      {/* ستاره‌های خالی */}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <svg
            key={index + fullStars + halfStar}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className={cn('text-yellow-500', size)}
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
    </div>
  );
};

export default StarRating;
