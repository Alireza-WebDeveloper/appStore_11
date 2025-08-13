import React, { FC } from 'react';

type UserContactTitleProps = {
  className?: string;
  icon?: any;
  title: string;
};

const UserContactTitle: FC<UserContactTitleProps> = ({
  className = '',
  icon: IconComponent,
  title,
}) => {
  return (
    <h1
      className={`text-2xl font-bold mb-6 flex items-center gap-2 text-indigo-600 ${className}`}
    >
      {IconComponent && <IconComponent color="black" width={25} height={25} />}
      {title}
    </h1>
  );
};

export default UserContactTitle;
