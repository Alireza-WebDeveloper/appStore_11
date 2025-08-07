import React, { ReactNode } from 'react';
import { Controller, Control, Path, FieldValues } from 'react-hook-form';
import { Textarea } from '@nextui-org/react';

type TextAreaControllerProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  trigger?: (name: Path<T>) => void;
  label?: string;
  endContent?: ReactNode;
  startContent?: ReactNode;
};

export const TextAreaController = <T extends FieldValues>({
  name,
  control,
  trigger,
  label,
  endContent,
  startContent,
}: TextAreaControllerProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Textarea
          {...field}
          label={label}
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
          minRows={4}
        />
      )}
    />
  );
};
