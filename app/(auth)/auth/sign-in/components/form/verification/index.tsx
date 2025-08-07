'use client';
import CountdownTimer from '@/app/(auth)/auth/components/count-down-timer';
import OtpController from '@/app/(auth)/auth/components/otp-input-contoller';
import { useVerifyCode } from '@/app/lib/hooks/auth';
import { verifySchema, VerifySchema } from '@/app/lib/schema/sign-in';
import useSignInStore from '@/app/lib/store/sign-in';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@nextui-org/react';
import { useForm } from 'react-hook-form';

const Verification = () => {
  const { expiresAt, email, password } = useSignInStore();

  const { mutate: verifyMutate, isLoading } = useVerifyCode();
  const onSubmit = (data: VerifySchema) => {
    const { code } = data;
    verifyMutate({ email, password, code });
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
      {/* <OtpInput
        value={code}
        onChange={(value) => setCode(value)}
        length={6}
        errorMessage=""
      /> */}
      <OtpController name="code" control={control} errors={errors} />
      <Button aria-label='verify-code' isLoading={isLoading} type="submit" color="success" size="lg">
        تایید کد
      </Button>
      <CountdownTimer expiresAt={expiresAt} />
    </form>
  );
};

export default Verification;
