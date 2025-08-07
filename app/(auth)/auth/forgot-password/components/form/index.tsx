'use client';

import { useEffect } from 'react';
import Mail from './mail';
import Verification from './verification';
import ResetPassword from './reset';
import useForgotPasswordStore from '@/app/lib/store/forgot-password';

const Form = () => {
  const { step } = useForgotPasswordStore();
  return (
    <>
      {step === 'send-email' && <Mail />}
      {step === 'verify-code' && <Verification />}
      {step === 'resetPassword' && <ResetPassword />}
    </>
  );
};

export default Form;
