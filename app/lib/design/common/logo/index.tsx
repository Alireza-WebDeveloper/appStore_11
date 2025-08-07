import LogoImg from '@/public/images/logo/website.png';
import ImgContainer from '../img-container';
import { cn } from '@/app/lib/utils/cn';
import React from 'react';

interface Props {
  className?: string;
}

const Logo: React.FC<Props> = ({ className }) => {
  return (
    <ImgContainer className={cn('w-14 h-14', className)} src={LogoImg.src} />
  );
};

export default Logo;
