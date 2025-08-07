import { z } from 'zod';

export const signUpSchema = z.object({
  firstName: z.string().min(1, 'نام نمی‌تواند خالی باشد'),
  lastName: z.string().min(1, 'نام خانوادگی نمی‌تواند خالی باشد'),
  email: z.string().email('ایمیل معتبر نیست'),
  password: z.string().min(6, 'حداقل تعداد کاراکتر 6'),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
