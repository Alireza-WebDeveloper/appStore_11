import React from 'react';
import { Controller } from 'react-hook-form';
import OtpInput from '../otp-input-completed';

export interface Props {
  control: any;
  errors: any;
  name: string;
  length?: number;
}

const OtpController: React.FC<Props> = ({
  control,
  errors,
  name,
  length = 6,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState ,formState}) => (
        <OtpInput
          value={field.value}
          onChange={(newCode: string) => field.onChange(newCode)}
          length={length}
          errorMessage={errors.code?.message}
        />
      )}
    />
  );
};

export default OtpController;
