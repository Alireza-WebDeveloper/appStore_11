'use client';
import React from 'react';
import ButtonMenu from '../../button-menu';
import {
  EmailIcon,
  ExitIcon,
  HomeIcon,
  PersonIcon,
  ShoppingCartFullIcon,
  SignInSquareIcon,
} from '../../icons';
import { UserState } from '@/app/lib/hooks/auth/index.types';

interface Props {
  profile: UserState;
}

const ButtonProfile: React.FC<Props> = ({ profile }) => {
  return (
    <div className="z-50">
      <ButtonMenu
        name={
          <div className="flex gap-2 justify-between w-full z-50">
            <span>
              {profile.firstName} {profile.lastName}
            </span>
            <span>کاربر</span>
          </div>
        }
        title="پروفایل"
        titleIcon={<PersonIcon color="white" />}
        menuItems={[
          {
            label: 'پنل کاربری',
            href: '/dashboard',
            icon: <HomeIcon color="black" width={20} height={20} />,
          },
          {
            label: 'سبد خرید',
            href: '/dashboard/cart',
            icon: <ShoppingCartFullIcon color="black" width={20} height={20} />,
          },
          {
            label: 'خروج کاربری',
            href: '/auth/sign-out',
            icon: <ExitIcon color="black" width={20} height={20} />,
          },
        ]}
      />
    </div>
  );
};

export default ButtonProfile;
