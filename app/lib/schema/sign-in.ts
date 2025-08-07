import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'ایمیل نمی‌تواند خالی باشد')
    .email('ایمیل معتبر نیست'),
  password: z
    .string()
    .min(1, 'رمز عبور نمی‌تواند خالی باشد')
    .min(6, 'حداقل تعداد کاراکتر 6'),
});

export const verifySchema = z.object({
  code: z.string().length(6, 'کد باید 6 رقمی باشد'),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export type VerifySchema = z.infer<typeof verifySchema>;
