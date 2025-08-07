import { z } from 'zod';

export const sendEmailSchema = z.object({
  email: z
    .string()
    .min(1, 'ایمیل نمی‌تواند خالی باشد')
    .email('ایمیل معتبر نیست'),
});

export const verifySchema = z.object({
  code: z.string().length(6, 'کد باید 6 رقمی باشد'),
});

export const resetPasswordSchema = z.object({
  newPassword: z.string().min(6, 'حداقل تعداد کاراکتر 6'),
});

export type SendEmailSchema = z.infer<typeof sendEmailSchema>;

export type VerifySchema = z.infer<typeof verifySchema>;


export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;