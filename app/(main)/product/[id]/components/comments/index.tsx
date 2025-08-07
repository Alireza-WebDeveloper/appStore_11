import CommentList from './display/comment-list';

import SectionTitle from '@/app/lib/design/common/section-title';

const Comments = () => {
  return (
    <div className="flex flex-col gap-4">
      <SectionTitle title="نظرات کاربران" />
      <CommentList />
    </div>
  );
};

export default Comments;
