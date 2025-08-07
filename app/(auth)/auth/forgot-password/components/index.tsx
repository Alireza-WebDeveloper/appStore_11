import LinkContainer from '@/app/lib/design/common/link-container';

import Title from '@/app/lib/design/common/title';

import Form from './form';
import Logo from '@/app/lib/design/common/logo';

const ForgotPassword = () => {
  return (
    <div className="flex flex-col gap-6">
      <Logo className="mx-auto" />
      <Title
        level={1}
        className="text-center text-xl font-semibold text-gray-700"
      >
        فراموشی رمز عبور
      </Title>
      <Form />
      <LinkContainer
        href={'/auth/sign-in'}
        className="text-sm text-center text-blue-600 hover:text-primary"
      >
        ورود به حساب کاربری
      </LinkContainer>
      *
    </div>
  );
};

export default ForgotPassword;
