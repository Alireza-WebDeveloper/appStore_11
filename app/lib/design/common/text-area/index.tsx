import { Textarea } from '@nextui-org/react';
import React, { useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const variant = cva('', {
  variants: {
    size: {
      sm: 'text-sm p-2',
      md: 'text-base p-3',
      lg: 'text-lg p-4',
    },
  },
  defaultVariants: { size: 'md' },
});

interface Props extends VariantProps<typeof variant> {
  value: string;
  onChangeValue(value: string): void;
  className?: string;
}

const TextAreaContainer: React.FC<Props> = ({
  value,
  onChangeValue,
  className,
  size,
}) => {
  return (
    <div>
      <Textarea
        className={variant({ size })}
        value={value}
        onValueChange={(value) => onChangeValue(value)}
      />
      <span data-testid="length">{value.length}</span>
    </div>
  );
};

export default TextAreaContainer;
