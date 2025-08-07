import React, { ReactNode } from 'react';
import { Controller, Control, Path, FieldValues } from 'react-hook-form';
import { Input } from '@nextui-org/react';

type InputControllerProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  trigger?: (name: Path<T>) => void;
  label?: string;
  type?: string;
  endContent?: ReactNode;
  startContent?: ReactNode;
  isDisabled?: boolean;
  autoComplete?: string;
};

export const InputController = <T extends FieldValues>({
  name,
  control,
  trigger,
  label,
  type = 'text',
  endContent,
  startContent,
  isDisabled,
  autoComplete = 'off',
}: InputControllerProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Input
          autoComplete={autoComplete}
          {...field}
          disabled={isDisabled}
          label={label}
          type={type}
          isInvalid={!!fieldState.error}
          errorMessage={fieldState.error?.message}
          endContent={endContent}
          startContent={startContent}
          onChange={(e) => {
            field.onChange(e);
            trigger?.(name);
          }}
          onBlur={(e) => {
            field.onBlur();
            trigger?.(name);
          }}
        />
      )}
    />
  );
};
