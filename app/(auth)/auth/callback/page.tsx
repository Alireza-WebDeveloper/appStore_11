'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { setCookieWithDays } from '@/app/lib/utils/document.cookies';
import Animation from '@/app/lib/design/common/animation';

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get('accessToken');
    const refreshToken = params.get('refreshToken');

    if (accessToken && refreshToken) {
      // ذخیره توکن‌ها
      setCookieWithDays('access', accessToken, 7);
      setCookieWithDays('refresh', refreshToken, 30);

      // localStorage.setItem('accessToken', accessToken);
      // localStorage.setItem('refreshToken', refreshToken);

      // پاک کردن URL و انتقال به صفحه اصلی یا داشبورد
      router.replace('/');
    } else {
      // اگر توکنی نبود، می‌تونی redirect کنی یا پیام خطا بدی
      console.warn('توکن‌ها یافت نشدند.');
    }
  }, [router]);

  return (
    <div className="flex justify-center items-center">
      <Animation />
    </div>
  );
};

export default Page;
