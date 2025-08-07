'use client';

import useSignInStore from '@/app/lib/store/sign-in';
import Login from './login';
import Verification from './verification';

const Form = () => {
  const { step } = useSignInStore();
  return (
    <>
      {step === 'sign-in' && <Login />}
      {step === 'verify-code' && <Verification />}
    </>
  );
};

export default Form;
