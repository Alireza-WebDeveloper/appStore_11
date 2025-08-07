import Text from '@/app/lib/design/common/text';

import { Avatar } from '@nextui-org/react';
import React from 'react';
import { Props } from './index.types';

const ReplyCommentItem: React.FC<Props> = ({ reply }) => {
  // !! Variables
  const user = reply.user;
  const role =
    user.role === 'user' ? 'کاربر' : user.role === 'admin' ? 'ادمین' : 'مهمان';
  const username = `${user.firstName} ${user.lastName}`;

  return (
    <section className={`flex flex-col gap-4 p-4 mr-4 bg-gray-100 rounded`}>
      <div className="flex flex-col">
        <Text className="mr-auto">{}</Text>
        <div className="flex items-center gap-3">
          <Avatar size="lg" />
          <div className="flex items-center gap-1">
            <Text size="lg" className="text-sm text-gray-600">
              {role}
            </Text>
            :
            <Text size="lg" className="text-xl font-semibold text-gray-800">
              {username}
            </Text>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Text className="text-gray-800 text-lg">{reply.text}</Text>
        </div>
      </div>
    </section>
  );
};

export default ReplyCommentItem;
