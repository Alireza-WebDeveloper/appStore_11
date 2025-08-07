import { SendEmailSchema } from '@/app/lib/schema/forgot-password';
import api from '../..';
import {
  ResetPasswordProps,
  SendEmailResponse,
  VerifyProps,
} from '@/app/lib/hooks/auth/forgot-password/index.types';

const sendEmail = async (data: SendEmailSchema) => {
  const response = await api.post<SendEmailResponse>(
    '/auth/forgot-password/send-email',
    data
  );
  return response.data;
};

const verifyCode = async (data: VerifyProps) => {
  const response = await api.post('/auth/forgot-password/verify-code', data);
  return response.data;
};
const resetPassword = async (data: ResetPasswordProps) => {
  const response = await api.post('/auth/forgot-password/reset-password', data);
  return response.data;
};

export { sendEmail, verifyCode, resetPassword };
