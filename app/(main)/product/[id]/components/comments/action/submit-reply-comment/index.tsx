import { useFetchProfile } from '@/app/lib/hooks/auth';
import { useCreateReplyComment } from '@/app/lib/hooks/comments';
import { useToastify } from '@/app/lib/hooks/global/toast-notify';
import { Button, Textarea } from '@nextui-org/react';
import React, { useState } from 'react';

interface Props {
  isActiveReply: boolean;
  commentId: string;
}

const SubmitReplyComment: React.FC<Props> = ({ isActiveReply, commentId }) => {
  const [text, setText] = useState('');

  const { mutate: replyComment } = useCreateReplyComment();
  const { data: profile } = useFetchProfile();

  const { OpenToastify } = useToastify();

  const handleSubmit = (e: React.FormEvent) => {
    if (profile?.user) {
      //
      replyComment({ commentId, text });
    } else {
      OpenToastify('نیاز به ورود کاربری', 'error');
    }
  };

  return (
    <>
      {isActiveReply && (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 mt-4 bg-gray-50 p-6 rounded-lg shadow-lg"
        >
          <Textarea
            value={text}
            onValueChange={(value) => setText(value)}
            placeholder="پاسخ خود را بنویسید..."
          />
          <Button
           aria-label="submit-reply-comment"
            type="submit"
            className="w-fit bg-gradient-to-r from-orange-400 to-red-500 text-white hover:bg-gradient-to-l hover:from-red-500 hover:to-orange-400 shadow-lg transition duration-300 ease-in-out rounded-xl"
          >
            ارسال پاسخ
          </Button>
        </form>
      )}
    </>
  );
};

export default SubmitReplyComment;
