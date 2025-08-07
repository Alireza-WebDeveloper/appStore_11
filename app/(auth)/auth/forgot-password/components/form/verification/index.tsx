import { useSignIn } from '@/app/lib/hooks/auth';
import { Button } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputController } from '@/app/lib/design/common/input-controller';
import useForgotPasswordStore from '@/app/lib/store/forgot-password';
import {
  resetPasswordSchema,
  ResetPasswordSchema,
  verifySchema,
  VerifySchema,
} from '@/app/lib/schema/forgot-password';
import { useVerifyCode } from '@/app/lib/hooks/auth/forgot-password';
import CountdownTimer from '@/app/(auth)/auth/components/count-down-timer';
import OtpController from '@/app/(auth)/auth/components/otp-input-contoller';

const VerifyCode = () => {
  const { setCode, expiresAt, email } = useForgotPasswordStore();

  const { mutate: verifyCodeMutate, isLoading } = useVerifyCode();

  const onSubmit = (data: VerifySchema) => {
    const { code } = data;
    setCode(code);
    verifyCodeMutate({ code, email });
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<VerifySchema>({
    defaultValues: {
      code: '',
    },
    resolver: zodResolver(verifySchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <OtpController name="code" control={control} errors={errors} />
      <Button
        aria-label="verify-code"
        isLoading={isLoading}
        type="submit"
        color="success"
        size="lg"
      >
        تایید کد
      </Button>
      <CountdownTimer expiresAt={expiresAt} />
    </form>
  );
};

export default VerifyCode;
