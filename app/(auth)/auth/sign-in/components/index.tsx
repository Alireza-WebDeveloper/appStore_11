'use client';
import LinkContainer from '@/app/lib/design/common/link-container';

import Title from '@/app/lib/design/common/title';
import SignUpPrompt from './prompt';

import Form from './form';

import Logo from '@/app/lib/design/common/logo';
import { Button } from '@nextui-org/react';
import { GoogleIcon } from '@/app/lib/design/common/icons';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import toast from 'react-hot-toast';

const SignIn = () => {
  return (
    <div className="flex flex-col gap-6">
      <Logo className="mx-auto" />

      <Title
        level={1}
        className="text-center text-xl font-semibold text-gray-700"
      >
        ورود به حساب کاربری
      </Title>

      <Form />

      <div className="flex items-center gap-2 justify-center">
        <LinkContainer href={'http://localhost:8000/auth/google'}>
          <Button
            className="w-full bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            startContent={<GoogleIcon />}
          >
            ادامه با حساب گوگل
          </Button>
        </LinkContainer>
      </div>
      {/* <GoogleLogin
        onSuccess={async (res) => {
          const credential = res.credential;

          if (credential) {
            try {
              const response = await axios.post(
                'http://localhost:8000/api/auth/google',
                {
                  credential: true,
                },
                {
                  withCredentials: true, // اگر قراره کوکی ست بشه
                }
              );

              toast.success('ورود با گوگل موفق بود');

              console.log('✅ User:', response.data.user);
            } catch (err) {
              toast.error('ورود با گوگل شکست خورد');
              console.error(err);
            }
          }
        }}
        onError={() => {
          toast.error('ورود با گوگل شکست خورد');
        }}
      /> */}
      <LinkContainer
        href={'/auth/forgot-password'}
        className="text-sm text-center text-blue-600 hover:text-primary"
      >
        رمز عبور خود را فراموش کرده‌اید؟
      </LinkContainer>

      <SignUpPrompt />
    </div>
  );
};

export default SignIn;
