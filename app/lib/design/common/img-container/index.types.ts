import { ImageProps } from 'next/image';

export interface ImgContainerProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string;
  className?: string;
  alt?: string;
}
