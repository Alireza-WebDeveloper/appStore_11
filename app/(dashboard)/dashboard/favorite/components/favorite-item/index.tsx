import { ProductState } from '@/app/lib/hooks/product/index.types';

import { TrashIcon } from '@/app/lib/design/common/icons';
import ImgContainer from '@/app/lib/design/common/img-container';
import { useRemoveLikesUser } from '@/app/lib/hooks/like';
import { useQueryClient } from '@tanstack/react-query';
import { useToastify } from '@/app/lib/hooks/global/toast-notify';

interface FavoriteItemProps {
  item: ProductState;
}

const FavoriteItem = ({ item }: FavoriteItemProps) => {
  const { mutate: likesUser } = useRemoveLikesUser();
  const { OpenToastify } = useToastify();
  const queryClient = useQueryClient();

  const handleRemoveLikesUser = () => {
    likesUser(
      { productId: item._id },
      {
        onSuccess: (response) => {
          OpenToastify(response.message, 'success');
          queryClient.refetchQueries(['fetch-likes-user']);
        },
        onError: () => {},
      }
    );
  };

  return (
    <div className="flex items-center justify-between bg-white rounded-xl shadow-md p-4 gap-4">
      <div className="relative flex-shrink-0 rounded-md overflow-hidden border">
        <ImgContainer
          src={`${process.env.NEXT_PUBLIC_API_IMG}${item.image}`}
          className="w-28 h-28"
        />
      </div>

      <div className="flex-1 text-right">
        <h2 className="font-semibold text-lg">{item.name}</h2>
        <p className="text-gray-500 text-sm">
          قیمت:{' '}
          <span className="font-bold">{item.price.toLocaleString()} تومان</span>
        </p>
        <p className="text-gray-400 text-xs mt-1">
          {item.technicalSpecifications
            .slice(0, 2)
            .map((spec) => `${spec.key}: ${spec.value}`)
            .join(' | ')}
        </p>
      </div>

      <button
        onClick={handleRemoveLikesUser}
        className="text-red-600 hover:text-red-800 transition-colors cursor-pointer"
        title="حذف محصول"
        aria-label="حذف محصول"
        type="button"
      >
        <TrashIcon color="gray" />
      </button>
    </div>
  );
};

export default FavoriteItem;
