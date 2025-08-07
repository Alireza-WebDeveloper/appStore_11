'use client';
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@nextui-org/react';
import { PersonIcon } from '../icons';
import Text from '../text';

type MenuItem = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

interface ButtonMenuProps {
  menuItems: MenuItem[];
  title: string;
  titleIcon: React.ReactNode;
  name?: React.ReactNode;
}

const ButtonMenu: React.FC<ButtonMenuProps> = ({
  menuItems,
  title,
  titleIcon,
  name,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef: any = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <Button
        aria-label="btn-menu"
        color="primary"
        type="button"
        className="inline-flex w-full justify-center items-center gap-x-2 rounded-full bg-gradient-to-r px-4 py-2 text-sm font-semibold text-white shadow-lg transition duration-300 ease-in-out transform focus:outline-none"
        id="menu-button"
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-haspopup="true"
        onPress={toggleMenu}
      >
        {titleIcon}
        <Text size="md" className="text-white font-medium">
          {title}
        </Text>
      </Button>

      {isOpen && (
        <div
          ref={menuRef}
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black/5 transform transition-all duration-300 ease-in-out scale-95 hover:opacity-100 opacity-100"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          {/* نمایش نام شخص در صورت وجود */}
          {name && (
            <div className="px-4 py-2 text-sm text-gray-700 flex items-center">
              <Text size="md" className="font-semibold">
                {name}
              </Text>
            </div>
          )}

          {/* خط تقسیم‌کننده (divider) */}
          {name && <div className="h-px bg-gray-200 my-2" />}

          {/* لینک‌های منو */}
          {menuItems.map((item, index) => (
            <section
              key={index}
              className="px-4 cursor-pointer py-2 text-sm text-gray-700 w-full hover:bg-indigo-100 rounded-md transition duration-200 flex items-center justify-between gap-2"
              id={`menu-item-${index}`}
              onClick={() => {
                setIsOpen(false);
                router.push(item.href);
              }}
            >
              <Text>{item.label}</Text>
              {item.icon && item.icon}
            </section>
          ))}
        </div>
      )}
    </div>
  );
};

export default ButtonMenu;
