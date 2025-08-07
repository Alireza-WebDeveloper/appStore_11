'use client';

import React from 'react';
import Image from 'next/image';
import { ImgContainerProps } from './index.types';
import { cn } from '@nextui-org/react';

const loadImage = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const ImgContainer: React.FC<ImgContainerProps> = ({
  src,
  alt = 'image',
  className = '',
  ...props
}) => {
  if (!src) {
    console.error('Image source is required.');
    return null;
  }

  return (
    <div className={cn('relative', className)}>
      <Image
        loader={loadImage}
        src={src}
        alt={alt}
        blurDataURL={src}
        loading="lazy"
        placeholder="blur"
        fill
        className={cn('', className)}
        {...props}
      />
    </div>
  );
};

export default ImgContainer;
