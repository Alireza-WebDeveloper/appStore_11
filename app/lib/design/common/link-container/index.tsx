import { cn } from '@/app/lib/utils/cn';
import { Props } from './index.type';
import Link from 'next/link';

const LinkContainer = ({ href, className, children, id }: Props) => {
  return (
    <Link
      id={id}
      href={href ?? ''}
      draggable={false}
      className={cn('', className)}
    >
      {children}
    </Link>
  );
};

export default LinkContainer;
