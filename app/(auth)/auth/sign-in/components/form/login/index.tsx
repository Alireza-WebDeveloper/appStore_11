import { EyeClosedIcon } from '@/app/lib/design/common/icons';
import { useSignIn } from '@/app/lib/hooks/auth';
import { loginSchema, LoginSchema } from '@/app/lib/schema/sign-in';
import useSignInStore from '@/app/lib/store/sign-in';
import { Button, Input } from '@nextui-org/react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputController } from '@/app/lib/design/common/input-controller';

const Login = () => {
  const { setEmail, setPassword } = useSignInStore();

  const { mutate: signInMutate, isLoading } = useSignIn();

  const onSubmit = (data: LoginSchema) => {
    const { email, password } = data;
    setEmail(email);
    setPassword(password);

    signInMutate({ email, password });
  };

  const { handleSubmit, control, trigger } = useForm<LoginSchema>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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

      <Button  aria-label="sign-in" isLoading={isLoading} type="submit" color="success" size="lg">
        ورود کاربری
      </Button>
    </form>
  );
};

export default Login;
