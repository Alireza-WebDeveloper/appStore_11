import LinkContainer from '@/app/lib/design/common/link-container';
import React from 'react';

const SignUpPrompt = () => {
  return (
    <div className="flex justify-center gap-2 items-center">
      <p className="text-sm text-gray-600">آیا هنوز حساب کاربری ندارید؟</p>
      <LinkContainer
        href="/auth/sign-up"
        className="text-primary font-semibold"
      >
        برای ثبت نام کلیک کنید
      </LinkContainer>
    </div>
  );
};

export default SignUpPrompt;
