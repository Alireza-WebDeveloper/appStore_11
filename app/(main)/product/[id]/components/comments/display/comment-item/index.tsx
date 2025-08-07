import Text from '@/app/lib/design/common/text';
import { Avatar } from '@nextui-org/react';
import React, { useState } from 'react';
import { ReplyCommentIcon } from '@/app/lib/design/common/icons';

import { ConvertDateFormat } from '@/app/lib/utils/date.format';
import ReplyCommentItem from '../reply-comment-item';
import SubmitReplyComment from '../../action/submit-reply-comment';
import { Props } from './index.types';
import { useFetchProfile } from '@/app/lib/hooks/auth';
import toast from 'react-hot-toast';
import { useToastify } from '@/app/lib/hooks/global/toast-notify';

const CommentItem: React.FC<Props> = ({ comment }) => {
  // !! Variable
  const user = comment.user;
  const role =
    user.role === 'user' ? 'کاربر' : user.role === 'admin' ? 'ادمین' : 'مهمان';
  const username = `${user.firstName} ${user.lastName}`;
  const replies = comment.replies;

  const { data: profile } = useFetchProfile();

  const { OpenToastify } = useToastify();

  // !! State
  const [isActiveReply, setIsActiveReply] = useState(false);

  const isShowSubmitReply = profile?.user._id === comment.user._id;

  return (
    <div className="flex flex-col gap-8 p-6 bg-gray-50 rounded-xl shadow-lg">
      <section className="flex flex-col gap-4">
        <Text className="mr-auto">
          {ConvertDateFormat(comment.createdAt, 'fa')}
        </Text>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar size="lg" />
            <div className="flex items-center gap-1">
              <Text size="lg" className="text-sm text-gray-600">
                {role}
              </Text>{' '}
              :
              <Text size="lg" className="text-xl font-semibold text-gray-800">
                {username}
              </Text>
            </div>
          </div>

          {isShowSubmitReply ? (
            ''
          ) : (
            <span
              onClick={() => {
                if (profile?.user) {
                  setIsActiveReply((prev) => !prev);
                } else {
                  OpenToastify('نیاز به ورود کاربری', 'error');
                }
              }}
              className="cursor-pointer text-indigo-600 hover:text-indigo-800 transition duration-300"
            >
              <ReplyCommentIcon />
            </span>
          )}
        </div>
        <div className="flex justify-between items-center">
          <Text className="text-gray-800 text-lg">{comment.text}</Text>
        </div>
      </section>

      <SubmitReplyComment
        isActiveReply={isActiveReply}
        commentId={comment._id}
      />

      {replies.map((reply) => {
        return <ReplyCommentItem key={reply._id} reply={reply} />;
      })}
    </div>
  );
};

export default CommentItem;
