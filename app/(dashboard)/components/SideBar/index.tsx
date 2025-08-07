'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useState } from 'react';
import {
  AngleArrowSmallRightIcon,
  ArrowRightIcon,
  BookmarkIcon,
  CalculatorIcon,
  EmailIcon,
  PasswordIcon,
  PersonIcon,
  SettingsIcon,
  ShoppingCartFullIcon,
  TruckIcon,
  UpdateProfileIcon,
} from '@/app/lib/design/common/icons';

import Profile from './Profile';
import SignOut from './sign-out';

const sidebarSections = [
  {
    title: 'سفارشات و خرید',
    items: [
      {
        label: 'سبد خرید',
        href: '/dashboard/cart',
        icon: <ShoppingCartFullIcon width={18} height={18} />,
      },
      {
        label: 'علاقه‌مندی‌ها',
        href: '/dashboard/favorite',
        icon: <BookmarkIcon width={18} height={18} color="white" />,
      },
      {
        label: 'سفارشات من',
        href: '/dashboard/orders',
        icon: <TruckIcon width={18} height={18} color="white" />,
      },
    ],
  },
  {
    title: 'حساب کاربری',
    items: [
      {
        label: 'اطلاعات حساب',
        href: '/dashboard/profile',
        icon: <PersonIcon width={18} height={18} />,
      },
      {
        label: 'تکمیل اطلاعات',
        href: '/dashboard/profile/complete',
        icon: <UpdateProfileIcon width={18} height={18} color="white" />,
      },
      {
        label: 'تغییر رمز عبور',
        href: '/dashboard/profile/change-password',
        icon: <PasswordIcon width={18} height={18} color="white" />,
      },
      {
        label: 'تغییر ایمیل',
        href: '/dashboard/profile/change-email',
        icon: <EmailIcon width={18} height={18} color="white" />,
      },
    ],
  },
];

const SideBar = () => {
  const pathname = usePathname();

  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    sidebarSections.reduce((acc, section) => {
      acc[section.title] = true;
      return acc;
    }, {} as Record<string, boolean>)
  );

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <aside className="top-0 right-0 h-full w-64 bg-neutral-900/90 backdrop-blur-xl shadow-2xl border-l border-neutral-800 z-50 hidden md:flex flex-col p-4 text-white">
      <Profile />

      <nav className="flex flex-col gap-6 overflow-y-auto">
        {sidebarSections.map((section) => {
          const isOpen = openSections[section.title] ?? false;

          return (
            <div key={section.title}>
              <div
                onClick={() => toggleSection(section.title)}
                className="text-xs text-white/60 px-3 mb-2 cursor-pointer select-none flex justify-between items-center"
              >
                {section.title}
                <span
                  className={clsx(
                    'transition-transform duration-300',
                    isOpen ? 'rotate-90' : 'rotate-0'
                  )}
                >
                  <AngleArrowSmallRightIcon
                    width={24}
                    height={24}
                    color="white"
                  />
                </span>
              </div>

              {isOpen && (
                <div className="flex flex-col gap-1">
                  {section.items.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={clsx(
                          'flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200',
                          isActive
                            ? 'bg-white/10 text-white font-semibold'
                            : 'text-white/60 hover:bg-white/5 hover:text-white'
                        )}
                      >
                        {item.icon}
                        <span className="text-sm">{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
      <SignOut />
    </aside>
  );
};

export default SideBar;
