import { useMutation } from '@tanstack/react-query';

import {
  ResetPasswordSchema,
  SendEmailSchema,
  VerifySchema,
} from '@/app/lib/schema/forgot-password';
import { useToastify } from '../../global/toast-notify';
import {
  resetPassword,
  sendEmail,
  verifyCode,
} from '@/app/lib/services/auth/forgot-password';
import useForgotPasswordStore from '@/app/lib/store/forgot-password';
import { ResetPasswordProps, VerifyProps } from './index.types';

export const useSendEmail = () => {
  const { OpenToastify } = useToastify();
  const { setStep, setExpiresAt } = useForgotPasswordStore();
  return useMutation({
    mutationFn: (data: SendEmailSchema) => {
      return sendEmail(data);
    },
    onSuccess: (response) => {
      OpenToastify(response.message, 'success');
      setExpiresAt(response.data.expiresAt);
      setStep('verify-code');
    },
    onError: () => {
      //
    },
  });
};

export const useVerifyCode = () => {
  const { OpenToastify } = useToastify();
  const { setStep } = useForgotPasswordStore();
  return useMutation({
    mutationFn: (data: VerifyProps) => {
      return verifyCode(data);
    },
    onSuccess: (response) => {
      OpenToastify(response.message, 'success');
      setStep('resetPassword');
    },
    onError: () => {
      //
    },
  });
};
export const useResetPassword = () => {
  const { OpenToastify } = useToastify();
  const { setStep } = useForgotPasswordStore();
  return useMutation({
    mutationFn: (data: ResetPasswordProps) => {
      return resetPassword(data);
    },
    onSuccess: (response) => {
      OpenToastify(response.message, 'success');
      setStep('successfully');
      window.location.href = '/auth/sign-in';
    },
    onError: () => {
      //
    },
  });
};
