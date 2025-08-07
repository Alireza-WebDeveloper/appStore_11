'use client';

import { EmailIcon } from '@/app/lib/design/common/icons';

const Page = () => {
  return (
    <main className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2 text-indigo-600">
        <EmailIcon color="black" width={25} height={25} />
        تغییر ایمیل حساب کاربری
      </h1>
    </main>
  );
};

export default Page;
