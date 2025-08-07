import React from 'react';
import { OtpInputProps } from './index.types';

const OtpInputNormal: React.FC<OtpInputProps> = ({
  value,
  onChange,
  length,
  errorMessage,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newValue = e.target.value;
    if (/^\d{0,1}$/.test(newValue)) {
      const newCode = value.split('');
      newCode[index] = newValue;
      onChange(newCode.join(''));

      if (newValue && index < length - 1) {
        const nextInput = document.getElementById(`otp-input-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === 'Backspace' && !value[index] && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handlePaste = (
    e: React.ClipboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const pastedData = e.clipboardData.getData('Text');
    if (/^\d{1,6}$/.test(pastedData)) {
      const newCode = value.split('');

      let pasteIndex = 0;
      for (let i = 0; i < length; i++) {
        if (!newCode[i] && pasteIndex < pastedData.length) {
          newCode[i] = pastedData[pasteIndex];
          pasteIndex++;
        }
      }

      onChange(newCode.join(''));

      const lastInput = document.getElementById(`otp-input-${pasteIndex - 1}`);
      lastInput?.focus();
    }
    e.preventDefault();
  };

  return (
    <div className="flex justify-center gap-4" dir="ltr">
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          id={`otp-input-${index}`}
          type="text"
          maxLength={1}
          value={value[index] || ''}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={(e) => handlePaste(e, index)}
          className="w-12 h-12 text-center border-2 border-gray-300 rounded-lg text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          autoFocus={index === 0}
        />
      ))}
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}{' '}
      {/* نمایش پیام خطا */}
    </div>
  );
};

export default OtpInputNormal;
