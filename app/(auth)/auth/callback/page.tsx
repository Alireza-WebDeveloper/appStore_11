'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { setCookieWithDays } from '@/app/lib/utils/document.cookies';
import Animation from '@/app/lib/design/common/animation';
import SectionSpace from '@/app/lib/design/common/section-space';

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get('accessToken');
    const refreshToken = params.get('refreshToken');

    if (accessToken && refreshToken) {
      setCookieWithDays('access', accessToken, 7);
      setCookieWithDays('refresh', refreshToken, 30);
      router.replace('/');
    } else {
      console.warn('توکن‌ها یافت نشدند.');
    }
  }, [router]);

  return (
    <SectionSpace className="relative rounded-xl  p-6 max-w-xl w-full">
      <Animation />
    </SectionSpace>
  );
};

export default Page;
