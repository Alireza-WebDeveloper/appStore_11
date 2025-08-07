'use client';

import { useFetchProfile } from '@/app/lib/hooks/auth';
import { useGetLikesUser } from '@/app/lib/hooks/like';
import FavoriteItem from './components/favorite-item';
import Animation from '@/app/lib/design/common/animation';
import NoResult from '@/app/lib/design/common/no-result';
import FavoritesActions from './components/action';

export default function FavoritesUI() {
  const { data: profile } = useFetchProfile();

  const {
    data: likesUser,
    isLoading,
    isRefetching,
  } = useGetLikesUser({
    isActive: profile?.user ? true : false,
  });

  const loading = isLoading || isRefetching;
  const isRenderData = likesUser && likesUser?.data.length > 0;

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold mb-4">علاقه‌مندی‌ها</h1>
      {loading ? (
        <Animation />
      ) : isRenderData ? (
        likesUser?.data.map((item) => {
          return <FavoriteItem item={item.productId} key={item._id} />;
        })
      ) : (
        <NoResult />
      )}
      {isRenderData && <FavoritesActions totalCount={likesUser.data.length} />}
    </div>
  );
}
