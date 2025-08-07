import { useSignIn } from '@/app/lib/hooks/auth';
import { Button } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputController } from '@/app/lib/design/common/input-controller';
import useForgotPasswordStore from '@/app/lib/store/forgot-password';
import {
  sendEmailSchema,
  SendEmailSchema,
} from '@/app/lib/schema/forgot-password';
import { useSendEmail } from '@/app/lib/hooks/auth/forgot-password';

const Mail = () => {
  const { setEmail, email } = useForgotPasswordStore();

  const { mutate: sendEmailMutate, isLoading } = useSendEmail();

  const onSubmit = (data: SendEmailSchema) => {
    const { email } = data;
    setEmail(email);
    sendEmailMutate({ email });
  };

  const { handleSubmit, control, trigger } = useForm<SendEmailSchema>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(sendEmailSchema),
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

      <Button
        aria-label="sign-in"
        isLoading={isLoading}
        type="submit"
        color="success"
        size="lg"
      >
        تایید ایمیل
      </Button>
    </form>
  );
};

export default Mail;
