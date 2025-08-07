'use client';

import { useGetComments } from '@/app/lib/hooks/comments';
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import CommentItem from '../comment-item';
import SubmitComment from '../../action/submit-comment';
import { Pagination } from '@nextui-org/react';
import { useCreateQueryStrings } from '@/app/lib/hooks/global/useCreateQueryStringParams';
import SortBy from '../../action/sort-by';
import Text from '@/app/lib/design/common/text';

const CommentList = () => {
  // !! Hooks
  const param = useParams();
  const searchParams = useSearchParams();
  const createQueryParam = useCreateQueryStrings();
  const pathname = usePathname();
  const router = useRouter();

  // !! Param Variable
  const productId = param.id;
  const page = Number(searchParams.get('page')) || 1;
  const sortby = searchParams.get('sortby') || '';
  const limit = 5;

  // !! Fetch
  const { data } = useGetComments({
    productId: String(productId),
    params: {
      page,
      limit,
      sortby,
    },
  });

  const handlePagination = (numberPagination: number) => {
    createQueryParam({
      router,
      pathname,
      params: [
        {
          name: 'page',
          value: String(numberPagination),
        },
      ],
    });
  };

  const comments = data?.data.comments;
  const isRender = comments && comments.length > 0;

  return (
    <div className="flex flex-col gap-6 p-6 shadow rounded-2xl">
      <SubmitComment />
      {isRender ? (
        <>
          <SortBy />
          {comments?.map((comment) => {
            return <CommentItem comment={comment} key={comment._id} />;
          })}
          <Pagination
            showControls
            onChange={handlePagination}
            page={page}
            total={data?.data.totalPages || 0}
          />
        </>
      ) : (
        <Text size="lg">دیدگاهی ثبت نشده</Text>
      )}
    </div>
  );
};

export default CommentList;
