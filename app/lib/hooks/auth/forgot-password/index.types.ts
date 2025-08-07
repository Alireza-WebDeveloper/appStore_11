import { SendEmailSchema } from '@/app/lib/schema/forgot-password';

export interface SendEmailResponse {
  message: string;
  data: {
    expiresAt: string;
    expiresIn: number;
  };
}

export interface VerifyProps extends SendEmailSchema {
  code: string;
}
export interface ResetPasswordProps extends VerifyProps {
  newPassword: string;
}
