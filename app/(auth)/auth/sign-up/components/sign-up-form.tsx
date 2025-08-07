'use client';

import { InputController } from '@/app/lib/design/common/input-controller';
import { useSignUp } from '@/app/lib/hooks/auth';
import { signUpSchema, SignUpSchema } from '@/app/lib/schema/sign-up';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@nextui-org/react';
import { useForm } from 'react-hook-form';

const SignUpForm = () => {
  const { handleSubmit, control, trigger } = useForm<SignUpSchema>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(signUpSchema),
  });

  const { mutate: signUpMutate, isLoading } = useSignUp();

  const onSubmit = (data: SignUpSchema) => {
    signUpMutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <InputController
        trigger={trigger}
        control={control}
        name="firstName"
        label="نام"
        type="text"
      />
      <InputController
        trigger={trigger}
        control={control}
        name="lastName"
        label="نام خانوادگی"
        type="text"
      />
      <InputController
        trigger={trigger}
        control={control}
        name="email"
        label="ایمیل کاربری"
        type="email"
      />
      <InputController
        trigger={trigger}
        control={control}
        name="password"
        label="رمز عبور"
        type="password"
      />
      <Button
        aria-label="sign-in"
        isLoading={isLoading}
        type="submit"
        color="success"
        size="lg"
      >
        ثبت نام کاربری
      </Button>
    </form>
  );
};

export default SignUpForm;
