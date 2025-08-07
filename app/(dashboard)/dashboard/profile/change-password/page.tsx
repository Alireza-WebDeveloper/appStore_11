'use client';
import { LockIcon } from '@/app/lib/design/common/icons';

const Page = () => {
  return (
    <main className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2 text-indigo-600">
        <LockIcon color="#4F46E5" />
        تغییر رمز عبور
      </h1>
      <form onSubmit={() => {}} className="space-y-8"></form>
    </main>
  );
};

export default Page;
