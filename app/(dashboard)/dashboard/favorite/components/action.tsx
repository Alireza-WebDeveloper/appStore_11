import { useRemoveAllLikesUser } from '@/app/lib/hooks/like';
import React from 'react';

export interface Props {
  totalCount: number;
}

const FavoritesActions: React.FC<Props> = ({ totalCount }) => {
  const { mutate: removeAllLikes } = useRemoveAllLikesUser();

  const handleRemoveAllLikes = () => {
    removeAllLikes();
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-right text-lg font-bold text-gray-700">
        تعداد محصولات علاقه‌مندی:
        <span className="text-primary-600">{totalCount} عدد</span>
      </p>

      <button
        onClick={handleRemoveAllLikes}
        className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors cursor-pointer"
        type="button"
      >
        حذف همه علاقه‌مندی‌ها
      </button>
    </div>
  );
};

export default FavoritesActions;
