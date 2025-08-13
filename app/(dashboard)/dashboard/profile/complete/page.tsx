'use client';

import UserContactTitle from '@/app/lib/design/common/user-contact-title';

const Page = () => {
  const onSubmit = () => {};

  return (
    <main className="max-w-4xl mx-auto mt-16 p-6 sm:p-10 bg-white rounded-lg shadow-lg">
      <UserContactTitle title="تکمیل اطلاعات حساب کاربری" />

      <form onSubmit={() => {}} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"></div>
      </form>
    </main>
  );
};

export default Page;
