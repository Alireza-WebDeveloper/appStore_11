import Logo from '@/app/lib/design/common/logo';
import Title from '@/app/lib/design/common/title';
import SignUpForm from './sign-up-form';
import Prompt from './prompt';

const SignUp = () => {
  return (
    <div className="flex flex-col gap-6">
      <Logo className="mx-auto" />

      <Title
        level={1}
        className="text-center text-xl font-semibold text-gray-700"
      >
        ثبت نام حساب کاربری
      </Title>

      <SignUpForm />
      <Prompt />
    </div>
  );
};

export default SignUp;
